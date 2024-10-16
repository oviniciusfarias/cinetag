import Page404 from "pages/404"
import DefaultPage from "pages/DefaultPage"
import PageFavorite from "pages/Favorites"
import PageHome from "pages/Home"
import PageVideo from "pages/Video"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<PageHome />}></Route>
          <Route path="favoritos" element={<PageFavorite />}></Route>
          <Route path="videos/:id/*" element={<PageVideo />}></Route>

          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes