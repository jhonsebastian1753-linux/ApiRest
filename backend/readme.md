## paso a paso
- verifica version de node : node -v
- inicializar el proyecto: npm init
- crea el pakage.json
- cambiamos esta linea : _"type", para poder implementar modules ES6
- paquetes basicos : npm i nodemon cors express mysql2
    - nodemon : solo para desarrollar sirve para cambiar el codigo y que se actualize
    - cors: setea la seguridad de interactuar con direccion de ip diferentes - http
    - express: libreria para crear un servidor rest (post,put,get,delete)
    - mysql2: libreria que permite hacer consultas SQL desde MODEJS

- Cambiamos la seccion script en package.json asi: 
    "dev": "nodemon index.js",
    "start": "node index.js",
    con el fin de tener 2 scripts de ejecucion, uno de desarrollo y uno de produccion(despliegue)
