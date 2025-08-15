import { Outlet } from "react-router"

const PluginsLayout = () => {
  return (
    <main>
      {/* <h1>Sidenavbar here</h1> */}
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default PluginsLayout
