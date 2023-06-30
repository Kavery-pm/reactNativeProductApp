const API_URL = 'https://fakestoreapi.com';
export const fetchProducts = async () => {
    try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  };