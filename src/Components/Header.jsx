import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <h1>TODO Sticky Notes v1.1</h1>
            <p>Write your TODO note</p>
            <form>
                <div className='form-element'>
                    <input type="text" id="todoInput" />
                    <input type="submit" value=" + " />
                </div>
            </form>
        </div>
    )
}
