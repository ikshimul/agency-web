export default async function getWorkList() {
  const res = await fetch(process.env.API_BASE_URL + "WorkList");
  if (!res.ok) {
    throw new Error("getWorkList api call failed");
  }
  return await res.json();
}
