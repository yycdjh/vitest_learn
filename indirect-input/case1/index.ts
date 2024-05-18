import { fetchUserAge, userAge } from "./user";

// 直接input
function add(a: number, b: number) {
  return a + b;
}

// 间接
export function doubleUserAge(): number {
  return userAge() * 2;
}

export async function fetchDoubleUserAge(): Promise<number> {
  const age = await fetchUserAge();
  return age * 2;
}
