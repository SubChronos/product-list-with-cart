import productsJSON from "../../data/data.json"
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q') || '';
  const allProducts = productsJSON; //Guarda el json
  console.log("query: ", query)
  console.log("FULL URL:", url.toString());
  
  const filtredProduct = query ? allProducts.filter(product => 
        product.name === query
      ) : allProducts; // Si no hay búsqueda, devolvemos todos

  // Devolvemos la respuesta en formato JSON
  return new Response(JSON.stringify(filtredProduct), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}