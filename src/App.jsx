import React from 'react'
import Skill from './components/Skill'
import Banner from './components/Banner'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='app flex flex-col w-full'>
      <Banner />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App