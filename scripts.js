//?Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.


/* document.querySelectorAll('a').addEventListener('click', function(event){
    event.preventDefault()
  }); */

let enlaces = document.querySelectorAll("a");

enlaces.forEach(enl => {

   enl.addEventListener('click', (event)=> {
    event.preventDefault()
   });

});
 



//! <--->
//?Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//?2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

/* let imagenes = document.querySelectorAll("img");

for (let i = 0; i < imagenes.length; i++) {
   
    imagenes[i].addEventListener('click', ()=> {
        imagenes.forEach(img => img.src = "assets/magic-1.gif")
});

    
} */

let imgs = document.querySelectorAll("img");

imgs.forEach(img => {

   img.addEventListener('click', ()=> {
    img.src =  `assets/${getRandom2(gif)}`
   });

});
// document.querySelectorAll("img")
// .forEach(img => img.src = "");



//?2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
let parrafo = document.querySelectorAll("p");

parrafo.forEach( p => {

    p.addEventListener('click', ()=> {
     p.style.backgroundColor = getRandom(colors)
     p.style.color = getRandom(colors)
    });
 
 });


//? 2.3 Bloques de article o section: Cambia el color de fondo.

let artic = document.querySelectorAll("article");

artic.forEach(art => {

   art.addEventListener('click', ()=> {
    art.style.backgroundColor = getRandom(colors);
   });

});

let sec = document.querySelectorAll("section");

sec.forEach(s => {

   s.addEventListener('click', ()=> {
    s.style.backgroundColor = getRandom(colors);
   });

});


//? 3_ Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
//? y devolver dicho elemento a su estado original cuando salga el cursor.

//?3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

imgs.forEach(img => {

    img.addEventListener('mouseover', ()=> {
     img.src = "assets/abracadabra.gif"
    });
 
 });

//? 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.


parrafo.forEach( p => {

    p.addEventListener('mouseover', ()=> {
     p.style.backgroundColor = getRandom(colors);
     p.style.color = getRandom(colors);
    });
 
 });

//? 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.



artic.forEach(art => {

   art.addEventListener('mouseover', ()=> {
    art.style.backgroundColor = getRandom(colors)
   });

});



sec.forEach(s => {

   s.addEventListener('mouseover', ()=> {
    s.style.backgroundColor = getRandom(colors)
   });

});

//! <---- PREMIUM ---->
//?Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
//? 4, 5
const colors = ['#595F72', '#575D90', '#84A07C','#C3D350', '#E6F14A']

const getRandom = (colors) => {
    /* código misterioso */
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'

//?6 Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
const gif = ['magic-1.gif', 'magic-2.gif', 'magic-3.gif','magic-4.gif', 'magic-5.gif','magic-6.gif'];

const getRandom2 = (gif) => {
    /* código misterioso */
    let randomIndex = Math.floor(Math.random() * gif.length);
    return gif[randomIndex];
}

console.log(getRandom2(gif));