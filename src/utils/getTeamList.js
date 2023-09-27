export default async function getTeamList() {
  const res = await fetch(process.env.API_BASE_URL + "TeamList");
  if (!res.ok) {
    throw new Error("TeamList api Calling Fail");
  }
  const data = await res.json();
  return data;
}
