const button = document.querySelector("button");

button.addEventListener("mouseup", function() {
    alert('Hola! Soy el div!');
})

boton.addEventListener("click", (event) => {
      event.stopPropagation();
      alert("Click en el BOTÓN");
    });