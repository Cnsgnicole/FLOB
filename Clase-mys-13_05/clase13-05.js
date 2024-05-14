// const ejemploNodeList = document.getElementsByClassName("items");
// console.log(ejemploNodeList);
// const ejemploHtmlCollection = document.querySelectorAll("p");
// console.log(ejemploHtmlCollection); 

// // JS
// //Seleccionamos el elemento por ID
// const lista = document.getElementById("lista");

// //Seleccionamos el elemento por clase (Ambas formas)
// const itemsByClassName = document.getElementsByClassName("item");
// const itemsByQuerySelector = document.querySelectorAll(".item");
// console.log("Primera impresion", itemsByClassName, itemsByQuerySelector);

// //Agregamos un nuevo elemento a la lista.
// lista.innerHTML += `<li class=”item”> Cuarto Item </li>`;

// // Devuelve el nuevo elemento a la HTML Collection.
// console.log("Segunda impresion", itemsByClassName, itemsByQuerySelector);

//const ejemploHtmlCollection = document.querySelectorAll("div");
//console.log(ejemploHtmlCollection);
//const ejemploNodeList = document.getElementsByTagName("div");
//console.log(ejemploNodeList);

//PUNTO 2
//array con los strings para cada elemento Li
const mensajes=["Item 1","Item 2","Item 3","Item 4"]; 
let listaDesordenado = document.querySelector("ul"); 
for(i=0;i<mensajes.length;i++){
    //creación de los Li e inserción en el dom, contenido dentro de cada Li y estilo
    const nuevoLi=document.createElement("li");
    listaDesordenado.append(nuevoLi);
    nuevoLi.textContent=mensajes[i];
    nuevoLi.style.backgroundColor="red";
}
