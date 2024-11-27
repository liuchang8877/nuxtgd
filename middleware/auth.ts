export default defineNuxtRouteMiddleware((to, from) => {
  const user = localStorage.getItem('user')
  
  // If user is not logged in and trying to access protected route
  if (!user && to.path === '/dashboard') {
    return navigateTo('/login')
  }
  
  // If user is logged in and trying to access login page
  if (user && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
