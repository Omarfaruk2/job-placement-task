import React from 'react'
import Card from 'react-bootstrap/Card'
import "./Helpsection.css"
import { BiSupport } from 'react-icons/bi'
import { GrProjects, GrCertificate, GrNotes } from 'react-icons/gr'
import { BsBuilding } from 'react-icons/bs'
import { MdAccessTimeFilled } from 'react-icons/md'

const Helpsection = () => {

    return (
        <div className=' text-center bg-light'>
            <h2>What we provide</h2>
            {/* <BiSupport></BiSupport> */}
            <div className='row m-0 p-0 gy-3 help-card'>

                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <BiSupport className='help-icon' ></BiSupport> <br />
                            <h5 >Group Support</h5>
                            <span>A support group is a gathering of people facing common issues to share what's Through the sharing of experiences, they're able to offe.</span>
                        </Card.Body>
                    </Card>
                </div>
                {/* 2 */}
                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <GrProjects className='help-icon' ></GrProjects> <br />
                            <h5>Real Life Projects</h5>
                            <span>Real Life is a project that aims to give students and faculty the chance to talk togethermeaningful way.</span>
                        </Card.Body>
                    </Card>
                </div>
                {/* 3 */}
                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <BsBuilding className='help-icon' ></BsBuilding> <br />
                            <h5>Helping Find a Job</h5>
                            <span>Plan your job search. Write resumes and cover letters and fill out applicatio. Intervid negotiate your salary.</span>
                        </Card.Body>
                    </Card>
                </div>

                {/* 4 */}
                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <GrCertificate className='help-icon' ></GrCertificate> <br />
                            <h5>Give Certificate</h5>
                            <span>Give My Certificate is for all kinds of. Be it certificates, degrees, offer letters, experience letters, or any other document..</span>
                        </Card.Body>
                    </Card>
                </div>
                {/* 5 */}

                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <MdAccessTimeFilled className='help-icon' ></MdAccessTimeFilled> <br />
                            <h5>Life Time Access</h5>
                            <span>Generally, lifetime access means that for a single payment, the customer gets unlimited access to the product, and sometimes.</span>
                        </Card.Body>
                    </Card>
                </div>

                {/* 6*/}

                <div className="col-lg-4">
                    <Card className='mx-auto' style={{ width: '24rem' }}>
                        <Card.Body>
                            <GrNotes className='help-icon' ></GrNotes> <br />
                            <h5>Special Note</h5>
                            <span>Special Note . If You have paid by use of credit/debit card or directed the Companynts to some other person, .</span>
                        </Card.Body>
                    </Card>
                </div>

                {/* 3 */}


            </div>
        </div>
    )
}

export default Helpsection