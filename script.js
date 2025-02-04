const mysql = require('mysql')

const conection = mysql.createConnection({

    host:'localhost',
    user:'Global',
    password:'123',
    database:'contacto'

})

conection.connect( (err) => {
     if(err) throw err
        console.log('La conexión es Exitosa')
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        let formData = new FormData(this); // Obtiene los datos del formulario

        fetch("guardar_contacto.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data); // Muestra el mensaje de respuesta del servidor

            if (data.includes("Datos guardados correctamente")) {
                window.location.href = "https://go.hotmart.com/I97330913T"; // Redirige al usuario
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
