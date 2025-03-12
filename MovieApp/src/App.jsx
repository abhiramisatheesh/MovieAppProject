// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import './component/Login'
// import Login from './component/Login'
// import SignUp from './component/SignUp'
// import Navbar from './component/Navbar'
// import { BrowserRouter as Route, Routes } from 'react-router-dom'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//      <Navbar/>
     
//     { <Routes>
//       <Route path='/login' element={<Login />}/>
//     </Routes> }
//     </>
//   )
// }

// export default App


//*********************************************************** 

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Navbar from './component/Navbar';
import AddMovie from './component/AddMovies';

function App() {
  const [count, setCount] = useState(0);

  return (
    

   
    <Router> {/* Wrap everything in BrowserRouter */}
      <>
      <Navbar />
       

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/addmovie" element={<AddMovie />} /> {/* Added SignUp route */}
        </Routes>
      </>
    </Router>
    

   
  );
}

export default App;
