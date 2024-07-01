import React from 'react'
import TopNav from '../TopNav/TopNav'
import Main from '../Main/Main'
import SideNav from '../SideNav/SideNav'
import './Container.css';

const Container = () => {
  return (
    <div className="container">
        <TopNav />
        <Main />
        <SideNav />
    </div>
  )
}

export default Container;