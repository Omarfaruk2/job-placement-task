import React from 'react'
import "./Say.css"
import Card from 'react-bootstrap/Card'


const Say = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center'>Our Students What say..</h2>
            <div className='row m-0 p-0 say-card'>


                <div className="col-lg-4">
                    <Card className='mx-auto p-2' style={{ width: '24rem' }}>
                        <Card.Body>
                            <p className='mx-auto text-center w-100'><img className='card-img ' src="data:image/jpeg;base64,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" alt="" />
                            </p>
                            <h6 className=' text-center'>Group Support</h6>
                            <span> “Very Good Course and I am provide everyone.
                                ”
                            </span>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <Card className='mx-auto p-2' style={{ width: '24rem' }}>
                        <Card.Body>
                            <p className='mx-auto text-center w-100'>
                                <img className='card-img' src="data:image/jpeg;base64,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" alt="" />
                            </p>
                            <h6 className='text-center'>Group Support</h6>
                            <span> “Best Course in my life I ever seen. Mentors are also very good.
                                ”
                            </span>
                        </Card.Body>
                    </Card>
                </div>

                {/* 3 */}
                <div className="col-lg-4">
                    <Card className='mx-auto p-2' style={{ width: '24rem' }}>
                        <Card.Body>
                            <p className='mx-auto text-center w-100'>
                                <img className='card-img' src="data:image/jpeg;base64,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" alt="" />
                            </p>
                            <h6 className=' text-center'>Group Support</h6>
                            <span> “Love that course , I'm felling proud as a students of thous.
                                ”
                            </span>
                        </Card.Body>
                    </Card>
                </div>



                {/* 2 */}
            </div>
        </div>
    )
}

export default Say