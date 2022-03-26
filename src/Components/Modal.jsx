import React from 'react'

export default function Modal(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className='modal'>
            <div className='modal-body'>
                <span className='closebtn' onClick={props.onClose}>&#10006;</span>
                <form>
                    <div className='form-element'>
                        <input type="text" placeholder='Write your title' />
                    </div>
                    <div className='form-element'>
                        <textarea rows={4} placeholder="Your content ..." />
                    </div>
                    <input type="submit" value="Create" />
                </form>
            </div>
        </div>
    );
}
