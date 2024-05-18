export function userAge(): number {
  return 4;
}

export function fetchUserAge(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(18);
    }, 0);
  });
}
