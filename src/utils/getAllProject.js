export default async function getAllProject() {
  const res = await fetch(process.env.API_BASE_URL + "AllProject");
  if (!res.ok) {
    throw new Error("AllProject api call failed");
  }
  const data = await res.json();
  return data;
}
