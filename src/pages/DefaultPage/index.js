import Footer from "components/Footer"
import Header from "components/Header"
import FavoritesProvider from "Contexts/Favorites"
import { Outlet } from "react-router-dom"

const DefaultPage = () => {
  return (
    <>
      <Header />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
      <Footer />
    </>
  )
}

export default DefaultPage