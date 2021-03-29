import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {Button} from "./Test";

function Example() {
    const [value, setValue] = useState('');

    return (
        <>
            <div className="container">
                <h2>{value}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Button handleClick={setValue}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Example;
ReactDOM.render(<Example />, document.getElementById('example'));
