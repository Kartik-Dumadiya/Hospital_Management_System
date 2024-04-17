import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import ApplyDoctor from './pages/ApplyDoctor'
import Notification from './pages/Notification'
import Users from './pages/admin/Users'
import Doctors from './pages/admin/Doctors'
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
      {
        loading ? <Spinner/> :
        <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <HomePage/>
              </ProtectedRoute>
            }/>
            <Route path='/login' element={
              <PublicRoute>
                <Login/>
              </PublicRoute>
            }/>
            <Route path='/register' element={
              <PublicRoute>
                <Register/>
              </PublicRoute>
            }/>
            <Route path='/apply-doctor' element={
                <ProtectedRoute>
                <ApplyDoctor/>
              </ProtectedRoute>
            }/>
            <Route path='/notification' element={
                <ProtectedRoute>
                <Notification/>
              </ProtectedRoute>
            }/>
            <Route path='/admin/users' element={
                <ProtectedRoute>
                <Users/>
              </ProtectedRoute>
            }/>
            <Route path='/admin/doctors' element={
                <ProtectedRoute>
                <Doctors/>
              </ProtectedRoute>
            }/>
        </Routes>
      }
      </BrowserRouter>
    </>
  )
}

export default App
