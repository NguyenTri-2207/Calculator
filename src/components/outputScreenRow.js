import React from 'react';

const OutputScreenRow = (props) => {
    return (
        <div>
            <div className="screen-row">
                <div>{props.value} {props.value1} {props.value2}</div>
                <div>{props.value3}</div> 
            </div>
           
        </div>
    )        
}

export default OutputScreenRow;