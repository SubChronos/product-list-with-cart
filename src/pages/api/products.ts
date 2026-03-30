import productsJSON from "../../data/data.json"
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const allProducts = productsJSON; //Guarda el json

  // Devolvemos la respuesta en formato JSON
  return new Response(JSON.stringify(allProducts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}