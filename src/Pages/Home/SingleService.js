import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
// import { Button } from 'react-bootstrap/button'
import Card from 'react-bootstrap/Card'
import "./Singleservice.css"
import { FcBusinessman } from 'react-icons/fc'
import { Link } from 'react-router-dom'
// FcBusinessman

const SingleService = ({ service }) => {
    const { color, courseName, description, short, _id, image, price, rating } = service
    // console.log(service)
    return (
        <div className='col-lg-4 p-0'>
            {/* <h2>{firstname}</h2> */}
            <Card className='mx-auto mt-4 p-3  course-card' style={{ width: '24rem', color: "black", backgroundColor: "" }}>

                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-center'>{courseName}</Card.Title>

                    <div className="my-2 py-2">
                        <b>{description}</b> <br />
                        <b>Price: ${price}</b> <br />
                        <b className='mt-2 pt-2 '> <FcBusinessman className='fs-3'></FcBusinessman> {rating}<span>+ Students</span></b>
                    </div>

                    <p className="text-center m-0 p-0">
                        <Button >
                            <Link className="btn btn-ghost" to={`/service/${_id}`}>Buy Course</Link>
                        </Button>
                    </p>

                </Card.Body>








                {/* <small>{firstname}</small>
                    <p>
                        <h2>{courseName}</h2>
                    </p>
                    <p className='m-0 p-0'>{description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span  > Rating: {rating} <br /> Price:${price}</span>
                        <img width="200px" src={image} alt="" />
                    </div>
                    <Button className='btn btn-danger'>Buy Now</Button> */}





            </Card>
        </div >
    )
}

export default SingleService