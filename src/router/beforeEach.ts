import { NavigationGuardNext, RouteLocationNormalizedLoaded } from 'vue-router'

export default (
  to: RouteLocationNormalizedLoaded,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext
): void => {
  console.log(to.name, from.name)
  next()
}
