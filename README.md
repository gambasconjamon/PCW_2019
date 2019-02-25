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
-**Flex box**: Uso del elemento flex-box junto con sus distintos atributos para hacer que los elementos se adapten al tamaño de su contenedor padre según el tamao de pantalla, minimizandoa si el uso de mediaquerys y creando un sitio más rapido y optimo.  
`ul.menu {display: flex; flex: 1 1 20em; flex-wrap: nowrap;...`

  `.menu li { flex: 1 1 5em; display: inherit; position: relative;...`
