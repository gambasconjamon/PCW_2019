## Partes implementadas

Las partes implementadas pedidas en el enunciado de la practica han sido las siguientes:

  

-  [x] Index (Página Principal)

-  [x] Login

-  [x] Logout

-  [x] Registro

-  [x] Favoritas

-  [x] Nueva Foto

-  [x] Buscar

-  [x] Foto

-  [x] Acerca de

  

### A destacar de HTML5

  

Se han implementado todas las paginas disponibles que el enunciado pedía implementar en esta práctica. Las paginas cumplen con el doctype de la última actualización de HTML5. Se han intentado usar las **etiquetas que mejor corresponden con cada tipo de contenido** en la página **para cumplir así mejor con los estándares del W3C**.

  

A la hora de crear los formularios, se han usado los distintos atributos disponibles en la jerarquia del tag ***form*** y sus inputs adyacentes: *pattern, required, placeholder, autofocus, name, title para el aviso del pattern...*

  

Se han hecho uso de **metatags** para generar una mejor indexación en caso de lanzar el sitio al público

  

### A destacar de CSS3

El sitio se han implementado ciertas cualidades de CSS3 que caben destacar por su facil implementación y la posibilidad que tienen para crear un sitio web **responsive y optimizado**.

  

-  **Media Querys** : Se han hecho uso de mediaquerys para adaptar los estilos de la pagina en las distintas resoluciones posibles, de tal forma que la jerarquia de querys cambia segun resolución, ejemplo: `@media (max-width: 870px) {}`
- **Pseudo clases**: Se han implementado pseudo clases para la optimización del codigo en el fichero de estilos. Consiste en hacer referencia directamente a los elementos hijos de una clase o un elemento, posibilitando asi el uso de una sola clase para varios elementos, ejemplo:
`#menutoggle:checked+.activador#menu-icon>span:nth-child(1) { transform: rotate(45deg) translate(6px, 15px); }`
- **Flex box**: Uso del elemento flex-box junto con sus distintos atributos para hacer que los elementos se adapten al tamaño de su contenedor padre según el tamao de pantalla, minimizandoa si el uso de mediaquerys y creando un sitio más rapido y optimo.  
`ul.menu {display: flex; flex: 1 1 20em; flex-wrap: nowrap;...`
`.menu li { flex: 1 1 5em; display: inherit; position: relative;...`


### Compatibilidad y W3C Validator

En cuanto a compatibilidad en elementos de CSS, el sitio web se ha probado en 4 Navegadores distintos: Microsoft Edge, Mozilla Firefox, Opera y Google Chrome.

- **Microsoft Edge:** En el actual navegador sustituto de Explorer, no se ha encontrado muchos problemas a la hora de generar compatibilidad, aunque algo había. Los warnings en formularios por ejemplo tienen un estilo distinto a los de Chrome, básicamente es texto plano en una caja, de lo cual deduzco que coje algo del estilo del contenedor padre, nada grave puesto que es algo estético. En cuanto a **Flex-box**, no se presenta ningun problema, salvo que al definir un `flex: 1 1 30em` por ejemplo, el `30em` actua a su vez como una especie de min-width que no deja seguir encogiendo al elemento, un problema solucionable con media-querys (añadiendo un `flex-basis:15em ` en resolución movil) o web-kit.

- **Mozilla Firefox:** Al arrastrar los cambios de compatibilidad en el orden en el que he nombrado anteriormente los navegadores, es normal que cada vez haya menos problemas de compatibilidad. En este caso tan solo observamos un cambio estético por parte de Firefox en los forms.

- **Opera:** La compatibilad es bastante buena, Opera ha mejorado mucho desde el 2017.

- **Chrome:** Todo correcto, aunque hay un pequeño detalle que cabe destacar sobre la version movil, mas concretamente el **Software** movil de chrome en Android, anula una pequeña caracteristica de CSS poco explorada que es el `background-image` y `background-attachment` para generar un efecto parallax en movil. A priori, usandolo en el móvil no se muestra, aunque se trata de una filigrana sin importancia que puede ser arreglada mediante Javascript

