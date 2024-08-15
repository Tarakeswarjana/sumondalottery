import logo from './logo.svg';
import './App.css';
import Category from './Components/Category/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layouts';
import DashBoard from './Components/DashBoard/DashBoard';
import SubCategory from "./Components/SubCategory/SubCategory"
import Services from './Components/services/Services';
import Login from './Auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<DashBoard />}></Route>
          <Route path='/category' element={<Category />} />
          <Route path='/subcategory' element={< SubCategory />} />
          <Route path='/services' element={< Services />} />
        </Route>
        <Route path='/login' element={< Login />} />

      </Routes>
    </Router>


  );
}

export default App;
