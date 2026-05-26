import React from 'react';
import { Link } from "react-router-dom";
const RefundPolicy = () => {
    return (
        <div className='bg-base-200'>
            <div className='bg-base-300 p-10'>
            <h1 className='text-3xl text-center font-sans'> Refund Policy</h1>
            <p className='text-center mt-5 font-sans '><span className='hover:text-primary'><Link to='/'>Home</Link></span>/ Refund Policy</p>
            </div>
            <div className='container mt-5'>
            <h1 className='text-4xl font-sans'> Refund Policy</h1>
            <p className='mt-5'>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p> <br />
            <p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p> <br />
            <p>To start a return, you can contact us at <b>fasion.house.italy@gmail.com</b>. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.</p> <br />
            <p>You can always contact us for any return question at <b>fasion.house.italy@gmail.com</b>.</p>
            <h1 className='mt-5 text-1xl font-bold'>Damages and issues</h1>
            <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>
            <h1 className='mt-10 text-1xl font-bold'>Exceptions / non-returnable items</h1>
            <p>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.</p>
            <p className='mt-10'>Unfortunately, we cannot accept returns on sale items or gift cards.</p>

            <h1 className='mt-10 text-1xl font-bold'>Exchanges</h1>
            <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
            <h1 className='mt-10 text-1xl font-bold'>Refunds</h1>
            <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>
            </div>
           
        </div>
    );
};

export default RefundPolicy;
