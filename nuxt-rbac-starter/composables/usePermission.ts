import { DEFAULT_ROLE, ROLE_PERMISSIONS, type Role } from '~/rbac/permissions'
import { hasAnyPermission, hasPermission } from '~/rbac/permission.utils'

/**
 * Minimal composable API for permission checks.
 *
 * Auth is assumed to exist; this starter only needs a current role.
 * For the demo, the role is stored in a cookie ("rbac_role").
 */
export function usePermission() {
  const roleCookie = useCookie<Role>('rbac_role', { default: () => DEFAULT_ROLE })

  const role = computed<Role>(() => roleCookie.value || DEFAULT_ROLE)
  const granted = computed<string[]>(() => ROLE_PERMISSIONS[role.value] ?? [])

  function setRole(next: Role) {
    roleCookie.value = next
  }

  function can(permission: string): boolean {
    return hasPermission(permission, granted.value)
  }

  function canAny(permissions: string[]): boolean {
    return hasAnyPermission(permissions, granted.value)
  }

  return {
    role,
    granted,
    setRole,
    can,
    canAny,
  }
}

