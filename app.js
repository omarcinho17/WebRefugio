const CONFIG = {
  nombre: 'Refugio del Sol',
  whatsapp: '5219610000000',               
  direccion: 'Embarcadero Chocohuital S/N, 30545 Pijijiapan, Chis.',
  horario: 'Club de playa y restaurante abierto, sabados y domingos de 8:00 a 18:00',
  mesesAltos: [7, 8, 12]                   // 1 = enero ... 12 = diciembre
};

// Ayuda para escribir platos más corto: plato(nombre, precio, descripción, extra)
const plato = (n, p, d = '', x = '') => ({n, p, d, x});


const MENU = {
  'Buenos días': {
    hora: 'De 8:00 a 12:00 h',
    categorias: {
      'Jugos': [
        plato('Jugo de naranja, toronja o papaya', 30),
        plato('Papaya con naranja', 35),
        plato('Fresa con naranja', 35),
        plato('Nopal con piña, naranja y apio', 35)
      ],
      'Frutas': [
        plato('Plato de frutas de temporada', 50),
        plato('Copa de yogurt con fruta', 45),
        plato('Granola', 10, 'Extra'),
        plato('Yogurt natural', 10, 'Extra'),
        plato('Pan tostado (4) con mantequilla', 35, 'Extra')
      ],
      'Desayunos': [
        plato('Desayuno continental', 70, 'Café, jugo, fruta, pan tostado y mermelada.'),
        plato('Desayuno light', 115, 'Jugo de toronja, claras de huevo a la mexicana, queso panela, pan integral y té.'),
        plato('Desayuno americano', 105, 'Jugo o fruta, huevos revueltos o estrellados, frijol, plátanos fritos, pan tostado y café.'),
        plato('Quesadillas', 50, 'Tortilla de maíz hecha a mano, con quesillo fresco, frijoles refritos y plátanos.', 'Extras (+$20): champiñón, chicharrón, flor de calabaza o pollo'),
        plato('Hot cakes', 70, '', 'Extras (+$10): jamón o tocino'),
        plato('Molletes', 80, 'Clásicos de frijoles refritos, gratinados en pan chapata, con salsa pico de gallo.')
      ],
      'Desayunos paquete': {
        nota: 'Todos incluyen jugo, fruta y café.',
        items: [
          plato('Cecina de la región', 165, 'Cecina con dobladas de mole, frijoles y platanitos fritos.'),
          plato('Chilaquiles con pollo o huevo', 145, 'En salsa roja o verde, con crema y queso, frijoles y plátanos fritos.'),
          plato('Huevos al gusto', 150, 'A la mexicana, rancheros, con chorizo, jamón, salchicha o tocino, con frijoles y plátano macho.'),
          plato('Huevos con camarón seco', 160, 'Con frijoles refritos, crocantes de plátano macho, crema y queso.'),
          plato('Huevos divorciados', 145, 'Huevos estrellados montados en tortilla, con salsa verde y roja, frijoles y plátanos fritos.'),
          plato('Omelette tradicional', 140, 'Con jamón y queso, frijolitos y plátano frito.'),
          plato('Desayuno Chocohuital', 160, 'Enchiladas verdes de minilla gratinadas, con frijoles y plátanos fritos.'),
          plato('Aporreadillo', 170, 'Huevos revueltos montados en cazuela de barro, tiritas de cecina con salsa taquera y frijoles refritos.'),
          plato('Omelette chiapaneca', 170, 'Con camarón seco y chipilín, en salsa de molcajete, con frijolitos y plátano frito.')
        ]
      },
      'Desayunos infantiles': {
        nota: 'Conviértelos en paquete (jugo, fruta y chocomilk) por $35 adicionales.',
        items: [
          plato('Omelette infantil con jamón y queso', 50),
          plato('Quesadillas (3 piezas)', 45, '', 'Con jamón extra (+$20)'),
          plato('Hot cake baby', 65)
        ]
      },
      'Bebidas calientes y frías': [
        plato('Café americano', 28),
        plato('Café capuccino', 35),
        plato('Chocolate frío', 30)
      ]
    }
  },
  'Buenas tardes': {
    hora: 'A partir de las 12:00 h',
    categorias: {
      'Entradas': [
        plato('Guacamole con chicharrón', 135, 'Crujiente chicharrón de cerdo montado en exquisito guacamole.'),
        plato('Guacamole con piquitos de camarón', 145, 'Taquitos de camarón con queso en tortilla de harina, montados en exquisito guacamole.'),
        plato('Fundido de mariscos', 150, 'Cazuelita de camarón y pulpo salteados con pimientos sobre queso fundido.'),
        plato('Piña hawaiana', 180, 'Piña miel rellena de mariscos salteados en salsa especial de la casa, fundidos con queso al horno de leña.'),
        plato('Camarones Rocca', 195, 'Camarones rebozados y salteados en una salsa picosa de ajonjolí.'),
        plato('Botana Turula', 145, 'La botanita más típica de la costa: camarón seco, pico de gallo, pepino y chicharrón de cerdo.'),
        plato('Minilla', 110, 'Otro típico de la región: pescado guisado acompañado de chips y aderezo de mayonesa con chipotle.'),
        plato('Macabil', 95, 'Típica de la costa chiapaneca, a base de tortitas de macabil guisadas con tomate y cebolla.'),
        plato('Jicamitas con ceviche peruano', 95, 'Delicioso ceviche peruano montado sobre frescas rebanadas de jícama.')
      ],
      'Tacos': {
        nota: 'Orden de 3 piezas.',
        items: [
          plato('Gobernador de camarón', 145, 'Tortilla de maíz, queso, camarones salteados, julianas de poblano y aguacate.'),
          plato('Marlin en costra de queso', 135, 'Tortilla de maíz, costra de queso, marlin ahumado y aguacate.'),
          plato('Tacos de camarón chicharrón', 135, 'Camarones revolcados en migas de chicharrón, aguacate y cebollita.'),
          plato('Tacos de la Baja de camarón', 145, 'Tortilla de maíz, rebozados, pico de gallo, col y aderezo.'),
          plato('Tacos de la Baja de pescado', 135, 'Tortilla de maíz, rebozados con pico de gallo, col y aderezo.')
        ]
      },
      'Ceviches': [
        plato('Clásico Bandera', 130, 'Cubitos de pescado, jitomate, cebolla, pepino, cilantro y chile.'),
        plato('Camarón Bandera', 130, 'Camarón en trocitos, jitomate, cebolla, pepino, cilantro y chile.'),
        plato('Montadito de atún', 135, 'Cubitos de atún fresco, pepino, jitomate y cebolla morada, montado sobre cama de aguacate y hojuelas de plátano macho.'),
        plato('Peruano', 130, 'Cubitos de pescado, cebolla morada, elotitos dulces, cilantro y habanero.'),
        plato('Aguachile de camarón', 140, 'Camarón en tiras, cebolla morada, pepino y jugosa emulsión a elegir: verde, mango, negro o chiles rojos.'),
        plato('Coco Las Brisas', 140, 'Fresca carnaza de coco rellena de ceviche mixto, con toques tropicales de piña, mango y menta.')
      ],
      'Empanadas': {
        nota: 'Órdenes de 3 piezas.',
        items: [
          plato('Empanadas de minilla', 85),
          plato('Empanadas de camarón', 95),
          plato('Empanadas de marlin', 85)
        ]
      },
      'Cocteles': [
        plato('Coctel de camarón, caracol, calamar o campechano', 140, 'Tamaño mediano.', 'Grande: $160'),
        plato('Coctel de pulpo', 140, 'Tamaño mediano.', 'Grande: $160')
      ],
      'Caldos y sopas': [
        plato('Caldo de pescado', 160),
        plato('Caldo de camarón', 165),
        plato('Sopa de mariscos', 170),
        plato('Consomé de pollo', 85)
      ],
      'Ensaladas': [
        plato('Brisas Thai', 125, 'Crujientes camarones montados en cama de lechugas, finas láminas de mango, cebolla morada en julianas, arroz tostado y ajonjolí caramelizado, marinado en aderezo thai.'),
        plato('Ensalada mixta oriental', 130, 'Mezcla de lechuga, jitomate, pepino, cebolla, zanahoria, almendras tostadas, arándanos, queso de cabra y ajonjolí caramelizado, con aderezo de emulsión de soya y mandarina.')
      ],
      'Pastas': [
        plato('Fusilli al pesto con camarones', 185, 'Camarones al ajillo gratinados.'),
        plato('Fettuccine del mar', 260, 'Con camarones, calamares y mejillones, en salsa pomodoro cocinada al vino blanco.'),
        plato('Pasta Alfredo, pomodoro o pesto', 110, 'Fusilli o fettuccine.')
      ],
      'Pescados y mariscos': [
        plato('Rodajas de robalo', 240),
        plato('Robalo entero', 295, 'De 800 grs aproximadamente.'),
        plato('Mojarra', 170, 'De 500 grs aproximadamente.'),
        plato('Filete de pescado', 160),
        plato('Camarones empanizados o al mojo de ajo', 270),
        plato('Platón surtido para 4 personas', 750, 'Rodajas de robalo, camarones empanizados, tacos de pescado al pastor, empanadas surtidas, deditos de pescado, frijoles, plátanos fritos y guacamole.')
      ],
      'Hamburguesas y snacks': [
        plato('Hamburguesa Suprema', 180, '180 grs de sirloin al grill, con tocino, queso, lechuga, tomate y aguacate, acompañada de papas a la francesa.'),
        plato('Hamburguesa de camarón', 200, '150 grs de camarón al grill, con tocino, lechuga, tomate y aguacate, acompañada de papas a la francesa.'),
        plato('Papas locas', 55, 'Crujientes papas chips, cacahuate japonés y salsa chamoy.'),
        plato('Serpentinas al chamoy', 55, 'Finas lascas de pepino, zanahoria y jícama con fuente de chamoy.'),
        plato('Papas a la francesa', 60, '300 grs.')
      ],
      'Especialidades del chef': [
        plato('Camarones al coco', 290, 'Camarones (180 grs) en costra de coco, tamal de arroz, acompañados de una emulsión de mango.'),
        plato('Envuelto de camarón', 280, 'Chile poblano relleno de un fundido de camarón y queso, envuelto en plátano macho, sobre salsa de pimientos y acompañado de timbal de arroz.'),
        plato('Camarones al tequila', 290, 'Camarones mariposa (180 grs) cocinados al aceite de oliva y chilitos simojovel, flameados con tequila, con timbal de arroz y abanico de aguacate.'),
        plato('Exclusiva Brocheta Sol&Mar', 240, 'La favorita del chef, con esencias y sabores de Chiapas, cocinada al grill con pimientos, plátano macho y tocino, con timbal de arroz y ensalada verde.'),
        plato('Pulpo al tequila', 450, '300 grs de pulpo flameado con tequila, con cebolla caramelizada y chilitos simojovel, acompañado de timbal de arroz.'),
        plato('Pulpo al grill', 450, '300 grs de pulpo cocinado lentamente al calor del grill, acompañado de arroz y aguacate.'),
        plato('Camarones en salsa cremosa al limón y menta', 240, '180 grs de camarones en corte mariposa, salteados en una cremosa salsa al limón con un sutil toque de menta, acompañados de timbal de arroz.'),
        plato('Zarandeado Las Brisas, filete de dorado', 240, 'Exclusiva receta de pescado al grill, salteado de pimientos y juliana de cebolla, acompañado de crocantes de plátano macho y timbal de arroz. Filete de dorado (180 grs).'),
        plato('Zarandeado Las Brisas, camarones', 280, 'Misma receta del zarandeado, con camarones (180 grs).'),
        plato('Tampiqueña de sirloin', 240, 'Cocinado al grill, acompañado de guacamole, frijoles refritos y enchilada.'),
        plato('Suprema de pollo teriyaki', 220, 'Suprema de pechuga asada con salsa teriyaki, jardín de vegetales frescos, palanqueta de almendras y crocantes de arroz.'),
        plato('Tacos de sirloin al grill', 175, '250 grs de sirloin en tortilla de maíz, chiles toreados con cebolla morada y frijoles refritos.'),
        plato('Pechuga de pollo a la plancha', 175, 'Acompañada de ensalada verde o papas a la francesa.')
      ],
      'Menú infantil': [
        plato('Consomé de pollo con arroz y verduras', 70),
        plato('Fettuccine al burro', 72),
        plato('Mini burger', 85, 'Con papas a la francesa.'),
        plato('Cruji deditos de pollo', 80),
        plato('Cruji deditos de pescado', 90),
        plato('Mini brochetas de pollo', 80, 'Acompañadas de papas a la francesa o timbalito de arroz.'),
        plato('Mini brochetas de camarón', 100, 'Acompañadas de papas a la francesa o timbalito de arroz.'),
        plato('Quesadillas (3 piezas)', 60),
        plato('Hot dog', 40, 'Con tomate y cebolla.'),
        plato('Papas a la francesa', 50)
      ],
      'Postres': [
        plato('Rollo de mango', 75),
        plato('Flan napolitano', 50),
        plato('Flan de coco', 50),
        plato('Tokitos de plátano al coco', 80, 'Con helado de vainilla.'),
        plato('Cheesecake con coulis de fresa', 80),
        plato('Cheesecake de chocolate', 80)
      ]
    }
  },
  'Buenas noches': {
    hora: 'Horario por confirmar',
    categorias: {
      'Entradas': [
        plato('Queso fundido con chorizo', 85, 'Acompañado de tortillas de harina o maíz.'),
        plato('Montadito de camarón', 95, 'Cubitos de camarón al dente, guacamole, cascos de toronja y naranja.'),
        plato('Montadito de atún', 105, 'Cubitos de atún fresco, pepino, tomate y cebolla morada, montado sobre cama de aguacate y hojuelas de plátano macho.')
      ],
      'Pizzas al horno': [
        plato('Pizza tradicional', 220, 'Hawaiana, pepperoni, vegetariana o margarita.'),
        plato('Pizza de especialidad', 260, 'Prosciutto, 4 quesos o camarones al ajillo.')
      ],
      'Paninis': [
        plato('Panini de atún', 115, '110 grs de atún, queso suizo, hojas de espinacas frescas, cebolla morada, aceitunas, tomate y aguacate.'),
        plato('Panini de pavo', 95, 'Pechuga de pavo, queso suizo y mezcla de lechugas y tomate.'),
        plato('Panini mediterráneo', 115, 'Jamón serrano, queso suizo, espinacas frescas y rodajas de tomate.'),
        plato('Panini de pollo hawaiano', 115, '120 grs de suprema de pollo, tocino, piña, tomate, mezcla de lechugas y queso suizo.')
      ]
    }
  }
  // Siguiente: 'Bebidas y coctelería', 'Vinos' y 'Licores'
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
let horarioActual = Object.keys(MENU)[0];

function marcar(selector, texto) {
  document.querySelectorAll(selector + ' button').forEach(b => b.setAttribute('aria-selected', b.textContent === texto));
}

function pintarHorario(h) {
  horarioActual = h;
  const cats = Object.keys(MENU[h].categorias);
  $('#hora').textContent = MENU[h].hora;
  $('#tabs').innerHTML = cats.map(c => `<button role="tab" type="button">${c}</button>`).join('');
  marcar('#horarios', h);
  pintarMenu(cats[0]);
}

function pintarMenu(cat) {
  const valor = MENU[horarioActual].categorias[cat];
  const items = Array.isArray(valor) ? valor : valor.items;
  $('#nota').textContent = Array.isArray(valor) ? '' : valor.nota;
  $('#lista').innerHTML = items.map(i => `
    <article class="item ${i.agotado ? 'out' : ''}">
      <div class="foto">
        ${i.foto ? `<img src="${i.foto}" alt="${i.n}" loading="lazy">` : '<span>Foto próximamente</span>'}
      </div>
      <div class="info">
        <h3>${i.n}</h3>
        ${i.d ? `<p>${i.d}</p>` : ''}
        ${i.x ? `<p class="extra">${i.x}</p>` : ''}
        <span class="price">${i.agotado ? 'Agotado' : mxn(i.p)}</span>
      </div>
    </article>`).join('');
  $('#lista').scrollLeft = 0;
  marcar('#tabs', cat);
}

$('#horarios').innerHTML = Object.keys(MENU).map(h => `<button role="tab" type="button">${h}</button>`).join('');
$('#horarios').addEventListener('click', e => { if (e.target.matches('button')) pintarHorario(e.target.textContent); });
$('#tabs').addEventListener('click', e => { if (e.target.matches('button')) pintarMenu(e.target.textContent); });
pintarHorario(horarioActual);

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