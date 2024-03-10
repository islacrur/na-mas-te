export const useCard = () => {
  const getProducts = (endpoint) => {
    return fetch(endpoint).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json().catch((error) => {
        console.error("Error parsing JSON:", error);
        throw new Error("Invalid JSON response");
      });
    });
  };

  // Devuelve un objeto que contiene getProducts
  return { getProducts };
};
