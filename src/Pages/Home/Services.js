import React from 'react'
import "./Service.css"
import useSWR from 'swr'
import SingleService from './SingleService'
import Lodding from '../Loadding/Lodding'


const Services = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR("data.json", fetcher, {
        suspense: true
    })
    // console.log(data)
    if (error) {
        return <Lodding></Lodding>
    }
    if (!data) {
        return <Lodding></Lodding>
    }


    return (

        <div id='sevices' className='py-5 bg-light'>
            <h2 className='text-center fw-bold'>Our Services</h2>
            <div className='row m-0 p-0'>
                {
                    data.map(service =>
                        <SingleService
                            key={service?._id}
                            service={service}
                        >
                        </SingleService>)
                }
            </div>
        </div>
    )
}

export default Services























// {
//     "_id": "630086efe9ec11cdeb33d263",
//     "image": "https://i.ibb.co/pQf5dLP/tablelamp-removebg-preview-1.png",
//     "description": "10 Lesson || 5 Assigment",
//     "firstname": "DESIGN",
//     "price": "20",
//     "rating": "5",
//     "color": "red",
//     "courseName": "Mordern Art and Design"
// },









// [
//     {
//         "_id": "630086efc59dcd3c9b54459d",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     },
//     {
//         "_id": "630086efd5941aa86050cf1d",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     },
//     {
//         "_id": "630086ef06e50be644802a60",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     },
//     {
//         "_id": "630086ef2ab8992d90109257",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     },
//     {
//         "_id": "630086efe9ec11cdeb33d263",
//         "image": "https://i.ibb.co/pQf5dLP/tablelamp-removebg-preview-1.png",
//         "description": "10 Lesson || 5 Assigment",
//         "firstname": "DESIGN",
//         "price": "20",
//         "rating": "5",
//         "color": "red",
//         "courseName": "Mordern Art and Design"
//     },
//     {
//         "_id": "630086ef16dec94fb9ea4c7f",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     },
//     {
//         "_id": "630086ef650d2c3e7ddb6c8c",
//         "image": " ",
//         "description": " ",
//         "firstname": " ",
//         "price": " ",
//         "rating": " ",
//         "color": " ",
//         "courseName": " "
//     }
// ]
