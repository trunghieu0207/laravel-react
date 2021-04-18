import React, { useState } from 'react'

function Example() {
    const [value, setValue] = useState('aaa');

    return (
        <>
            <div className="container">
                <h2>{value}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Example;
