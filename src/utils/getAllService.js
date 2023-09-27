export default async function getAllService() {
  const res = await fetch(process.env.API_BASE_URL + "AllService");
  if (!res.ok) {
    throw new Error("AllService api call failed");
  }
  const data = await res.json();
  return data;
}
