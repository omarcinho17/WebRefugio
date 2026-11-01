/* ============ DATOS: edita aquí para cambiar el contenido ============ */
const CONFIG = {
  nombre: 'Refugio del Sol',
  whatsapp: '5219610000000',               // lada + número, sin + ni espacios
  direccion: 'Embarcadero Chocohuital S/N, 30545 Pijijiapan, Chis.',
  horario: 'Club de playa y restaurante abierto, sabados y domingos de 8:00 a 18:00',
  mesesAltos: [7, 8, 12]                   // 1 = enero ... 12 = diciembre
};

const MENU = {
  'Desayunos': [
    {n:'Huevos al gusto', d:'Con frijoles, tortillas hechas a mano y café de olla.', p:85},
    {n:'Chilaquiles verdes', d:'Con pollo o huevo, crema y queso fresco.', p:95, t:['picante']},
    {n:'Tamal chiapaneco', d:'De cerdo con salsa de jitomate, envuelto en hoja de plátano.', p:40, t:['favorito']}
  ],
  'Mariscos': [
    {n:'Camarones al ajillo', d:'Camarón grande con mantequilla de ajo y guajillo.', p:210, t:['favorito','picante']},
    {n:'Filete de pescado empapelado', d:'Pescado del día con verduras y hierbas, cocido en papel.', p:185},
    {n:'Ceviche de camarón', d:'Limón, jitomate, cilantro y aguacate. Con tostadas.', p:160},
    {n:'Caldo de pescado', d:'Caldo caliente con verduras y arroz blanco.', p:150, agotado:true}
  ],
  'Antojitos': [
    {n:'Quesadillas de flor de calabaza', d:'Tortilla azul y queso de la región.', p:90, t:['vegetariano']},
    {n:'Tostadas de pulpo', d:'Tres tostadas con pulpo tierno y chile de árbol.', p:130, t:['picante']}
  ],
  'Bebidas': [
    {n:'Agua de jamaica', d:'Jarra de un litro, bien fría.', p:55, t:['vegetariano']},
    {n:'Coco frío', d:'Directo de la palma.', p:45, t:['vegetariano']},
    {n:'Michelada', d:'Con limón, sal y salsas. Cerveza clara u oscura.', p:75}
  ],
  'Postres': [
    {n:'Flan de coco', d:'Receta de la casa.', p:60, t:['vegetariano','favorito']}
  ]
};

// cantidad = cuántas habitaciones de ese tipo existen
const CUARTOS = [
  {id:'sencilla', n:'Habitación sencilla', cap:3, cantidad:2, baja:1200, alta:1600,
   inc:['Baño privado','Para 2 adultos y 1 menor']},
  {id:'doble', n:'Habitación doble', cap:4, cantidad:2, baja:1400, alta:1800,
   inc:['Baño privado','Para 4 personas']}
];

const EXTRAS = [
  {id:'desayuno', n:'Desayuno incluido', precio:85, modo:'persona-noche', txt:'por persona, por noche'},
  {id:'cama', n:'Cama extra', precio:200, modo:'noche', txt:'por noche (+1 persona)'},
  {id:'mascota', n:'Mascota', precio:150, modo:'estancia', txt:'una sola vez'}
];

/* ============ UTILIDADES ============ */
const $ = (s) => document.querySelector(s);
const mxn = (n) => n.toLocaleString('es-MX', {style:'currency', currency:'MXN', maximumFractionDigits:0});
const ICONOS = {favorito:'⭐', picante:'🌶️', vegetariano:'🌱'};
const wa = (texto) => `https://wa.me/${CONFIG.whatsapp}${texto ? '?text=' + encodeURIComponent(texto) : ''}`;

/* ============ MENÚ ============ */
function pintarMenu(cat) {
  $('#lista').innerHTML = MENU[cat].map(i => `
    <article class="item ${i.agotado ? 'out' : ''}">
      <div class="foto">
        ${i.foto ? `<img src="${i.foto}" alt="${i.n}" loading="lazy">` : '<span>Foto próximamente</span>'}
      </div>
      <div class="info">
        <h3>${i.n}${(i.t || []).map(t => `<span class="tag" title="${t}">${ICONOS[t]}</span>`).join('')}</h3>
        <p>${i.d}</p>
        <span class="price">${i.agotado ? 'Agotado' : mxn(i.p)}</span>
      </div>
    </article>`).join('');
  $('#lista').scrollLeft = 0;
  document.querySelectorAll('#tabs button').forEach(b => b.setAttribute('aria-selected', b.textContent === cat));
}
$('#tabs').innerHTML = Object.keys(MENU).map(c => `<button role="tab" type="button">${c}</button>`).join('');
$('#tabs').addEventListener('click', e => { if (e.target.matches('button')) pintarMenu(e.target.textContent); });
pintarMenu(Object.keys(MENU)[0]);

/* ============ CUARTOS ============ */
$('#rooms').innerHTML = CUARTOS.map(c => `
  <article class="room">
    <h3>${c.n}</h3>
    <ul>${c.inc.map(x => `<li>${x}</li>`).join('')}<li>Hasta ${c.cap} personas</li><li>Disponibilidad sujeta a temporada</li></ul>
    <div class="tarifa">${mxn(c.baja)} por noche</div>
    <small>Temporada alta: ${mxn(c.alta)}</small>
  </article>`).join('');

