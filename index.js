//obtener productos 

let [, , method, resource] = process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

if (method == 'GET' && resource == 'products') {
    // el await solo puede usarse dentro de funciones asincronas 
const response = await fetch('https://fakestoreapi.com/products')
const data = await response.jason() 
console.log(data);
}