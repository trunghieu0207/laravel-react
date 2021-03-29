import React from 'react'

export const Button = ({handleClick}) => {
    const handClickToButton = () => {
        handleClick('aaaa');
    }
    return (
        <>
            <button onClick={handClickToButton}>Button</button>
        </>
    )
}
