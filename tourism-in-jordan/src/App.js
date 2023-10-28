// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Header from './components/Header';
// import Home from './components/Home';
// import Blogs from './components/Blogs';
// import BlogDetails from './components/BlogDetails';
// import Login from './components/Login';
// import Registration from './components/Registration';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" exact component={<Home/>} />
//           <Route path="/blogs" component={<Blogs />} />
//           <Route path="/blog/:id" component={< BlogDetails />} />
//           <Route path="/login" component={<Login />} />
//           <Route path="/registration" component={<Registration />} />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import Footer from './components/Footer'; 

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
       
       
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


