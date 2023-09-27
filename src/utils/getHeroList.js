export default async function getHeroList() {
  const res = await fetch(process.env.API_BASE_URL + "HeroList");
  if (!res.ok) {
    throw new Error("HeroList Calling Fail");
  }
  const data = await res.json();
  return data;
}
