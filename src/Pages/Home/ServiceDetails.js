import React from 'react'
import Card from 'react-bootstrap/Card'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Lodding from '../Loadding/Lodding'


const ServiceDetails = () => {
    const [user, loading] = useAuthState(auth)

    if (user) {
        console.log(user)
    }

    if (loading) {
        <Lodding></Lodding>
        console.log("loading")


    }

    const { serviceId } = useParams()
    // console.log(serviceId)
    return (
        <div>
            {/* <h2>Helo Bro :{serviceId} </h2> */}
            <Card className='mx-auto p-4 mt-3 course-card' style={{ width: '25rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                    <Card.Title>Product ID:{serviceId}</Card.Title>
                    <Card.Text className='fw-bold fs-5'>
                        welcome ,
                        <span className='text-warning'>  {user?.displayName} </span>  <br />
                        Thanks for you purches our course so Let's start new Journey and build your career with us.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceDetails