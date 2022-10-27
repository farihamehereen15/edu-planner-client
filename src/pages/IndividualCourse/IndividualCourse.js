import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPrint from "react-to-print"
import { useRef } from 'react';


const IndividualCourse = () => {
    const ref = useRef()
    const coursesDetails = useLoaderData()
    const { details, price, img, name, _id } = coursesDetails
    return (
        <div ref={ref} className='container my-5 shadow rounded'>

            <Card className='border-0 p-2'>
                <Card.Img variant="top" height={'400px'} className='rounded-2' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ReactPrint trigger={() => <button>download</button>} content={() => ref.current}></ReactPrint>

                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>
                        <p>price :  {price}</p>
                    </Card.Text>
                    <Link to={"/course"}><Button className='me-3' variant="primary">Go Back To All News</Button></Link>

                    <Link to={`/checkout/${_id}`}><Button variant="primary">Get Primium Acces</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default IndividualCourse;