import React from 'react'
import Navbar from './Navbar';
import { Banner } from './Banner';
import Slides from './Slides';

export const Home = () => {
  return (
    <>
     <div>
      <Navbar />
      <Banner/>
      <Slides/>
    </div>
    </>
  )
}
