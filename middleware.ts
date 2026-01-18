export { auth as middleware } from '@/lib/auth'

export const config = {
    runtime: 'nodejs',
    matcher: [
        "/",
        "/auth/:path*",
    ],
}