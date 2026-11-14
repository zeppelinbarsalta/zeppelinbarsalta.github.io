/* Contenido de manuales, protocolos y reglamento — Zeppelin Bar.
   Fuente: carpeta RRHH (Drive zeppelin.administracion). Para cambiar un texto, editalo acá.
   Si cambiás el REGLAMENTO, subí REGLAMENTO.version: el equipo va a tener que aceptarlo de nuevo. */

window.ZEP_CONTENIDO = {

/* ===================== MANUAL DE PROCEDIMIENTOS ===================== */
MANUAL: {
  titulo: 'Manual de Procedimientos',
  sub: 'Protocolos · Responsabilidades · Procedimientos',
  puestos: [
  { id:'encargado', nombre:'Encargado', meta:['1 por turno','Sala — recorriendo todos los sectores'], secciones:[
    { t:'Apertura y preparación del turno', p:'El encargado es el primero en llegar y el último en irse. Antes de abrir, verificar:', items:[
      'Todo el equipo presente y en su puesto.',
      'Sala, barra y cocina listas para el servicio.',
      'Caja abierta y fondo verificado.',
      'Reservas del turno revisadas y organizadas por sector.',
      'Handies distribuidos, cargados y funcionando.',
      'Cualquier novedad del turno anterior resuelta o en proceso.'],
      nota:'Hacer una reunión breve de pre-turno con todo el equipo: reservas importantes, eventos especiales, faltantes de stock e instrucciones particulares del turno.' },
    { t:'Supervisión del equipo en sala y cocina', items:[
      'Recorrer permanentemente todos los sectores: sala, barra, cocina y caja.',
      'Verificar que cada puesto cumpla su protocolo sin necesidad de recordárselo.',
      'Intervenir discretamente cuando un puesto esté desbordado o no rinda al nivel esperado.',
      'Nunca corregir a un empleado frente a clientes: hacerlo en privado y con claridad.',
      'Que ninguna mesa quede más de 5 minutos sin contacto del mozo de zona.',
      'Desde la 1:00, recorrer las mesas saludando y verificando que los clientes estén conformes.'] },
    { t:'Reservas y eventos especiales', items:[
      'Antes de abrir, verificar que todas las reservas estén asignadas a un sector y comunicadas al Hostess y a los camareros.',
      'Coordinar tickets de consumición y cualquier detalle especial acordado con el cliente.',
      'Ante cambios de último momento (más personas, cambio de horario, cancelación), resolverlos y avisar al equipo de inmediato.'] },
    { t:'Manejo de conflictos y reclamos', p:'Es la autoridad máxima en sala durante el turno. Ante un reclamo de cliente:', items:[
      'Acercarse de inmediato, con calma y actitud resolutiva.',
      'Escuchar al cliente sin interrumpir.',
      'Disculparse en nombre del bar: «Lamentamos lo ocurrido, lo vamos a resolver ahora mismo.»',
      'Tomar una decisión concreta: reposición, descuento o cortesía según la situación.',
      'Hacer seguimiento hasta que el cliente quede conforme.',
      'Reportar el incidente al dueño al cierre: qué pasó y cómo se resolvió.',
      'Ante conflictos entre clientes o situaciones de seguridad, actuar con firmeza y coordinar con seguridad.'] },
    { t:'Control de caja y cierre', items:[
      'Supervisar el conteo de caja junto al cajero.',
      'Verificar que los totales por medio de pago cuadren con lo registrado.',
      'Ante cualquier diferencia, investigar antes de cerrar: nunca dejar una diferencia sin explicación.',
      'Guardar el efectivo según el procedimiento establecido.',
      'Validar el reporte de cierre de caja.'] },
    { t:'Reporte al dueño', p:'Al cierre de cada turno, enviar un reporte con:', items:[
      'Total recaudado por medio de pago.',
      'Incidentes o conflictos del turno y cómo se resolvieron.',
      'Faltantes de stock o insumos a reponer.',
      'Novedades del equipo (ausencias, llegadas tarde, problemas de desempeño).',
      'Observaciones generales del turno.'],
      nota:'El reporte tiene que ser claro, concreto y sin omisiones: el dueño toma decisiones con esta información.' },
    { t:'Cierre y seguridad del local', p:'El encargado es el último en irse y el responsable de que el local quede seguro. Antes de cerrar, verificar:', items:[
      'Sala, barra y cocina limpias y ordenadas.',
      'Gas apagado en cocina y equipos eléctricos apagados (luces, amplificadores).',
      'Puertas y ventanas cerradas con llave.',
      'Alarma activada.',
      'Caja cerrada y dinero guardado.',
      'Todo el equipo retirado y el local en condiciones antes de salir.'] }
  ]},
  { id:'cajero', nombre:'Cajero', meta:['2 por turno','Caja'], secciones:[
    { t:'Apertura de caja', p:'Antes de abrir, verificar:', items:[
      'Fondo de caja completo y contado.',
      'Posnet funcionando y con papel.',
      'Sistema de caja operativo.',
      'Tickets de consumición disponibles y en orden.'],
      nota:'Cualquier faltante o problema técnico se reporta al encargado antes de abrir, nunca durante el servicio.' },
    { t:'Cobro y medios de pago', p:'Zeppelin acepta efectivo, tarjeta de crédito y débito, Mercado Pago y QR.', items:[
      'Confirmar siempre el medio de pago antes de procesar: «¿Cómo van a abonar?»',
      'Con tarjeta, esperar la confirmación del posnet antes de dar por cerrada la transacción.',
      'Con QR o Mercado Pago, verificar la acreditación en pantalla antes de liberar la mesa.',
      'No aceptar billetes en mal estado o de dudosa procedencia; ante la duda, consultar al encargado.',
      'Entregar siempre el comprobante de pago.'],
      nota:'Procuremos llevar el posnet a la mesa para cobrar.' },
    { t:'Coordinación con mozos', items:[
      'El mozo de zona lleva la cuenta a la mesa: el cajero la prepara y se la entrega.',
      'Ante dudas sobre los consumos de una mesa, consultar al mozo antes de cerrar la cuenta.',
      'Si un mozo detecta un error en la cuenta, corregirlo de inmediato y avisar al encargado.',
      'Responder rápido cuando un mozo pide una cuenta: el tiempo de cobro impacta directo en la experiencia del cliente.'] },
    { t:'Tickets y consumiciones', items:[
      'Los tickets de consumición de cumpleaños se entregan desde caja al Hostess, que los reparte en mesa.',
      'Registrar qué tickets se entregaron y a qué mesa (anotarlo junto a la reserva en el calendario).',
      'No entregar tickets sin autorización del encargado o del Hostess.',
      'Ante cualquier inconsistencia en los tickets, avisar al encargado de inmediato.'] },
    { t:'Aviso de faltantes', p:'Avisar al encargado de inmediato, sin esperar a quedarse sin stock, si falta:', items:[
      'Papel para el posnet.',
      'Fondo de caja para dar cambio.',
      'Tickets de consumición.',
      'Cualquier otro insumo de caja.'] },
    { t:'Errores o reclamos de cobro', p:'Si un cliente reclama un error en su cuenta:', items:[
      'Escuchar con calma y sin ponerse a la defensiva.',
      'Revisar la cuenta junto al mozo de zona.',
      'Si hay un error, corregirlo de inmediato y disculparse: «Tiene razón, ya lo corregimos.»',
      'Si no hay error, explicarlo con claridad y cortesía.',
      'Si no se puede resolver, llamar al encargado. Nunca discutir con el cliente.'] },
    { t:'Cierre y diferencias', p:'Al cierre del turno:', items:[
      'Contar la caja.',
      'Registrar el total por medio de pago (efectivo, tarjeta, Mercado Pago).',
      'Informar cualquier diferencia entre lo cobrado y lo registrado, por mínima que sea.',
      'Entregar el fondo de caja y los comprobantes al encargado antes de irse.'] }
  ]},
  { id:'bartender', nombre:'Bartender', meta:['2 por turno','Detrás de la barra'], secciones:[
    { t:'Mise en place y apertura', p:'Antes de abrir, verificar que la barra esté completa y lista:', items:[
      'Hielo suficiente, vasos limpios y en cantidad.',
      'Insumos básicos: jugos, gaseosas, sifones, limones, yerba buena, azúcar, etc.',
      'Bebidas ordenadas y accesibles por categoría.',
      'Herramientas limpias: cocteleras, jiggers, cucharas, tabla y cuchillo.',
      'Barra limpia, seca y presentable.'],
      nota:'Cualquier faltante detectado antes de abrir se reporta al encargado con anticipación.' },
    { t:'Atención en barra', items:[
      'Saludar apenas el cliente llega a la barra: «Buenas noches, ¿ya compraron en caja? ¿Qué les servimos?»',
      'Si hay demora por otro pedido, reconocer su presencia: «Ya los atendemos, un segundo.»',
      'Entregar siempre el vaso limpio, seco y bien presentado.',
      'Pedidos de mesa: prepararlos en el orden en que entran.',
      'Si falta un insumo o hay dudas con una preparación, avisar al mozo de zona antes de demorar la entrega.',
      'Llamar al Runner de Barra cuando el pedido esté listo.'] },
    { t:'Coordinación con mozos y runners', items:[
      'El punto de retiro de bebidas es fijo y lo conoce todo el equipo: los runners retiran siempre desde ahí.',
      'Pedidos urgentes o especiales: avisar por handie al mozo de zona.',
      'Ante dudas sobre a qué mesa va un pedido, consultar antes de preparar.'] },
    { t:'Reposición y alerta de stock', p:'Durante el servicio, controlar todo el tiempo:', items:[
      'Bebidas (cervezas, vinos, espirituosas, gaseosas, aguas).',
      'Insumos de coctelería (jugos, pulpas, frutas, hierbas).',
      'Hielo.',
      'Vasos y copas limpios.'],
      nota:'Ante stock bajo, avisar al encargado por handie: «Encargado, aviso que [producto] está por agotarse / se agotó.» No esperar a quedarse sin stock.' },
    { t:'Trato con el cliente', items:[
      'Actitud cordial y profesional siempre, incluso en los picos de demanda.',
      'Si piden recomendación, orientar con seguridad y sin apuro; ofrecer la ruleta de tragos.',
      'No consumir alcohol durante el servicio.',
      'No usar el celular con clientes en barra o pedidos pendientes.'] },
    { t:'Quejas o conflictos', items:[
      'Escuchar sin interrumpir ni justificarse.',
      'No discutir bajo ninguna circunstancia.',
      'Disculparse: «Lamentamos lo ocurrido, ya mismo lo resolvemos.»',
      'Avisar de inmediato al encargado.',
      'No tomar decisiones por cuenta propia (reposiciones, descuentos) sin autorización.'] },
    { t:'Cierre y limpieza', items:[
      'Vaciar y limpiar las hieleras.',
      'Lavar y guardar todas las herramientas.',
      'Cubrir o guardar correctamente las bebidas abiertas.',
      'Dejar la barra limpia, seca y ordenada.',
      'Reponer las heladeras.',
      'Informar al encargado faltantes o roturas del turno.'] }
  ]},
  { id:'cocina', nombre:'Cocinero y ayudantes', meta:['1 cocinero · 2 ayudantes','Cocina'], secciones:[
    { t:'Mise en place y apertura', p:'El cocinero es responsable de que la cocina esté lista antes de abrir; los ayudantes ejecutan bajo su dirección. Verificar:', items:[
      'Todos los insumos del menú disponibles y en condiciones.',
      'Salsas, bases y preparaciones previas listas.',
      'Equipos funcionando (plancha, freidora, horno, etc.).',
      'Estaciones de trabajo limpias y organizadas.',
      'Vajilla, tablas y utensilios en su lugar.'],
      nota:'Faltantes o problemas de equipos se reportan al encargado antes de abrir, nunca durante el servicio.' },
    { t:'Durante el servicio — Cocinero', items:[
      'Liderar cada orden y asignar tareas a los ayudantes según la demanda.',
      'Revisar cada plato antes de que salga: presentación, temperatura y pedido completo.',
      'Avisar al Runner de Cocina cuando una orden está lista.',
      'Si un pedido va a demorar más de lo habitual, avisar al runner para que informe a la mesa.'] },
    { t:'Durante el servicio — Ayudantes', items:[
      'Ejecutar sin demora las tareas que asigna el cocinero.',
      'Mantener las estaciones abastecidas y limpias.',
      'Nunca despachar un plato sin que el cocinero lo haya revisado.'] },
    { t:'Coordinación con runner o camarero', items:[
      'El punto de entrega de órdenes es fijo: el Runner de Cocina retira siempre desde ahí.',
      'Avisar cuando una orden está lista: «Mesa [número], orden lista.»',
      'Ante dudas (modificaciones, alergias, pedidos especiales), consultar al runner antes de preparar.',
      'Si un pedido no se puede hacer (falta de insumo, problema técnico), avisar de inmediato para gestionarlo con la mesa.'] },
    { t:'Tiempos y calidad', items:[
      'El cocinero responde por los tiempos de salida: ningún plato se demora sin justificación ni aviso.',
      'Todo plato sale con la presentación estándar del menú.',
      'No despachar platos fríos, incompletos o mal presentados bajo ninguna circunstancia.',
      'Si un plato vuelve por reclamo, el cocinero evalúa si se repone, siempre informando al encargado.'] },
    { t:'Stock e insumos', items:[
      'Controlar durante el servicio los insumos críticos.',
      'Los ayudantes mantienen las estaciones abastecidas sin que el cocinero tenga que pedirlo.',
      'Si un insumo está por agotarse, avisar al cocinero para que lo reporte al encargado.'],
      nota:'El cocinero avisa al encargado: «Encargado, aviso que [insumo] está por agotarse / se agotó.» No improvisar sustituciones sin autorización. Al cierre, entregar al encargado la lista de insumos a reponer.' },
    { t:'Limpieza y cierre de cocina', items:[
      'Limpiar plancha, freidora, hornallas y superficies.',
      'Guardar insumos correctamente (temperatura, envases cerrados, etiquetado).',
      'Lavar y guardar utensilios y herramientas.',
      'Barrer y trapear el piso.',
      'Vaciar y limpiar los cestos de basura.',
      'Verificar que el gas y los equipos queden apagados.',
      'Informar al encargado roturas, faltantes o problemas de equipos.'] }
  ]},
  { id:'bachero', nombre:'Bachero', meta:['1 por turno','Área de lavado'], secciones:[
    { t:'Lavado y vajilla', items:[
      'Lavar vasos, copas, platos, cubiertos y herramientas de barra de forma continua durante todo el servicio.',
      'El lavado es prioritario: no puede acumularse vajilla sucia que frene a barra o cocina.',
      'Secar y revisar cada pieza antes de reponer: nada húmedo ni con restos.',
      'Mantener el área de lavado limpia y ordenada.'] },
    { t:'Coordinación con barra y cocina', items:[
      'Estar atento a los pedidos de reposición sin que tengan que llamarte dos veces.',
      'Si barra o cocina necesitan material limpio con urgencia, priorizarlo y enviarlo con el runner o el comis.'] },
    { t:'Reposición', items:[
      'Reponer vasos y copas en barra antes de que se agoten.',
      'Controlar los niveles: vasos de trago largo, corto, copas de vino, jarras, según la carta.',
      'Reponer cubiertos y platos en cocina con la misma lógica.'] },
    { t:'Residuos y limpieza general', items:[
      'Sacar las bolsas de basura cuando estén llenas, sin esperar indicación.',
      'Mantener seco el piso del área de lavado para evitar accidentes.',
      'No acumular residuos orgánicos: desecharlos de inmediato.',
      'Ante derrames o roturas en el bar, colaborar con la limpieza si no hay vajilla urgente.'] },
    { t:'Vajilla rota o deteriorada', items:[
      'Sacar de circulación de inmediato cualquier pieza rota o en mal estado.',
      'Informar al encargado al final del turno: «Esta noche se rompieron [cantidad] vasos / hay [cantidad] cubiertos doblados.»',
      'Nunca reponer material roto, rajado o en mal estado.'] },
    { t:'Cierre', items:[
      'Lavar y guardar toda la vajilla restante.',
      'Limpiar pileta, mesadas y paredes del área de lavado.',
      'Vaciar y limpiar los cestos de basura.',
      'Dejar el piso seco y barrido.',
      'Informar al encargado las novedades del turno.'] }
  ]},
  { id:'host', nombre:'Host / Hostess', meta:['Junto a la puerta, del lado de adentro','En el puesto hasta las 00:30'], secciones:[
    { t:'Recepción — con reserva', items:[
      'Preguntar si tienen reserva.',
      'Verificar en qué zona está la mesa asignada.',
      'Avisar al mozo de zona por handie.',
      'Acompañar a los clientes a la mesa y ponerse a disposición.'] },
    { t:'Recepción — sin reserva', items:[
      'Preguntar cuántas personas van a ser.',
      'Consultar por handie qué sector tiene lugar para esa cantidad.',
      'Acompañar a los clientes a la mesa y ponerse a disposición.'],
      nota:'Si no hay reservas, completar primero el sector delantero. Ver también el Protocolo de Cumpleaños.' },
    { t:'Cumpleaños', items:[
      'Si traen torta, escribirle el nombre y la mesa asignada.',
      'A las 00:45, llevar las tortas a cada mesa.',
      'Contar cuántas personas llegaron de cada reserva, pedir en caja los tickets de consumición y entregárselos al cumpleañero.'] },
    { t:'Recorrida', items:[
      'Desde la 1:00, recorrer las mesas: preguntar si necesitan algo y si los están atendiendo bien.',
      'Ponerse a disposición para cualquier consulta.',
      'Al cierre, despedir a los clientes en el sector barra: «¡Muchas gracias por visitarnos!»'] },
    { t:'Responsabilidades', items:[
      'Mantener la ubicación hasta las 00:30.',
      'Handie cargado, prendido y con el auricular puesto.',
      'Resolver contingencias con las reservas, comunicándolas al encargado.'] }
  ]},
  { id:'camarero', nombre:'Camarero / Mozo', meta:['Zonas: salón delantero y patio interno · salón posterior y antepatio · patio trasero'], secciones:[
    { t:'Protocolo de atención', items:[
      'Recibir a los clientes del Hostess y presentarse con tu nombre.',
      'Repasar la mesa con un trapo limpio.',
      'Encender la lámpara de mesa.',
      'Verificar el número de mesa y entregar el table tent (QR).',
      'Explicar cómo hacer el pedido.',
      'Preguntar si van a cenar o solo tomar tragos; si cenan, llevar servilletas, cubiertos y platos.',
      'Estar pendiente de que hagan el pedido y ofrecer ayuda.',
      'Mantener la mesa limpia: secar la humedad de vasos y botellas y retirar siempre las botellas vacías.',
      'Consultar cada tanto si necesitan algo, a intervalos prudentes.',
      'Cobrar la mesa como máximo a la 1:30.',
      'Cuando se van, limpiar y acomodar la mesa para el próximo turno.'] },
    { t:'Responsabilidades', items:[
      'Cumplir el protocolo de atención.',
      'Cobrar las mesas de tu sector.',
      'Handie cargado, prendido y con el auricular puesto.',
      'Lámparas encendidas, salvo que el cliente pida lo contrario.',
      'Si una lámpara se queda sin carga, cambiarla por una cargada y reemplazar el número de mesa.',
      'Avisar al Hostess cuando tengas todas las mesas completas o se te libere una.',
      'Sector acomodado y limpio: mesas, pisos, servilletas, sorbetes y cualquier cosa caída.',
      'Al terminar el turno, poner a cargar las lámparas de tu sector.'],
      nota:'Ante cualquier conflicto, por mínimo que parezca, avisar al encargado de inmediato. Ver también el Protocolo de Cumpleaños.' }
  ]},
  { id:'runner_barra', nombre:'Runner de barra', meta:['Punto de retiro de bebidas en barra'], secciones:[
    { t:'Protocolo de atención', items:[
      'Si no sabés a qué mesa va un pedido, consultar al mozo de zona.',
      'Bebidas que se sirven en mesa: primero llevar los vasos y después la bebida, sirviendo hasta la mitad del vaso.',
      'Retirar botellas vacías y vasos en desuso.',
      'Si no podés llevar todo el pedido de una mesa, pedir ayuda al mozo de zona.',
      'Después del horario de servicio, colaborar con el mozo de la zona delantera y reponer vajilla limpia en barra.'] },
    { t:'Responsabilidades', items:[
      'Permanecer en el punto de retiro de bebidas en todo momento.',
      'Entregar y servir tragos y bebidas en la mesa indicada.',
      'Retirar la vajilla en desuso y limpiar la mesa.',
      'Handie cargado, prendido y con el auricular puesto.'] }
  ]},
  { id:'runner_cocina', nombre:'Runner de cocina', meta:['Punto de retiro de órdenes en cocina'], secciones:[
    { t:'Protocolo de atención', items:[
      'Si no sabés a qué mesa va un pedido, consultar al mozo de zona.',
      'Comida: primero llevar los platos y después el pedido.',
      'Retirar vajilla, platos y tablas vacíos, y limpiar la mesa.',
      'Si no podés llevar todo el pedido de una mesa, pedir ayuda al mozo de zona.',
      'Después del horario de servicio, colaborar con el mozo del salón trasero y reponer vajilla limpia en barra.'] },
    { t:'Responsabilidades', items:[
      'Permanecer en el punto de retiro de órdenes en todo momento.',
      'Entregar y servir la comida en la mesa indicada.',
      'Retirar la vajilla en desuso y limpiar la mesa.',
      'Handie cargado, prendido y con el auricular puesto.'] }
  ]},
  { id:'comis', nombre:'Comis / Ayudante de camarero', meta:['2 por turno','Sala — entre mesas y barra'], secciones:[
    { t:'Apoyo a los mozos de zona', items:[
      'Sos el soporte directo del mozo de zona: tu trabajo le permite concentrarse en el cliente.',
      'Atento a las indicaciones del mozo, respondiendo sin demora.',
      'No tomar decisiones de atención por cuenta propia: ante cualquier consulta, derivar al mozo.',
      'Si el mozo está ocupado y una mesa necesita algo urgente, avisar por handie en lugar de resolver solo.'] },
    { t:'Montaje y desmontaje de mesas', items:[
      'Antes de abrir: todas las mesas limpias, con servilletas y table tent (QR) en su lugar.',
      'Cuando se libera una mesa: desmontar, limpiar y volver a montar de inmediato.',
      'Avisar al mozo de zona cuando la mesa esté lista.'] },
    { t:'Retiro de vajilla y limpieza', items:[
      'Retirar botellas vacías, vasos, platos y cubiertos sucios de forma continua.',
      'Limpiar la mesa con trapo limpio cada vez que retirás vajilla.',
      'Llevar la vajilla directo al área de lavado, sin acumularla en barra o pasillos.',
      'Levantar servilletas, sorbetes o cualquier cosa caída en toda la sala.'] },
    { t:'Reposición de vajilla en barra', items:[
      'Llevar vasos, copas y herramientas limpias a la barra sin esperar que el bartender lo pida.',
      'Verificar que cada pieza esté seca y en buen estado.',
      'Si ves stock bajo de algún material, avisar al bartender o al encargado.'] },
    { t:'Cierre', items:[
      'Desmontar todas las mesas y llevar la vajilla al área de lavado.',
      'Limpiar y acomodar sillas y mesas.',
      'Informar al encargado las novedades del turno.'] }
  ]},
  { id:'seguridad', nombre:'Seguridad / Portero', meta:[], pendiente:true, secciones:[] }
  ]
},

/* Puesto de Accesos → secciones del manual (la primera es la principal) */
PUESTO_MANUAL: {
  'Encargado':['encargado'],
  'Cajero':['cajero'],
  'Bartender':['bartender','runner_barra'],
  'Barman':['bartender','runner_barra'],
  'Mozo':['camarero','host','comis','runner_barra','runner_cocina'],
  'Cocinero':['cocina'],
  'Ayudante de cocina':['cocina'],
  'Bachero':['bachero'],
  'Portero':['seguridad'],
  'Seguridad':['seguridad']
},

/* ===================== PROTOCOLOS ===================== */
PROTOCOLOS: [
{ id:'cumple', titulo:'Cumpleaños', sub:'Protocolo de llegada', para:['Mozo','Cajero','Encargado'],
  pasos:[
  { t:'Antes de que lleguen', quien:'Encargado de reservas (recepcionista o cajero)', cuando:'Al llegar al turno', items:[
    'Revisar las reservas del día.',
    'Preparar los carteles de reservas.',
    'Coordinar ubicaciones.',
    'Verificar la mesa armada y ubicada, con el cartel con el nombre del cumpleañero.',
    'Confirmar que el mozo asignado sabe el nombre del cumpleañero y la cantidad de personas confirmadas.',
    'Coordinar con barra el trago de cortesía (uno de los tragos de autor) y los tragos de la 1:00.',
    'Verificar que el QR de cada mesa de cumpleaños abra una mesa nueva, sin pedidos de una sesión anterior.'] },
  { t:'Recepción en puerta', quien:'Recepcionista', p:'No hay lista: los invitados entran nombrando la reserva. El recepcionista identifica si es un cumpleaños por el nombre, por el contexto o porque lo dicen.',
    speech:[
    ['Si el cumpleañero se presenta primero','¡Buenas noches, [nombre]! Bienvenido/a, y feliz cumpleaños. Pasá/pasen, los acompaño a la mesa.'],
    ['Si llega el grupo y el cumpleañero no se identificó','Buenas noches, ¿tienen reserva? ¿Me decís el nombre? … Perfecto. ¿Quién es el cumpleañero? … ¡Feliz cumple! Pasen, los acompaño a la mesa.'],
    ['Si llega un invitado solo','Buenas noches, ¿a nombre de quién está la reserva? … Perfecto, la mesa de [nombre] está por acá, te acompaño.']],
    no:[
    'Decir «un momento» y dejarlos parados.',
    'Mandar al grupo solo a buscar la mesa.',
    'Hacer un check-in largo: máximo 20 segundos en la puerta.'],
    nota:'Acción inmediata: el recepcionista avisa por handie al mozo asignado y acompaña al grupo hasta la mesa.' },
  { t:'Conducción a la mesa', quien:'Recepcionista o mozo, según corresponda', p:'No se señala la mesa desde lejos: se acompaña siempre. Durante los 10–20 segundos de caminata, una sola frase según el sector:',
    speech:[
    ['Salón delantero','Les armamos la mesa en este sector: es más tranquilo, está mejor iluminado y la música permite charlar.'],
    ['Salón trasero','Les armamos la mesa acá: cuando se arme el baile a las 2:30 van a estar en primera fila.'],
    ['Patio','Lo bueno de este sector es que, si hay fumadores en el grupo, van a estar más cómodos al aire libre.']],
    nota:'Sin exagerar y sin discurso. Una frase que haga sentir que la mesa fue elegida para ellos.' },
  { t:'Llegada a la mesa', quien:'Mozo asignado', p:'El cartel con el nombre del cumpleañero ya está visible, junto al table tent del menú y la web.',
    speech:[
    ['Primer contacto','Bienvenidos. Soy [nombre] y esta noche los voy a atender. [Al cumpleañero] Feliz cumple, [nombre]: voy a hacer todo lo posible para que pasen una noche excelente.'],
    ['Cómo funciona la carta','Tienen dos códigos QR: el de la izquierda es para hacer pedidos, llamarme o pedir la cuenta. El de la derecha los lleva a la web del bar, con info y juegos para desafiarse, como trivias.'],
    ['Cómo pedir','Cada uno escanea el código desde su celu, elige, agrega al carrito, toca «Ver pedido» → «Finalizar pedido», pone su nombre y hace el pedido. Así todo queda a nombre de cada uno y al final cada uno ve lo suyo, nadie paga de más. Las promos de cumple están en Promociones y Cumples. Cualquier duda los ayudo, pero es muy fácil.'],
    ['Si alguien quiere pedirle directo al mozo','Pedilo por el QR así te queda a tu nombre, es al toque. Si querés te ayudo a hacerlo.']],
    nota:'Todavía no se menciona el trago de cortesía: la sorpresa vale más que el anuncio. Todo se pide por QR, sin excepción: no existen pedidos «para la mesa».' },
  { t:'Forma de pago con el cumpleañero', quien:'Mozo asignado', cuando:'Después de explicar el QR, en un aparte con el cumpleañero, nunca delante del grupo',
    speech:[
    ['La pregunta','¿Cómo van a pagar hoy: invitás la promo y cada uno paga el resto de lo suyo, cada uno paga lo suyo, o pagás vos toda la mesa?'],
    ['Siempre, con buena onda','Te recuerdo que el saldo final de la mesa queda a tu nombre. Si alguien se tiene que ir antes, avisale que pague lo suyo.']],
    nota:'Acción: dejar anotada la forma de pago elegida. Se define al principio, no al final.' },
  { t:'El trago de cortesía', quien:'Mozo asignado', cuando:'5–8 minutos después de que se ubiquen, con más de la mitad de la reserva presente', p:'El mozo llega con el trago de cortesía solo para el cumpleañero, no para todo el grupo. Eso lo hace más personal.',
    speech:[
    ['Al entregarlo','Esto es de parte de Zeppelin: [nombre del trago], una de las firmas de la casa.'],
    ['Si el trago tiene historia o nombre del NOA','Este es el [Sombra de Higuera / Sangre Calchaquí / el que corresponda], lleva [ingrediente local]. Es muy rico y muy nuestro.']],
    nota:'Una línea, no más. Que el trago hable.' },
  { t:'Foto del grupo', quien:'Mozo asignado', cuando:'Con el grupo completo y relajado: en general 15–25 minutos después de sentarse y antes de la cena', p:'No se ofrece la foto al llegar. Se espera el momento en que están acomodados, con algo en la mano y buen ambiente. El mozo lee el momento.',
    speech:[
    ['La propuesta','¿Quieren que les saque una foto del grupo? Así se llevan el recuerdo.'],
    ['Opcional, si el grupo es expresivo y la noche va bien','Si quieren, nos etiquetan en Instagram. Nos hace muy felices.']],
    nota:'Sin presión y sin insistir. Una sola vez, de forma natural. La foto se saca con el teléfono de quien la quiera.' },
  { t:'Torta', quien:'Mozo asignado', cuando:'Cuando llega la torta', p:'Si trajeron torta, ofrecerse a guardarla hasta la 1:00.',
    speech:[
    ['La propuesta','¿Querés que te la guardemos? Te la traemos a la 1:00, con el feliz cumpleaños.']],
    nota:'Confirmar que tengan velitas y fuego antes de la 1:00.' },
  { t:'La 1:00: tragos y feliz cumpleaños', quien:'Mozo asignado, barra y DJ', cuando:'A la 1:00 en punto', items:[
    'Barra prepara los tragos gratis del cumpleañero con anticipación.',
    'El mozo los lleva a la mesa junto con la torta, si hay.',
    'Suena el feliz cumpleaños.'],
    nota:'Este momento está anunciado en el mensaje de confirmación, así que la puntualidad es obligatoria. Es el momento de la noche.' },
  { t:'La cuenta', quien:'Mozo asignado', cuando:'Cuando piden la cuenta', p:'Aplicar la forma de pago anotada en el Paso 5. La mesa siempre se cierra saldada en cero.',
    speech:[
    ['Al pedir la cuenta','Ya les aparece a cada uno su consumo y el total de la mesa. Pueden ir pagando y la mesa se cierra cuando queda en cero.'],
    ['Si alguien se fue sin pagar (solo con el cumpleañero, en privado)','[Nombre] se fue sin pagar lo suyo, te queda pendiente esto.']],
    nota:'Se habla solo con el cumpleañero, en privado y mostrando el detalle a nombre de esa persona. Nunca delante de la mesa y sin tono de reproche.' },
  { t:'Cierre de la noche', quien:'Mozo asignado', cuando:'Cuando la mesa queda saldada o están terminando',
    speech:[
    ['Pregunta','¿Cómo la pasaron? Espero que haya sido una noche excelente.'],
    ['Si la respuesta es positiva','Nos alegra mucho. Fue un placer tenerlos. [Al cumpleañero] Que tengas un gran año, [nombre].']] },
  { t:'Reglas de oro', items:[
    'Todo se pide por QR, a nombre de cada uno. No se toman pedidos fuera del QR.',
    'La forma de pago se define al principio, no al final.',
    'El saldo pendiente se habla siempre en privado con el cumpleañero.',
    'El trago de cortesía es sorpresa; la 1:00 es puntual.',
    'Se acompaña siempre: nadie busca su mesa solo.'] }
  ]},
{ id:'descorche', titulo:'Descorche', sub:'Servicio de vino en mesa', para:['Mozo','Encargado','Bartender'],
  pasos:[
  { t:'La presentación', sub:'La validación', items:[
    'Presentá la botella por el lado izquierdo del comensal que la pidió (el anfitrión).',
    'Sostené la botella con una lito (servilleta de tela blanca) de modo que la etiqueta se vea perfectamente.'],
    speech:[['Al presentar','Señor/a, aquí tiene el [nombre del vino], cosecha [año], de bodega [bodega]. ¿Es correcto?']],
    nota:'Esperá la confirmación antes de seguir.' },
  { t:'La apertura', sub:'La precisión', items:[
    'Corte de cápsula: con el cortacápsulas o la navaja del sacacorchos, cortá por debajo del segundo anillo del cuello. Así el vino no toca el metal al servirse.',
    'Limpieza: limpiá la boca de la botella con la lito para sacar restos de polvo o moho natural.',
    'Extracción: insertá el espiral en el centro del corcho y extraé de forma suave y constante.'],
    regla:'El corcho no tiene que hacer «pop» al salir. Tiene que ser un suspiro.' },
  { t:'El examen del corcho', items:[
    'Retirá el corcho del sacacorchos y apoyalo en un platito a la derecha del anfitrión.',
    'Así el cliente puede verificar la humedad y el estado del corcho (que no esté seco ni con olor a humedad).'] },
  { t:'La degustación', sub:'La aprobación', items:[
    'Serví un sorbo en la copa del anfitrión.',
    'Esperá a que lo observe, lo huela y lo pruebe. Con su visto bueno (un gesto o una palabra), seguí con el resto de la mesa.'] },
  { t:'El orden de servicio', items:[
    'Primero las mujeres (empezando por la de mayor edad), después los hombres y, al final, la copa del anfitrión.',
    'Sostené la botella desde la base, nunca por el cuello.',
    'Al terminar cada copa, hacé un leve giro de muñeca y limpiá el pico con la lito para que no gotee.'] },
  { t:'Llenado y mantenimiento', items:[
    'Nunca llenes la copa: lo ideal es hasta el ecuador (la parte más ancha), para que el vino se oxigene.',
    'Tintos: quedan en la mesa.',
    'Blancos y rosados: siempre en frappera con agua y hielo, para mantener la cadena de frío.'] }
  ]}
],

/* ===================== REGLAMENTO INTERNO ===================== */
REGLAMENTO: {
  titulo:'Reglamento interno de personal',
  version:'2026.1',
  secciones:[
  { t:'Introducción y valores del bar', p:[
    'Zeppelin Bar nació en 2001 con una propuesta clara: un espacio para la buena música, el buen trato y las buenas personas. En más de dos décadas construimos una identidad única en Salta, con una historia que nos enorgullece y un público que nos eligió como su lugar.',
    'Este reglamento no es una lista de prohibiciones. Es el marco que nos permite funcionar como equipo, cuidar la experiencia del cliente y proteger a cada persona que trabaja acá.',
    'Quien trabaja en Zeppelin representa todo eso. Ese es el punto de partida.'] },
  { t:'Ingreso y período de prueba', p:['Todo ingreso al equipo implica un período de adaptación de 90 días corridos. Durante ese tiempo:'], items:[
    'El nuevo integrante es acompañado por un encargado o un compañero de referencia.',
    'Se evalúan actitud, aprendizaje, puntualidad y relación con el equipo.',
    'Al terminar el período se define la continuidad, con una devolución directa.',
    'Cualquiera de las partes puede terminar la relación sin expresión de causa durante este período.'] },
  { t:'Presentación personal', p:['La imagen es parte del servicio. Se espera:'], items:[
    'Ropa limpia, prolija y coherente con el ambiente del bar. Se pueden sugerir colores o indumentaria según el puesto.',
    'Higiene personal cuidada: manos limpias, uñas cortas, cabello ordenado o recogido según corresponda.',
    'Sin accesorios que interfieran con el trabajo (pulseras sueltas en cocina, aros colgantes en servicio, etc.).',
    'Queda prohibido usar en horario de trabajo ropa o accesorios con marcas o mensajes contrarios a los valores del bar.'] },
  { t:'Puntualidad y asistencia', items:[
    'Hay que llegar al menos 5 minutos antes del turno de apertura.',
    'Llegar tarde sin aviso previo es una falta grave, especialmente en la apertura.',
    'Si no podés asistir, avisá con la mayor anticipación posible y directamente al encargado.',
    'Tres tardanzas injustificadas en un mes equivalen a una falta grave.'] },
  { t:'Conducta en el trabajo', p:['Se espera un trato respetuoso en todo momento: con los clientes, con los compañeros y con los encargados.','Lo que no se tolera:'], items:[
    'Discusiones o conflictos con clientes dentro del bar. Si hay un problema, se informa al encargado.',
    'Descuidos o tratos despectivos con los compañeros.',
    'Usar el celular para temas personales durante el servicio activo.',
    'Consumir alcohol durante el turno. El bar vende alcohol; el personal en servicio no lo consume.',
    'Fumar dentro del local o donde incomode al cliente.',
    'Que entren personas externas al área de trabajo sin autorización del encargado.',
    'Divulgar fuera del bar información sobre el negocio, los clientes o los compañeros.'] },
  { t:'Relaciones entre el personal', p:['Zeppelin es un equipo antes que cualquier otra cosa. Las relaciones dentro del trabajo requieren madurez y criterio.'], items:[
    'Todos los integrantes se tratan con respeto, más allá de diferencias personales o afinidad.',
    'Los conflictos entre compañeros no se resuelven durante el servicio ni frente a los clientes: se comunican al encargado fuera del horario pico.',
    'Las relaciones afectivas entre el personal son un asunto privado: hay que evitar demostraciones afectivas en el local, y no deben afectar el clima laboral, el servicio ni la dinámica del equipo.',
    'Si una relación entre compañeros genera conflictos o tensión en el equipo, la dirección puede intervenir y tomar medidas organizativas.',
    'Queda prohibido cualquier tipo de acoso, hostigamiento o trato intimidatorio hacia un compañero, sea verbal, físico o por medios digitales.'] },
  { t:'Alcohol y otras sustancias', p:['Por la naturaleza del negocio, este punto requiere claridad absoluta:'], items:[
    'Queda prohibido consumir alcohol durante el turno de trabajo, sin excepciones.',
    'Presentarse en estado de ebriedad o bajo efectos de sustancias es causal de despido inmediato.',
    'El consumo moderado de alcohol puede darse una vez terminado el turno y fuera del mostrador, si el encargado lo permite.',
    'Queda prohibido el consumo, tráfico o facilitación de cualquier sustancia ilegal en el local o desde él.'] },
  { t:'Manejo de caja y cobros', items:[
    'Solo el personal autorizado puede manejar la caja.',
    'Todo cobro se registra en el sistema.',
    'Los errores de caja (faltantes o sobrantes) se reportan de inmediato.',
    'Queda prohibido abrir la caja para uso personal, aunque sea con intención de devolverlo.',
    'Cualquier irregularidad detectada es causal de desvinculación inmediata y puede generar acciones legales.',
    'Las propinas son propiedad exclusiva de quien las recibe, salvo acuerdo explícito del equipo.'] },
  { t:'Higiene y cuidado del espacio', p:['El espacio es de todos. El mantenimiento diario es responsabilidad compartida:'], items:[
    'La limpieza de la zona de trabajo es parte del turno, no es opcional.',
    'Al final del turno, el puesto queda en condiciones.',
    'Cualquier rotura o desperfecto se reporta de inmediato al encargado.',
    'Los espacios comunes (baño del personal, cocina) se usan con respeto y orden.',
    'No se sacan insumos del local sin autorización del encargado.'] },
  { t:'Redes sociales e imagen del bar', p:['Zeppelin tiene una presencia en redes construida con trabajo y criterio. El personal debe:'], items:[
    'No publicar imágenes del interior del bar, del equipo o de los clientes sin autorización expresa.',
    'No hacer declaraciones públicas en nombre del bar en redes sociales.',
    'Evitar publicaciones que dañen la imagen del local, del equipo o de los clientes.',
    'Consultar siempre al encargado antes de etiquetar al bar o compartir contenido relacionado.'] },
  { t:'Sanciones y consecuencias', tabla:[
    ['Llamado de atención verbal','Primera falta menor. El encargado conversa en privado y queda registrado.'],
    ['Apercibimiento','Reincidencia o falta de mayor gravedad.'],
    ['Suspensión sin goce de haberes','Faltas graves o acumulación de apercibimientos.'],
    ['Desvinculación','Consumo de sustancias, robo, agresión, ausencias reiteradas sin justificación o daño grave a la imagen del bar.']] },
  { t:'Comunicación interna', p:['Los temas de trabajo se resuelven en el trabajo, no en grupos de WhatsApp.'], items:[
    'Comunicación directa con el encargado del turno para situaciones del momento.',
    'Comunicación con la dirección del bar para temas de mayor relevancia (salario, condiciones, conflictos graves).',
    'Los grupos de WhatsApp del personal son para coordinación operativa, no para conflictos ni quejas.'] },
  { t:'Aceptación del reglamento', p:['Al tocar «Leí y acepto», confirmás que leíste, comprendiste y aceptás las condiciones de este reglamento. Queda registrado con tu nombre, DNI, fecha y versión del reglamento.'] }
  ]
}
};
