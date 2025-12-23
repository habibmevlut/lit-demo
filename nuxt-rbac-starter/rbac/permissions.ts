export type Role = 'guest' | 'user' | 'editor' | 'admin'

/**
 * Role → Permission map (MVP).
 * - Permissions are simple strings like: "post.read", "post.create"
 * - Wildcards are supported in ROLE_PERMISSIONS (e.g. "post.*", "*")
 */
export const ROLE_PERMISSIONS: Record<Role, string[]> = {
  guest: [],
  user: ['post.read'],
  editor: ['post.*'],
  admin: ['*'],
}

export const DEFAULT_ROLE: Role = 'guest'

