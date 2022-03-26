import React, { useState } from 'react'
import Modal from './Modal'

export default function Header() {
    const [show,setShow]=useState(false);

    return (
        <div>
            <div className='header'>
                <h1>TODO Sticky Notes v1.1</h1>
                <p>Write your TODO note</p>
                <div><a href='#' className='open-modal' onClick={()=>setShow(true)}>Add note</a></div>
            </div>
            <Modal onClose={()=>setShow(false)} show={show} />
        </div>
    )
}
