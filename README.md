# Refugio del Sol

Sitio web para un club de playa y restaurante con habitaciones en Pijijiapan, Chiapas. Permite consultar el menú completo desde el celular y cotizar una estancia, con el resumen listo para enviarse por WhatsApp al restaurante.

**Demo:** https://omarcinho17.github.io/WebRefugio/

## Funciones

- **Menú por horarios.** Buenos días, Buenas tardes y Buenas noches, cada uno con sus categorías (desayunos, tacos, ceviches, especialidades del chef, postres y más).
- **Tarjetas con foto.** Cada platillo tiene un espacio para su foto, y las tarjetas se deslizan de lado con el dedo.
- **Avisos y extras por categoría.** Por ejemplo, "Incluyen jugo, fruta y café" o los extras de una quesadilla con su costo.
- **Platillos agotados.** Se pueden marcar con una sola palabra, sin reimprimir nada.
- **Habitaciones.** Descripción, capacidad y tarifas de temporada baja y alta.
- **Cotizador con varias habitaciones.** Se eligen fechas, adultos, niños, cantidad de habitaciones de cada tipo y extras. Calcula las noches por temporada, valida la capacidad y muestra el desglose.
- **Envío por WhatsApp.** Arma el mensaje con todos los datos de la cotización.

## Tecnologías

HTML, CSS y JavaScript puro, sin frameworks ni paso de compilación. Tipografías de Google Fonts.

## Estructura

```
WebRefugio/
├── index.html   Estructura de la página
├── style.css    Estilos y diseño responsivo
├── app.js       Datos, menú y cotizador
└── fotos/       Fotos de platillos y habitaciones
```

## Cómo usarlo

Descarga o clona el repositorio y abre `index.html` en el navegador. No necesita servidor.

```bash
git clone https://github.com/omarcinho17/WebRefugio.git
cd WebRefugio
open index.html
```

## Cómo editar el contenido

Todo el contenido está al inicio de `app.js`, separado de la lógica:

| Bloque | Qué contiene |
| --- | --- |
| `CONFIG` | Nombre, número de WhatsApp, dirección, horario y meses de temporada alta |
| `MENU` | Horarios, categorías y platillos |
| `CUARTOS` | Tipos de habitación, capacidad, cantidad y tarifas |
| `EXTRAS` | Desayuno, cama extra, mascota y sus precios |

Un platillo se escribe con la función `plato(nombre, precio, descripción, extra)`:

```js
plato('Camarones al coco', 290, 'Camarones en costra de coco, tamal de arroz y emulsión de mango.')
```

Para agregar la foto de un platillo, guarda la imagen en `fotos/` y usa el campo `foto`:

```js
{...plato('Camarones al coco', 290, 'Descripción.'), foto: 'fotos/camarones-coco.jpg'}
```

Para marcarlo como agotado, agrega `agotado: true` de la misma forma.

## Publicarlo con GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Branch**, elige `main` y la carpeta `/ (root)`.
3. Guarda y espera uno o dos minutos. GitHub muestra el enlace público.

Los nombres de archivo van en minúsculas, porque GitHub Pages distingue mayúsculas de minúsculas.

## Estado del proyecto

- [x] Menú de Buenos días, Buenas tardes y Buenas noches
- [x] Habitaciones y cotizador con varias habitaciones
- [x] Mensaje de cotización por WhatsApp
- [ ] Menú de bebidas, coctelería, vinos y licores
- [ ] Fotos reales de platillos y habitaciones
- [ ] Número de WhatsApp y horarios definitivos

## Ideas a futuro

- Panel para que el dueño edite precios y marque platillos agotados sin tocar código (Google Sheets o Supabase).
- Reserva con anticipo.
- Versión en inglés para turistas.
- Pedidos para llevar.

## Autor

Omar Martínez López · [@omarcinho17](https://github.com/omarcinho17)