// Routes that require a signed-in user.
export const PROTECTED_ROUTES = ["/dashboard", "/profile"] as const;

export type ProtectedRoute = (typeof PROTECTED_ROUTES)[number];

export function isProtectedRoute(path: unknown): path is ProtectedRoute {
  return typeof path === "string" && (PROTECTED_ROUTES as readonly string[]).includes(path);
}