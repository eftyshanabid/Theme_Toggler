import React from 'react'
import './Style.css'

function ImageCard(props) {
    return (
        <>
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className= {`border border-2 border-${props.mode==='dark'?'danger':'success'} p-3`}>
            <div className='row'>
                    <div className='col-lg-4'>
                        <div className="card border border-2 border-dark" style={{ width: "18rem",color: props.mode==='dark'?'yellow':'black',backgroundColor: props.mode==='dark'?'black':'white' }}>
                            <img src={`${props.cart1.link}`} className="card-img-top border-bottom border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{`${props.cart1.header}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card card border border-2 border-dark" style={{ width: "18rem",color: props.mode==='dark'?'yellow':'black',backgroundColor: props.mode==='dark'?'black':'white' }}>
                            <img src={`${props.cart2.link}`} className="card-img-top border-bottom border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{`${props.cart2.header}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className="card card border border-2 border-dark" style={{ width: "18rem",color: props.mode==='dark'?'yellow':'black',backgroundColor: props.mode==='dark'?'black':'white' }}>
                            <img src={`${props.cart3.link}`} className="card-img-top border-bottom border-2 border-dark" alt="..." />
                            <div className="card-body ">
                                <p className="card-text">{`${props.cart3.header}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
            </div>

        </>
    )
}
export default ImageCard;
