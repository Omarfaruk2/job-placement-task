import React from 'react'
import './Lodding.css'
import Spinner from 'react-bootstrap/Spinner'
import { Button } from 'react-bootstrap'

const Lodding = () => {
    return (
        <div>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    )
}

export default Lodding