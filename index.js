//obtener productos 

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == 'GET' && resource.startsWith('product')) { 
    //const [, id] = resource.split('/')[1]; 
    let id = resource.split('/')[1]; //obtener el id del recurso
    id = parseInt(id);

    if (isNaN(id) || id <= 0) {
        console.log('El id debe ser un numero');
    }


//if (method == 'GET' && resource == 'products') {
    // el await solo puede usarse dentro de funciones asincronas 
//const response = await fetch('https://fakestoreapi.com/products')
//const data = await response.jason() 
//console.log(data);
//}

fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));
}