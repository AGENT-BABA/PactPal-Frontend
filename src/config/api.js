// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("🔧 API Configuration:");
console.log("VITE_API_BASE_URL:", API_BASE_URL);
console.log("Final API_BASE_URL:", API_BASE_URL);

export const API_ENDPOINTS = {
  SIMPLIFY_TEXT: `${API_BASE_URL}/api/simplify-text`,
  EXTRACT_CLAUSES: `${API_BASE_URL}/api/extract-clauses`,
};

console.log("📡 API Endpoints:", API_ENDPOINTS);

export default API_ENDPOINTS;
