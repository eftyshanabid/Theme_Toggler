import React from "react";

function Version(props){
    return(
        <>
        <div className="container " >
            <h1 className="d-flex justify-content-center align-items-center vh-100 " style={{ color: props.mode==='light'?'black':'red'}}>{props.mode==='light'?'Keep Grinding!':'Sky Is The Limit'}</h1>
        </div>
        </>
    )
}
export default Version;
