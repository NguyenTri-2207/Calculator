import React from 'react';

import OutputScreenRow from './outputScreenRow.js';

const OutputScreen = (props) => {
    return (
         <div className="screen">
                <OutputScreenRow
                    value={props.number}
                    value1={props.type} 
                    value2={props.numberStore}
                    value3={props.answer}
                />
            </div>
    )
}

export default OutputScreen;