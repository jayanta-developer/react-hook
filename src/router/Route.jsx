export default function Router({ path, children, }) {
  return (
    window.location.pathname === path ? children : null
  )
}
