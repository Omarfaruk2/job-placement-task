import React, { useState } from 'react'
import "./Sineup.css"

import { useForm } from "react-hook-form"
import "./Login.css"
import Card from 'react-bootstrap/Card'
import logo from "../../img/logo.png"
import { SiInformatica } from 'react-icons/si'
import { Button } from 'react-bootstrap'
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from "../../firebase.init"
import Lodding from '../Loadding/Lodding'
import GoogleSing from './GoogleSing'
import { Link, useNavigate } from 'react-router-dom'

function Sineup() {
    const navigate = useNavigate()
    const [displayName, setDisplayName] = useState('')
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data?.mail, data?.password)
        await updateProfile({ displayName })
        alert('Updated profile')




    }
    if (user) {
        navigate("/")
    }
    if (updateError) {
        console.log("hello", updateError)
    }

    if (loading || updating) {
        return <Lodding />
    }


    if (error) {
        console.log(error)
    }
    console.log(user)

    return (

        <div>
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
                    <div className='col-lg-7 p-0'>
                        <div>
                            <Card className='w-75 mt-5 border-part card-height'>
                                <Card.Body>
                                    <Card.Title className='fw-bold text-center'>Sign Up</Card.Title>
                                    <form className='loginform' onSubmit={handleSubmit(onSubmit)}>


                                        <input
                                            // type="displayName"
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)} placeholder='type your name' />
                                        <p className='error-text'>{errors.name?.message}</p>

                                        <input placeholder='type your email' {...register("mail", { required: "Email Address is required" })} />
                                        <p className='error-text'>{errors.mail?.message}</p>

                                        <input placeholder='type your password' className='' type="password"  {...register("password", { required: "Password Address is required" })} />
                                        <p className='error-text'>{errors.password?.message}</p>

                                        {/* <input type="submit" /> */}
                                        <p className='text-center'>
                                            <Button type='submit' className='btn btn-danger mx-auto text-center'><span>Sign UP</span></Button>
                                        </p>

                                    </form>

                                    {/* <div className='or '>
                                        <hr />
                                        <span className='mx-2 fw-bold'>Or</span>
                                        <hr />
                                    </div> */}
                                    <span>Already Have an account ? <Link className='text-decoration-none text-danger' to="/login "><span className='under'>Login</span></Link>
                                    </span>

                                    <GoogleSing />
                                </Card.Body>
                            </Card>

                        </div>
                    </div>

                </div>




            </div>
        </div>

    )
}

export default Sineup