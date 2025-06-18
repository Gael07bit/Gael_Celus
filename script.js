alert("ADVERTENCIA: Esta pagina no esta hecha con el objeto de ofender o burlarse de cualquier persona")
confirm ("¿iniciar sesion?")
prompt("bienvenido, como te llamas?") 
const boton = document.getElementById('messipromax');
boton.addEventListener( 'click' , () =>{
    window.location.href = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChsSEwirwIqDtNiNAxXunFoFHRdlGggYACICCAEQABoCdnU&co=1&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5NS50jA43JrBva7kP8wlpb773aHnh3Jx5IJQC4jEALRPbMHgaG_M7BoCBx8QAvD_BwE&ohost=www.google.com&cid=CAESVuD2AGq2C1B2W5e69yJacqyFHaQAwOOlsApL18SRESQyuJNVIAtGikgOG9x5zxPXN_wKjDjUqQlkp7yhohbUPqLCeeaEaHbCZBjhy9UvpjCPul1dc8EY&category=acrcp_v1_40&sig=AOD64_2t04PDAzqirSHXcjJSv9YmNsXpFw&q&adurl&ved=2ahUKEwiH-IGDtNiNAxUFkZUCHW6vClcQ0Qx6BAgJEAE' ;
});

function responderIA() {
    // Pregunta simulada del usuario
    const pregunta = prompt("¿Qué te gustaría saber sobre los celulares?");
    
    // Respuesta básica de la IA (puedes personalizarla o mejorarla con lógica más avanzada)
    let respuesta = "";

    if (!pregunta) {
        respuesta = "No escribiste ninguna pregunta.";
    } else if (pregunta.toLowerCase().includes("iphone")) {
        respuesta = "El iPhone 16 Pro Max tiene una cámara de 48 MP y una pantalla Super Retina XDR.";
    } else if (pregunta.toLowerCase().includes("samsung")) {
        respuesta = "El Samsung S25+ tiene una pantalla Super AMOLED de 6,7 pulgadas y 120 Hz de refresco.";
    } else {
        respuesta = "Lo siento, aún estoy aprendiendo y no tengo información sobre eso.";
    }

    // Mostrar la respuesta al usuario
    alert("Respuesta de IA: " + respuesta);
}