

let listaProductos = document.querySelector('#listaProductos');

//obtieneProductos
function obtieneProductos() {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(productosObtenidos => {
            console.log("Productos Obtenidos: ", productosObtenidos);
            productosObtenidos.forEach((producto, indice) => {
                console.log("Producto: " + producto);

                listaProductos.innerHTML += `
                <div class="col-12 col.md-3">
                <div class="card">
                    <img src="${producto.image}" class="card-img-top" alt="producto">
                    <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description.slice(0,100)}</p>
                            <p class="text-danger">${producto.price}</p>
                            <a href="https://youtu.be/mCdA4bJAGGk?si=IkimYJ4oydk9C25X" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
               </div>
            `;
            });
        })
}

obtieneProductos();

//Promise o Promesa
/*fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json)) */