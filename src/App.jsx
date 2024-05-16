import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './page/Login'
import RegisterPage from './page/Register'
import HeaderPage from './Layout'
import MainPage from './page/MainPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route  element={<HeaderPage />}>
            <Route path='/home' element={<MainPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
