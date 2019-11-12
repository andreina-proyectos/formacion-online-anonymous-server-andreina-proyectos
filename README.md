# promo-grace-fc-anonymous-server
Base para la prueba técnica 4 de la formación continua en Adalab

# Requisitos ✅

Hay que cumplir todo esto:
- Hay que usar el HTML tal y como se entrega
- Se entregan, además, 3 imágenes: la imagen de fondo, el icono de la hamburguesa y el icono de cerrar
- La imagen de fondo ocupará el 100% del espacio disponible (alto y ancho)
- Botones y enlaces tienen que tener, al menos, un efecto de hover
- El botón de menú NO sustituye al botón de cerrar
- Se pueden añadir clases extra por JavaScript siempre que se necesiten
- Hay que aplicar a la imagen de fondo por CSS un degradado vertical comenzando en negro al 35% en la mitad exacta del contenedor hasta negro totalmente transparente en la parte superior:
background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.35) 50%);
- El botón de menú mostrará el menú principal y habrá que plantear cómo se va a mostrar, es decir, no puede aparecer sin más, habrá que elegir una forma de transición concreta
- La fuente del titular es Roboto Slab
- La fuente del pie es Arial
- El color de fondo del menu es #402929 al 92% de opacidad
- El título siempre tiene que ir en dos líneas
- La columna de contenido principal:
de 320 a 767px tiene 30px de margen a izquierda y derecha
a partir de 768px tiene 60px de margen y un ancho máximo de 990px
siempre tiene que quedar centrada
- El pie siempre tiene que quedar abajo de la pantalla
- No hay que usar React ni preprocesadores CSS

# Prioridades ❗️

Dí prioridad a la maquetación en versión móvil ya que es más eficiente a la hora de consumir recursos. Una vez hecha mobile first, realicé el desplegable (la interacción con JS) y por último las media queries para que el diseño fuera responsive.
Por último, cambié el color cuando los enlaces están en focus para aumentar la accesibilidad.

# Transición elegida y su aplicación 🎈

Hice una transición de derecha a izquierda y suave. Me aseguré que funcionara en todos los navegadores. También hice que el botón que quedara debajo desapareciera para mejorar la experiencia visual.
