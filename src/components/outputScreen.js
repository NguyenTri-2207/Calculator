import React from 'react';

import OutputScreenRow from './outputScreenRow.js';

const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value={props.number} />
            <OutputScreenRow value={props.type} />
            <OutputScreenRow value={props.numberStore} />
            <OutputScreenRow value={props.answer} />
        </div>
    )
}

export default OutputScreen;