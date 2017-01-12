import React from 'react';

const DisplayCells = ({array}) => {
    return(
            <div className="col-md-8 col-md-offset-2  col-centered displaycells">
                {array.map((row, k) =>
                    <div className="row" key={k}>
                        {row.map((cell, y) =>
                            <div className="empty-cell col-centered" key={y}></div>
                        )}
                    </div>
                )}
            </div>
    )
}

export default DisplayCells
