// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ENDPOINTS = {
  SIMPLIFY_TEXT: `${API_BASE_URL}/api/simplify-text`,
  EXTRACT_CLAUSES: `${API_BASE_URL}/api/extract-clauses`,
};
// console.log("API BASE URL:", API_BASE_URL);

export default API_ENDPOINTS;
