import React from 'react';

const DisplayCells = ({array}) => {
    return(
        <div className="row">
            <div className="col-md-8 displaycells">
                {array.map((row, k) =>
                    <div className="row" key={k}>
                        {row.map((cell, y) =>
                            <div className="col" key={y}>[]</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DisplayCells
