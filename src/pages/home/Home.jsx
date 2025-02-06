import React from 'react'
import Port from '../../layouts/port/Port'
import Background from '../../layouts/background/Background'
import FeaturedProjects from '../../layouts/featured_projects/FeaturedProjects'
import Project from '../../layouts/project/Project'


const Home = () => {
  return (
    <>
        <Port></Port>
        <Background></Background>
        <FeaturedProjects></FeaturedProjects>
        <Project></Project>

    </>
  )
}

export default Home
