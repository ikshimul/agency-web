export default async function getBrands() {
  const res = await fetch(process.env.API_BASE_URL + "BrandList");
  if (!res.ok) {
    throw new Error("BrandList api Calling Fail");
  }
  const data = await res.json();
  return data;
}
