export default async function getTestimonialList() {
  const res = await fetch(process.env.API_BASE_URL + "TestimonialList");
  if (!res.ok) {
    throw new Error("TeamList api Calling Fail");
  }
  const data = await res.json();
  return data;
}
