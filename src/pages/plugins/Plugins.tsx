import { CommunityPlugins, OfficialPlugins } from "../../components"

const Plugins = () => {
  return (
    <main className="pt-32">
      <section className="container mx-auto max-w-4xl">
        <OfficialPlugins />
        <CommunityPlugins />
      </section>
    </main>
  )
}

export default Plugins
