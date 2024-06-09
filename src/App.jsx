import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import DisplayHome from "./components/DisplayHome"
import DisplayAlbum from "./components/DisplayAlbum"
import Login from "./auth/Login"
import SignUp from "./auth/SignUp"
import Artists from "./artists/Artists"
import Albums from "./components/Albums"
import LoginPopup from "./components/LoginPopup"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '*',
      element: <RootLayout />,
      children: [
        { index: '/', element: <DisplayHome /> },
        { path: 'album/:id', element: <DisplayAlbum /> },
        { path: 'artists', element: <Artists /> },
        { path: 'albums', element: <Albums /> },
      ]
    },
    { path: 'login', element: <Login /> },
    { path: 'signup', element: <SignUp /> },
  ])
  return <RouterProvider router={router} />
}
export default App