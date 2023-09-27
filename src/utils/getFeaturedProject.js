export default async function getFeaturedProject() {
  const res = await fetch(process.env.API_BASE_URL + "FeaturedProject");
  if (!res.ok) {
    throw new Error("getFeaturedProject api call failed");
  }
  return await res.json();
}
