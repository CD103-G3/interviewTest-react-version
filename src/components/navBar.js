import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <div class="container">
          <div class="menu-toggle">
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div id="logo">
              <h1>
                <Link to='/' >
                  <span>XXX商場</span>
                </Link>
              </h1>
          </div>
          <ul class="nav-info">
              <li><i class="fas fa-user"></i></li>
              <li><i class="fas fa-shopping-cart"></i></li>
              <li><i class="fas fa-search"></i></li>
          </ul>
          <ul class="desk-navbar">
              <li><Link to='/product/' >熱門商品</Link></li>
              <li><a href="">商品分類</a></li>
              <li><a href="">社群連結</a></li>
          </ul>
      </div>
    </nav>
  )
}