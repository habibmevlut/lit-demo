/**
 * Returns true if a wildcard pattern matches a permission.
 *
 * Supported patterns (minimal, production-friendly):
 * - "*" matches everything
 * - "resource.*" matches "resource" and "resource.anything" (dot-separated)
 * - Exact match: "post.read" === "post.read"
 */
export function matchPermission(permission: string, pattern: string): boolean {
  if (!permission || !pattern) return false
  if (pattern === '*') return true
  if (pattern === permission) return true

  // "post.*" should match "post.read" and also "post"
  if (pattern.endsWith('.*')) {
    const prefix = pattern.slice(0, -2)
    return permission === prefix || permission.startsWith(prefix + '.')
  }

  return false
}

export function hasPermission(permission: string, granted: string[]): boolean {
  return granted.some((pattern) => matchPermission(permission, pattern))
}

export function hasAnyPermission(permissions: string[], granted: string[]): boolean {
  return permissions.some((p) => hasPermission(p, granted))
}

