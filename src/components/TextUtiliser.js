import React from 'react'

function TextUtiliser(props) {
    return (
        <>
           <div className="container my-5"><h3>Enter Text here : </h3></div>
            <div className="container my-5">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={props.text} onChange={props.txtAreaHandler} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

            </div>
            
            <div className="container">
            <button className='btn btn-success mx-2' onClick={props.TxtUpHandler}>UpperCase</button>
            <button className='btn btn-success mx-2' onClick={props.txtLoHandler}>LowerCase</button>
            <button className='btn btn-success mx-2' onClick={props.txtClearHandler}>Clear</button>
            <button className='btn btn-success mx-2' onClick={props.copyToClipboard}>Copy To Clipboard</button>
            </div>

        </>
    )
}
export default TextUtiliser;