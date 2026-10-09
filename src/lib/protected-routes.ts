// Sections of the app that require a signed-in user.
// A path is protected if it equals one of these or starts with one followed by "/".
const PROTECTED_PREFIXES = [
  "/member",
  "/worker",
  "/messages",
  "/notifications",
  "/profile",
  "/settings",
  "/earnings",
] as const;

export type ProtectedRoute = string;

export function isProtectedRoute(path: unknown): path is ProtectedRoute {
  return (
    typeof path === "string" &&
    PROTECTED_PREFIXES.some((prefix) => path === prefix || path.startsWith(prefix + "/"))
  );
}