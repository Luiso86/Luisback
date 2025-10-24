//obtener productos 

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == "POST" && resource == 'products') {
    const product = {
         title: process.argv[4], 
         price: process.argv[5], 
         category: process.argv[6]
};
    
fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));
}


if (method == 'GET' && resource.startsWith('product')) { 
    //const [, id] = resource.split('/')[1]; 
    let id = resource.split('/')[1]; //obtener el id del recurso
    id = parseInt(id);

    if (isNaN(id) || id <= 0) {
        console.log('El id debe ser un numero');
    }

 fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data));
}
if (method == 'DELETE' && resource.startsWith('products/')) {
  const id = parseInt(resource.split('/')[1]);

  fetch('https://fakestoreapi.com/products/ ${id}', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

// video 7/10  1:04