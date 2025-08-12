import { Hero, Tools } from "../../components"

const home = () => {
  return (
    <main className="pt-36 container mx-auto">
      <section className="section_padding">
        <Hero />
        <Tools />
      </section>
    </main>
  )
}

export default home
