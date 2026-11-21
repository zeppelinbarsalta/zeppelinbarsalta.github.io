/* =====================================================================
   Ausencias próximas — widget compartido para zeppelin-bar.com
   - Caja (/caja-zeppelin/): cartel en "Hoy" + marcas en la grilla
     "Asistencia del personal" (Resumen).
   - Panel de asistencia (/asistencia/panel/): cartel en la pestaña "Hoy".
   Lee la sesión compartida de Accesos (localStorage 'zpp_sesion') y consulta
   el backend de la Maestra (acción aus_proximas). No muestra motivos.
   Se incluye con: <script src="/equipo/aus-widget.js" defer></script>
   ===================================================================== */
(function () {
  'use strict';
  var API = 'https://script.google.com/macros/s/AKfycbww3YDOpbsU-YjTmxzGwZZFswKt7Odavmx4O0kP8cOBrAbYHShu8jSGsG8bhqemY89c/exec';
  var DIAS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  var TIPO = { franco: 'Día libre', examen: 'Examen', aviso: 'Falta avisada', tarde: 'Llega tarde', temprano: 'Sale antes' };
  var LETRA = { franco: 'L', examen: 'E', aviso: 'F', tarde: 'T', temprano: 'S' };
  var PATH = location.pathname.toLowerCase();
  var EN_CAJA = PATH.indexOf('/caja-zeppelin') === 0;
  var EN_PANEL = PATH.indexOf('/asistencia/panel') === 0;
  if (!EN_CAJA && !EN_PANEL) return;

  /* ---------- estilos ---------- */
  var css = '' +
    '.ausw{margin:0 0 14px;padding:12px 14px;border:1px solid rgba(255,90,0,.45);background:rgba(255,90,0,.07);border-radius:12px;font:13px/1.4 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:inherit}' +
    '.ausw h4{margin:0 0 8px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#FF5A00;display:flex;align-items:center;gap:8px}' +
    '.ausw h4 small{margin-left:auto;font-weight:400;letter-spacing:0;text-transform:none;opacity:.6}' +
    '.ausw .d{padding:6px 0;border-top:1px solid rgba(128,128,128,.2)}.ausw .d:first-of-type{border-top:0}' +
    '.ausw .dh{display:flex;gap:8px;align-items:baseline;font-weight:600}' +
    '.ausw .dh .c{margin-left:auto;font-weight:500;font-size:12px;opacity:.75}.ausw .dh .c.full{color:#ff453a;opacity:1}' +
    '.ausw .dh.hoy{color:#FF5A00}' +
    '.ausw .p{display:flex;gap:6px;align-items:baseline;padding-left:2px}' +
    '.ausw .p .t{opacity:.7;font-size:12px}' +
    '.ausw .pend{color:#ff9f0a;font-size:11px;font-weight:600}' +
    '.ausw .vacio{opacity:.65}' +
    '.ausw .err{opacity:.65;font-size:12px}' +
    'td.ausx{position:relative;box-shadow:inset 0 0 0 2px #ff453a}' +
    'td.ausx.ausp{box-shadow:inset 0 0 0 2px #ff9f0a}' +
    'td.ausx::after{content:attr(data-aus);position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 10px/1 system-ui,sans-serif;color:#ff453a;pointer-events:none}' +
    'td.ausx.ausp::after{color:#ff9f0a}' +
    'td.ausx.on::after{color:#fff}' +
    '.ausleg{margin:8px 0 0;font:12px/1.4 system-ui,sans-serif;opacity:.8;display:flex;flex-wrap:wrap;gap:6px 14px}' +
    '.ausleg i{display:inline-block;width:12px;height:12px;border-radius:2px;vertical-align:-2px;margin-right:4px;box-shadow:inset 0 0 0 2px #ff453a}' +
    '.ausleg i.p{box-shadow:inset 0 0 0 2px #ff9f0a}';
  var st = document.createElement('style'); st.id = 'aus-widget-css'; st.textContent = css; document.head.appendChild(st);

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hoyISO() { return new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10); }
  function sum(iso, n) { var d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function fTxt(iso) { var d = new Date(iso + 'T12:00:00Z'); return DIAS[d.getUTCDay()] + ' ' + iso.slice(8, 10) + '/' + iso.slice(5, 7); }
  function soloDig(x) { return String(x == null ? '' : x).replace(/\D/g, ''); }
  function token() {
    try { var s = JSON.parse(localStorage.getItem('zpp_sesion') || 'null'); return (s && s.token) ? String(s.token) : ''; } catch (e) { return ''; }
  }
  function etiqueta(a) {
    var t = TIPO[a.tipo] || a.tipo;
    if ((a.tipo === 'tarde' || a.tipo === 'temprano') && a.hora) t += ' ' + a.hora;
    return t;
  }
  function cuentaCupo(lista) { return lista.filter(function (a) { return a.tipo !== 'tarde' && a.tipo !== 'temprano'; }).length; }

  /* ---------- datos (con caché) ---------- */
  var DATA = null, CLAVE = '', CARGANDO = false, ERROR = '', ULT = 0;
  function cargar(desde, hasta, forzar) {
    var tk = token();
    if (!tk) { DATA = null; ERROR = ''; pintar(); return; }
    var clave = desde + '|' + hasta;
    if (!forzar && DATA && CLAVE === clave && Date.now() - ULT < 120000) { pintar(); return; }
    if (CARGANDO) return;
    CARGANDO = true;
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ token: tk, action: 'aus_proximas', desde: desde, hasta: hasta }) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.ok) { DATA = j; CLAVE = clave; ULT = Date.now(); ERROR = ''; }
        else { ERROR = (j && j.error) || 'error'; }
      })
      .catch(function () { ERROR = 'red'; })
      .then(function () { CARGANDO = false; pintar(); });
  }
  function porFecha() {
    var g = {};
    ((DATA && DATA.items) || []).forEach(function (a) { (g[a.fecha] = g[a.fecha] || []).push(a); });
    return g;
  }

  /* ---------- cartel ---------- */
  function htmlCartel(desde, dias, titulo, marcarFecha) {
    var g = porFecha(), cupo = (DATA && DATA.cupo) || 2, h = '', hoy = hoyISO();
    var fechas = [];
    for (var i = 0; i < dias; i++) { var f = sum(desde, i); if (g[f]) fechas.push(f); }
    h += '<h4>' + esc(titulo) + '<small>próximos ' + dias + ' días</small></h4>';
    if (ERROR === 'sesion') return h + '<div class="err">Iniciá sesión de nuevo para ver las ausencias.</div>';
    if (ERROR && !DATA) return h + '<div class="err">No se pudieron cargar las ausencias.</div>';
    if (!DATA) return h + '<div class="err">Cargando…</div>';
    if (!fechas.length) return h + '<div class="vacio">Nadie pidió días ni avisó faltas para estas noches.</div>';
    fechas.forEach(function (f) {
      var l = g[f], n = cuentaCupo(l);
      var cls = (f === marcarFecha) ? 'dh hoy' : 'dh';
      var rotulo = f === hoy ? 'Hoy · ' + fTxt(f) : (f === sum(hoy, 1) ? 'Mañana · ' + fTxt(f) : fTxt(f));
      h += '<div class="d"><div class="' + cls + '">' + esc(rotulo) + '<span class="c' + (n >= cupo ? ' full' : '') + '">' + n + ' de ' + cupo + ' ausentes</span></div>';
      l.forEach(function (a) {
        h += '<div class="p"><span>' + esc(a.nombre) + '</span><span class="t">· ' + esc(etiqueta(a)) + '</span>' +
          (a.estado === 'pendiente' ? '<span class="pend">SIN APROBAR</span>' : '') + '</div>';
      });
      h += '</div>';
    });
    return h;
  }

  /* ---------- Caja ---------- */
  function cajaFechaSel() { var i = document.getElementById('dateInput'); return (i && /^\d{4}-\d{2}-\d{2}$/.test(i.value)) ? i.value : hoyISO(); }
  function cajaRangoGrilla() {
    var cs = document.querySelectorAll('table.asis-cal td[data-asis-day]');
    if (!cs.length) return null;
    var a = cs[0].getAttribute('data-asis-day'), b = cs[cs.length - 1].getAttribute('data-asis-day');
    return a <= b ? [a, b] : [b, a];
  }
  function cajaRango() {
    var hoy = hoyISO(), sel = cajaFechaSel();
    var desde = sel < hoy ? sel : hoy, hasta = sum(sel > hoy ? sel : hoy, 8);
    var g = cajaRangoGrilla();
    if (g) { if (g[0] < desde) desde = g[0]; if (g[1] > hasta) hasta = g[1]; }
    if (hasta > sum(desde, 93)) hasta = sum(desde, 93);
    return [desde, hasta];
  }
  function cajaPintarHoy() {
    var main = document.getElementById('main');
    if (!main || !document.getElementById('bannerIng')) { var v = document.getElementById('ausw-caja'); if (v) v.remove(); return; }
    var el = document.getElementById('ausw-caja');
    if (!el) { el = document.createElement('div'); el.id = 'ausw-caja'; el.className = 'ausw'; main.insertBefore(el, main.firstChild); }
    var sel = cajaFechaSel();
    var html = htmlCartel(sel, 8, 'Ausencias del personal', sel);
    if (el.__h !== html) { el.innerHTML = html; el.__h = html; }
  }
  function cajaPintarGrilla() {
    var tb = document.querySelector('table.asis-cal');
    if (!tb) return;
    var staff = [];
    try { staff = (typeof CONFIG !== 'undefined' && CONFIG && CONFIG.staff) ? CONFIG.staff : []; } catch (e) { staff = []; }
    var idPorDni = {};
    staff.forEach(function (s) { var d = soloDig(s.dni); if (d) idPorDni[d] = String(s.id); });
    var marca = {};
    ((DATA && DATA.items) || []).forEach(function (a) {
      var id = idPorDni[soloDig(a.dni)];
      if (!id) return;
      var k = id + '|' + a.fecha;
      var prev = marca[k];
      // si hay más de una para la misma noche, gana la que no es tarde/temprano
      if (!prev || (prev.tipo === 'tarde' || prev.tipo === 'temprano')) marca[k] = a;
    });
    tb.querySelectorAll('td[data-asis-staff][data-asis-day]').forEach(function (td) {
      var a = marca[td.getAttribute('data-asis-staff') + '|' + td.getAttribute('data-asis-day')];
      if (a) {
        var letra = LETRA[a.tipo] || '•', tit = etiqueta(a) + (a.estado === 'pendiente' ? ' (sin aprobar)' : '');
        if (!td.classList.contains('ausx') || td.getAttribute('data-aus') !== letra) { td.classList.add('ausx'); td.setAttribute('data-aus', letra); }
        td.classList.toggle('ausp', a.estado === 'pendiente');
        if (td.title !== tit) td.title = tit;
      } else if (td.classList.contains('ausx')) {
        td.classList.remove('ausx', 'ausp'); td.removeAttribute('data-aus'); td.removeAttribute('title');
      }
    });
    var wrap = tb.closest('.asis-cal-wrap') || tb.parentElement;
    if (wrap && !(wrap.nextElementSibling && wrap.nextElementSibling.classList.contains('ausleg'))) {
      var lg = document.createElement('div'); lg.className = 'ausleg';
      lg.innerHTML = '<span><i></i>Ausencia (L día libre · E examen · F falta avisada · T llega tarde · S sale antes)</span><span><i class="p"></i>Pedido sin aprobar</span>';
      wrap.parentNode.insertBefore(lg, wrap.nextSibling);
    }
  }

  /* ---------- Panel de asistencia ---------- */
  function panelPintar() {
    var sec = document.getElementById('t-hoy');
    if (!sec) return;
    var el = document.getElementById('ausw-panel');
    if (!el) { el = document.createElement('div'); el.id = 'ausw-panel'; el.className = 'ausw'; sec.insertBefore(el, sec.firstChild); }
    var html = htmlCartel(hoyISO(), 14, 'Ausencias del personal', hoyISO());
    if (el.__h !== html) { el.innerHTML = html; el.__h = html; }
  }

  /* ---------- ciclo ---------- */
  function pintar() {
    if (!token()) {
      ['ausw-caja', 'ausw-panel'].forEach(function (id) { var e = document.getElementById(id); if (e) e.remove(); });
      return;
    }
    if (EN_CAJA) { cajaPintarHoy(); cajaPintarGrilla(); }
    if (EN_PANEL) panelPintar();
  }
  function ciclo(forzar) {
    if (EN_CAJA) { var r = cajaRango(); cargar(r[0], r[1], forzar); }
    else cargar(hoyISO(), sum(hoyISO(), 14), forzar);
  }
  var pend = null;
  var obs = new MutationObserver(function (muts) {
    // ignorar cambios hechos por el propio widget
    var propio = muts.every(function (m) {
      var t = m.target;
      return (t.id && t.id.indexOf('ausw') === 0) || (t.closest && t.closest('.ausw,.ausleg')) ||
        (m.type === 'attributes' && t.tagName === 'TD');
    });
    if (propio) return;
    clearTimeout(pend);
    pend = setTimeout(function () { ciclo(false); }, 150);
  });
  function arrancar() {
    obs.observe(document.body, { childList: true, subtree: true });
    var di = document.getElementById('dateInput');
    if (di) di.addEventListener('change', function () { ciclo(false); });
    ciclo(true);
    setInterval(function () { ciclo(true); }, 3 * 60 * 1000);
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') ciclo(true); });
    window.addEventListener('storage', function (e) { if (e.key === 'zpp_sesion') ciclo(true); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();
  window.ausWidgetRefrescar = function () { ciclo(true); };
})();
