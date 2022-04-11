import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HOME_ROUTE, PRODUCT_DETAIL_ROUTE, ABOUT_ROUTE } from '../Constants/Router';

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={HOME_ROUTE} element={<h1>Home</h1>} />
          <Route path={PRODUCT_DETAIL_ROUTE} element={<h1>Product Detail</h1>} />
          <Route path={ABOUT_ROUTE} element={<h1>About</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default MainRouter
