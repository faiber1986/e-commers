// GET

const lista_productos = () => {
    fetch('https://64b5dc4bf3dbab5a95c7b48d.mockapi.io/api/v1/add_product')
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

export const productos = {
    lista_productos
}
// POST

