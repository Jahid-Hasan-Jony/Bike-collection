import React from 'react';
import { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>okk</h1>
        </div>
    );
};

export default Test;