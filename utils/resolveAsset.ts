export function resolveAsset(path: string): string {
  const baseUrl = process.env.AUTH_APP || "http://localhost:3001/";
  return new URL(path, baseUrl).toString();
}
