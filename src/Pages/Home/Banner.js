import React from 'react'
import "./Banner.css"
import Card from 'react-bootstrap/Card'
import bannerimg from "../../img/bannerremove.png"
import Button from 'react-bootstrap/Button'


function Banner() {
    return (
        <div className='background-img pt-4'>
            <div >
                <div className='mt-5'>
                    <Card className='bg-card mx-auto text-white '>

                        <div className="row m-0 p-0" >
                            <div className="col-lg-6 ">
                                {/* <h2></h2> */}
                                <img className='w-100' src={bannerimg} alt="" />
                            </div>
                            <div className="col-lg-6 mt-4">
                                <h3 className='fs-1 fw-bold banner-h2'> <span className='online'> ONLINE COURSE </span><br />
                                    <span className='any'>Any place any time</span>
                                </h3>
                                <hr className='hr-banner' />

                                <p className='mt-5'>Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.!</p>
                                <Button className="lg:w-25 sm:w-100 sm:py-2" variant="outline-info">Explore More</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Banner