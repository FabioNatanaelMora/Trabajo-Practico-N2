// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // 15
console.log(calcularAreaRectangulo(10, 2)); // 20
console.log(calcularAreaRectangulo(8, 4)); // 32
console.log("//////////////////////////////");

/*
Pensamos que el área se calcula multiplicando ancho por alto. Creamos una función que toma esos parámetros
y retorna directamente el resultado. Luego mostramos tres ejemplos diferentes para comprobar su funcionamiento.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
  return cadena.trim().split(/\s+/).length;  //"/\s+/" es una expresión regular que busca uno o más espacios en blanco (pueden ser espacios, tabs, saltos de línea, etc.).
}

console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // 5
console.log(contarPalabras("Hola mundo")); // 2
console.log(contarPalabras("Uno")); // 1
console.log("//////////////////////////////");

/*
Para contar palabras usamos split con una expresión regular que divide por cualquier cantidad de espacios.
Trim ayuda a eliminar espacios adelante o atrás. Comprobamos con ejemplos de distinta longitud.
*/

// 3. Contar vocales en una cadena
function contarVocales(cadena) {
  return (cadena.match(/[aeiouáéíóú]/gi) || []).length;  // Busca todas las vocales (mayús., minús. y acentuadas)
                                                         // [aeiouáéíóú] = conjunto de vocales
                                                         // g = todas las apariciones, i = sin importar mayús./minús.
                                                         // match() devuelve un array o null, || [] evita error, .length cuenta vocales
}

console.log("Solución 3:");
console.log(contarVocales("JavaScript")); // 3
console.log(contarVocales("Hola Mundo")); // 4
console.log(contarVocales("Python")); // 1
console.log("//////////////////////////////");

/*
Usamos match con una expresión regular para contar vocales incluyendo acentuadas. Si no hay vocales, devolvemos 0.
*/

// 4. Palíndromo
function esPalindromo(cadena) {
  const limpio = cadena.toLowerCase();
  return limpio === limpio.split("").reverse().join("");  // Compara la cadena con su versión invertida
                                                          // split("") → convierte a array de caracteres
                                                          // reverse() → invierte el array
                                                          // join("") → lo vuelve a unir en una cadena
}

console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("javascript")); // false
console.log("//////////////////////////////");

/*
Convertimos a minúscula y comparamos la cadena con su reverso. Así detectamos si es un palíndromo.
*/

// 5. Edad canina
function edadCanina() {
  const edad = prompt("Ingresa la edad de tu perro:");
  console.log(`Tu perro tiene ${edad * 7} años humanos`);
}

console.log("Solución 5:");
// edadCanina(); // Descomentar para usar en navegador
console.log("//////////////////////////////");

/*
Usamos prompt para pedir la edad del perro. Multiplicamos por 7 y mostramos el mensaje.
No se usa return porque solo se imprime.
*/

/////////////// Solución 6 ///////////////
console.log("\n 6: Capitalizar palabras");
function capitalizarPalabras(cadena) {
  return cadena.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}                                                                                     // split(" ") → divide la frase en palabras
                                                                                      // map(...) → recorre cada palabra y:
                                                                                      // charAt(0).toUpperCase() → pone en mayúscula la primera letra
                                                                                      // slice(1) → toma el resto de la palabra
                                                                                      // join(" ") → une las palabras nuevamente con espacios


console.log("Solución 6:");
console.log(capitalizarPalabras("hola mundo desde javascript"));
console.log(capitalizarPalabras("esto es una prueba"));
console.log(capitalizarPalabras("profesor xavier"));
console.log("//////////////////////////////");

/*
Convertimos cada palabra usando split y map, luego juntamos con join. Así logramos capitalizar cada palabra.
*/

////////////// Solución 7 ///////////////
console.log("\n 7: Fibonacci");
function fibonacci(n) {
  const secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]); // suma los dos anteriores
  }
  return secuencia.slice(0, n);  // Devuelve solo los primeros n elementos (por si n < 2)
}

console.log("Solución 7:");
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1)); // [0]
console.log("//////////////////////////////");

/*
La lógica consiste en iniciar con los dos primeros números y sumar los anteriores para generar la secuencia.
Generamos la serie de Fibonacci hasta n elementos. Usamos un for para calcular cada nuevo valor sumando los anteriores.
*/

// 8. Lista de productos
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("Solución 8:");
productos.forEach(p => console.log(p.nombre, p.precio));
console.log(productos.map(p => p.nombre));
console.log(productos.filter(p => p.categoria === "electrónica" && p.stock > 20));
console.log(productos.find(p => p.id === 3));
console.log(productos.reduce((acc, p) => acc + p.precio * p.stock, 0));
console.log("//////////////////////////////");

/*
Usamos forEach para recorrer y mostrar, map para sacar nombres, filter con condiciones, find por ID,
y reduce para sumar el total del inventario.
*/

// 9. Estudiantes
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("Solución 9:");
estudiantes.forEach(e => console.log(e.nombre, e.edad));
console.log(estudiantes.map(e => ({
  nombre: e.nombre,
  promedio: e.calificaciones.reduce((a, b) => a + b) / e.calificaciones.length
})));
console.log(estudiantes.filter(e =>
  e.calificaciones.reduce((a, b) => a + b) / e.calificaciones.length > 7.5
));
console.log(estudiantes.find(e => e.nombre === "María"));
console.log(estudiantes.reduce((acc, e) => acc + e.edad, 0) / estudiantes.length);
console.log("//////////////////////////////");

/*
Reutilizamos métodos array para mostrar datos, calcular promedios, filtrar y promediar edades.
*/

// 10. Películas
const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("Solución 10:");
peliculas.forEach(p => console.log(p.titulo, p.año));
console.log(peliculas.map(p => p.titulo.toUpperCase()));
console.log(peliculas.filter(p => p.genero === "drama" && p.rating > 8.5));
console.log(peliculas.find(p => p.año === 2014));
console.log(peliculas.reduce((acc, p) => acc + p.duracion, 0));
console.log("//////////////////////////////");

/*
Con forEach mostramos título y año, map pasa a mayúsculas, filter filtra por género y rating,
find busca por año, y reduce suma la duración total.
*/
