import React from 'react'
import './App.css';
import Navbar from './Navbar'
// import ProductZone from './pages/PlayListManager'
// import ShoppableVideo from  './pages/ShoppableVideo'
import Revenue from './pages/Revenue'
import Story from './pages/Story'
// import HireInfuencar from './pages/HireInFluecar'
import LiveCommerce from './pages/LiveCommerce'
import  OneClickPost from './pages/OneClickPost'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import ProductZone from './ProductZone';




const App = () => {
  return (
    <>
    <Navbar/>
    <ProductZone/>
      <BrowserRouter>
      <SideBar>
        <Routes>
          {/* <Route path="/" element={<ProductPlayList />} /> */}
          {/* <Route path="/shoppable video" element={<ShoppableVideo />} /> */}
          <Route path="/story" element={<Story />} />
          <Route path="/LiveCommerce" element={<LiveCommerce />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/One Click Post" element={<OneClickPost />} />
          {/* <Route path="/Hire Influencar" element={<HireInfluencar />} /> */}
        </Routes>
      </SideBar>
    </BrowserRouter>
    
  

    </>
  )
}

export default App