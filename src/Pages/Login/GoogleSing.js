import { React, useEffect } from 'react'
import "./GoogleSIng.css"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Lodding from '../Loadding/Lodding'


function GoogleSing() {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])



    if (loading) {
        return <Lodding />
    }



    return (
        <div>
            <div className='or '>
                <hr />
                <span className='mx-2 fw-bold'>Or</span>
                <hr />
            </div>
            <div className='mx-auto'>
                <p className='text-center'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto'><img src="https://raw.githubusercontent.com/Omarfaruk2/Mobile-Hunter-Client/main/src/imges/googlelo.png" alt="" /> Continue With Google</button>
                </p>
            </div>

            {/* Google Login */}

        </div>
    )
}

export default GoogleSing