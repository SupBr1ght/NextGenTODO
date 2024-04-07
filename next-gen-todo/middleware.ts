export { default } from 'next-auth/middleware'
// * applies only to matching routes
export const config = { matcher: ['/extra', '/dashboard'] }
