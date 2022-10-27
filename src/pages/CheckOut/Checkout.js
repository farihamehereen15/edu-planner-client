import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const course = useLoaderData()
    const { name, _id } = course;
    const handleSubmit = () => {
        toast.success('Log in successfully')


    }
    return (
        <div className='container my-5'>
            <h1> name: {name}</h1>
            <p> product id : {_id}</p>
            <Button onClick={handleSubmit} variant='info'>Buy Now</Button>
            <ToastContainer></ToastContainer>




        </div>
    );
};

export default Checkout;