export default async function getStatList() {
  const res = await fetch(process.env.API_BASE_URL + "StatList");
  if (!res.ok) {
    throw new Error("getStatList api call failed");
  }
  return await res.json();
}
