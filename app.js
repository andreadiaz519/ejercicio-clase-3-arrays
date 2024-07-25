const galeria = document.getElementById('galeria');

  // Función para crear y agregar una tarjeta
function agregarTarjeta(rutaImagen, titulo) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    const img = document.createElement('img');
    img.src = rutaImagen;

    const h3 = document.createElement('h3');
    h3.textContent = titulo;

    tarjeta.append(img, h3);

    galeria.append(tarjeta);
}

// Agregar las tarjetas directamente
// agregarTarjeta('imagenes/dos-gatos.jpeg', 'Dos Gatos');
// agregarTarjeta('imagenes/gato-blanco.jpeg', 'Gato Blanco');
// agregarTarjeta('imagenes/gatos-canasta.jpeg', 'Gato Canasta');

const rutaImagen = ["imagenes/dos-gatos.jpeg", "imagenes/gato-blanco.jpeg", "imagenes/gatos-canasta.jpeg"]
const titulo = ["Dos Gatos", "Gato Blanco", "Gato Canasta"]

 for(let i = 0; i < rutaImagen.length; i++) {
//     console.log(i, "Vuelta");
//     console.log(rutaImagen[i], titulo[i]);
    agregarTarjeta(rutaImagen[i], titulo[i]);
}