/* ============ COTIZADOR ============ */
const form = $('#cotizar');

// Un campo de cantidad por cada tipo de habitación
$('#habitaciones').innerHTML = CUARTOS.map((c, i) => `
  <label>${c.n} · ${mxn(c.baja)} por noche · hasta ${c.cap} personas
    <input type="number" name="hab-${c.id}" min="0" max="${c.cantidad}" value="${i === 0 ? 1 : 0}">
  </label>`).join('');

$('#extras').insertAdjacentHTML('beforeend', EXTRAS.map(x => `
  <label><input type="checkbox" name="extra" value="${x.id}"> ${x.n} · ${mxn(x.precio)} ${x.txt}</label>`).join(''));

const hoy = new Date(); hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());
form.entrada.min = hoy.toISOString().slice(0, 10);
form.entrada.addEventListener('change', () => {
  const d = new Date(form.entrada.value + 'T12:00'); d.setDate(d.getDate() + 1);
  form.salida.min = d.toISOString().slice(0, 10);
});

function error(msg) { $('#resultado').innerHTML = `<p class="error">${msg}</p>`; }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.entrada.value || !form.salida.value) return error('Elige tu fecha de entrada y de salida.');

  const entrada = new Date(form.entrada.value + 'T12:00');
  const salida = new Date(form.salida.value + 'T12:00');
  const noches = Math.round((salida - entrada) / 864e5);
  if (noches < 1) return error('La salida debe ser al menos un día después de la entrada.');

  const adultos = Math.max(1, +form.adultos.value || 1);
  const ninos = Math.max(0, +form.ninos.value || 0);
  const personas = adultos + ninos;

  // Habitaciones elegidas: lista de {cuarto, cant}
  const elegidas = CUARTOS
    .map(c => ({cuarto: c, cant: Math.min(c.cantidad, Math.max(0, +form.elements['hab-' + c.id].value || 0))}))
    .filter(h => h.cant > 0);
  if (!elegidas.length) return error('Elige al menos una habitación.');

  const extras = EXTRAS.filter(x => form.querySelector(`input[value="${x.id}"]`).checked);
  const capacidad = elegidas.reduce((s, h) => s + h.cuarto.cap * h.cant, 0) + (extras.some(x => x.id === 'cama') ? 1 : 0);
  if (personas > capacidad) return error(`Las habitaciones elegidas alojan hasta ${capacidad} personas. Agrega otra habitación.`);

  // Cuenta noches de temporada alta y baja
  let altas = 0;
  for (let i = 0; i < noches; i++) {
    const d = new Date(entrada); d.setDate(d.getDate() + i);
    if (CONFIG.mesesAltos.includes(d.getMonth() + 1)) altas++;
  }
  const bajas = noches - altas;

  const lineas = [];
  elegidas.forEach(({cuarto, cant}) => {
    if (bajas) lineas.push([`${cant} × ${cuarto.n}: ${bajas} ${bajas === 1 ? 'noche' : 'noches'} × ${mxn(cuarto.baja)}`, cant * bajas * cuarto.baja]);
    if (altas) lineas.push([`${cant} × ${cuarto.n}: ${altas} ${altas === 1 ? 'noche' : 'noches'} temporada alta × ${mxn(cuarto.alta)}`, cant * altas * cuarto.alta]);
  });
  extras.forEach(x => {
    const veces = x.modo === 'persona-noche' ? personas * noches : x.modo === 'noche' ? noches : 1;
    lineas.push([`${x.n} (${veces} × ${mxn(x.precio)})`, veces * x.precio]);
  });
  const total = lineas.reduce((s, l) => s + l[1], 0);

  const fecha = (d) => d.toLocaleDateString('es-MX', {day:'numeric', month:'long', year:'numeric'});
  const mensaje = [
    `Hola, quiero cotizar una estancia en ${CONFIG.nombre}:`,
    `• Entrada: ${fecha(entrada)}`,
    `• Salida: ${fecha(salida)} (${noches} ${noches === 1 ? 'noche' : 'noches'})`,
    `• Personas: ${adultos} adultos, ${ninos} niños`,
    `• Habitaciones: ${elegidas.map(h => `${h.cant} ${h.cuarto.n}`).join(', ')}`,
    extras.length ? `• Extras: ${extras.map(x => x.n).join(', ')}` : null,
    `• Total estimado: ${mxn(total)}`,
    '',
    '¿Tienen disponibilidad?'
  ].filter(l => l !== null).join('\n');

  $('#resultado').innerHTML = `
    <div class="desglose">
      ${lineas.map(l => `<div><span>${l[0]}</span><span>${mxn(l[1])}</span></div>`).join('')}
      <div class="total"><span>Total</span><span>${mxn(total)}</span></div>
    </div>
    <p class="aviso">Esto es una cotización, no una reserva. El restaurante confirma disponibilidad por WhatsApp.</p>
    <a class="btn wa" target="_blank" rel="noopener" href="${wa(mensaje)}">Enviar cotización por WhatsApp</a>`;
});

/* ============ CONTACTO ============ */
$('#direccion').textContent = CONFIG.direccion;
$('#horario').textContent = CONFIG.horario;
$('#wa-contacto').href = wa(`Hola, tengo una pregunta sobre ${CONFIG.nombre}.`);