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
const listaDesordenado = document.getElementsByTagName("ul");

const elementos=["","","",""];
elementos.forEach(function(elementos){
    const nuevoLi=document.createElement("li");
    listaDesordenado.append(nuevoLi);
    nuevoLi.style.backgroundColor="red"
});
