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
  .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error en POST:', err));
}

if (method == 'GET' && resource.startsWith('product')) { 
    const id = parseInt(resource.split('/')[1]);
  if (isNaN(id) || id <= 0) {
    console.log('El id debe ser un número válido');  
  }

 fetch('https://fakestoreapi.com/products/' + id)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error en GET:', err));

}
if (method == 'DELETE' && resource.startsWith('products/')) {
  const id = parseInt(resource.split('/')[1]);

  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error en DELETE:', err));
}

