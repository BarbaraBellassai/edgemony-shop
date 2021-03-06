const baseURL = "https://fakestoreapi.com";
async function callAPI(endpoint,options) {
  const response = await fetch(`${baseURL}/${endpoint}`,options);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}
export async function fetchProducts() {
  return callAPI("products");
}
export async function fetchProduct(id) {
  return callAPI(`products/${id}`);
}
export async function fetchCatogories() {
  return callAPI("products/categories");
}
export async function fetchCart(CartId){
  return callAPI(`carts/${CartId}`)
}
export async function postItemToCart(cartId,productId,quantity){
  return  callAPI(`carts/${cartId}/items`, {
    method: 'POST',
    body: JSON.stringify({ id: productId, quantity })
  })
}
export async function deleteItemFromCart(cartId,productId){
  return callAPI (`carts/${cartId}/items/${productId}`,{
    method:'DELETE',
  })
}
export async function updateCart(cartId,billingData){
  return  callAPI(`carts/${cartId}`, {
    method: 'PATCH',
    body: JSON.stringify({billingData})
  })
}
export async function createNewOrder (cartId){
  return callAPI('orders', {
    method: 'POST',
    body: JSON.stringify({cartId:cartId})
  })
}
export async function createNewCart (){
  return callAPI('carts',{
    method: 'POST'
    
  })
}