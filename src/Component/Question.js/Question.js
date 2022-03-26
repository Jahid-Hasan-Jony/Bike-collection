import React from 'react';

const Question = () => {
    return (
        <div className='container py-3 my-3 border rounded px-5'>
            <h1 className='text-center py-3 text-primary'>Questins And Answers</h1>
            <div>
                <h1 className='text-danger'>1. Props Vs. State Difference</h1>
                <h4 className='border p-3'>
                    <p>1. Props help us to passing data to another component and state help us to store different of data.</p>
                    <p>2. Props Immutable but state Mutable</p>
                    <p>3. Props are read only and state changes can be asynchronous.</p>
                    <p>4. State data can be use another component by props but props cannot be use another component by state without props.</p>
                </h4>
                <h1 className='text-danger'>2. How useState Worked?</h1>
                <h4 className='border p-3'>
                    <p>useState work like a variable where we can store different type of data.</p> <p>useState data cannot be change without setState function.</p><p> we can access state's data and passing another component by props.</p>
                </h4>
            </div>
        </div>
    );
};

export default Question;