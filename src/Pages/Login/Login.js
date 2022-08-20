import React from 'react'
import { useForm } from "react-hook-form"
import "./Login.css"
import Card from 'react-bootstrap/Card'
import { SiInformatica } from 'react-icons/si'
import { Button } from 'react-bootstrap'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Lodding from '../Loadding/Lodding'
import GoogleSing from './GoogleSing'
import { Link, useLocation, useNavigate } from 'react-router-dom'



function Login() {


    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)
    const [user2, loading2] = useAuthState(auth)

    const navigate = useNavigate()
    let location = useLocation()




    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data?.mail, data?.password)
    }

    if (loading || loading2 || !user) {
        <Lodding />
    }
    if (user || user2) {
        navigate("/")
    }

    if (error) {
        console.log(error, "error")
    }
    console.log(user)

    return (
        <div className=''>
            <div className='row m-0 p-0'>

                <div className='col-lg-5 p-0 green-div  green-part'>
                    {/* <h2>Hello</h2> */}
                    <Card className='w-75  ms-auto card-height border-part mt-5 green-part'>
                        <Card.Body className='loginform border-part '>
                            <div>
                                <Card.Title>Card Title</Card.Title>
                                {/* <img width="200px" src={logo} className="img-bg" alt="" /> */}
                                <SiInformatica className='icon'></SiInformatica>
                                <h2>Gain Your Skills</h2> <br /> <br />

                                <p>World first Best Course Provider</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-lg-7 p-0 from-part col-sm-12'>
                    <div>
                        <Card className='w-75 mt-5 border-part card-height'>
                            <Card.Body>
                                <Card.Title className='fw-bold text-center'>Log In </Card.Title>
                                <form className='loginform' onSubmit={handleSubmit(onSubmit)}>


                                    <input placeholder='type your email' {...register("mail", { required: "Email Address is required" })} />
                                    <p className='error-text'>{errors.mail?.message}</p>

                                    <input placeholder='type your password' className='' type="password"  {...register("password", { required: "Password Address is required" })} />
                                    <p className='error-text'>{errors.password?.message}</p>

                                    {/* <input type="submit" /> */}
                                    <p className='text-center'>
                                        <Button type='submit' className='btn btn-success mx-auto text-center'><span>Log in</span></Button>
                                    </p>
                                </form>

                                <span>Are you new to come ? <Link className='text-decoration-none text-danger' to="/signup "><span className='under'>REGISTER</span></Link>
                                </span>


                                <GoogleSing className="mx-auto" />
                            </Card.Body>

                        </Card>


                    </div>
                </div>

            </div>




        </div>
    )
}

export default Login