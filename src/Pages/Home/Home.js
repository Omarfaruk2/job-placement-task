import React from 'react'
import Helpsection from '../../Bouns/Helpsection'
import Say from '../../Bouns/Say'
import Banner from './Banner'
import "./Home.css"
import Services from './Services'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <Helpsection />
            <Say />
        </div>
    )
}

export default Home