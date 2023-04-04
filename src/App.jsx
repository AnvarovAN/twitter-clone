import './App.css';
import BuildUI from './components/Website/BuildUI';
import Login from './components/Log/Login'
import {Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { useUserContext } from './Context';
function App() {
  const { user } = useUserContext();

  // const [user, setUser] = useState(null);
  // console.log(user);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })

  //   return unsubscribe;
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <BuildUI/> : <Navigate to='/login' />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to='/login' /> : <Auth />} />
      </Routes>

    </div>
  );
}

export default App;
