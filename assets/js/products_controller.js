const nuevo_producto = (url, categoria, nombre, precio) => {
    const card = document.createElement('div')
    const contenido = `
                        <div class="product">
                        <img class="image" src="${url}">
                        <h4>${nombre}</h4>
                        <h4 class="product__price">$${precio}</h4>
                        <a href="#" class="product__watch">Ver producto</a>
                    `
    card.innerHTML = contenido
    card.dataset.id = id

    return card

}

const productos = document.querySelector([categoria])
