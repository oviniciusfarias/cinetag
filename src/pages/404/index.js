const { default: Banner } = require("components/Banner")
const { default: Container } = require("components/Container")
const { default: SectionTitle } = require("components/SectionTitle")
const { Link } = require("react-router-dom")

const Page404 = () => {
  return (
    <main>
      <Banner image="home" />

      <Container>
        <SectionTitle>
          <h1>
            <strong>404 - Página não encontrada</strong>
          </h1>
          <p>
            Volte para a página principal <br />
            <Link to="/">
              Página principal
            </Link>
          </p>
        </SectionTitle>
      </Container>
    </main>
  )
}

export default Page404