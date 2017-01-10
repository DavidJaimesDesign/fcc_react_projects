import React from 'react';

const GenerationCount = ({count}) => {
    return(
        <div className="col-md-8 gencount">
        Generations Passed: {count}
        </div>
    )
}

export default GenerationCount;
