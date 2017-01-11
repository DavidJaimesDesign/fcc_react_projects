import React from 'react';

const DisplayCells = ({array}) => {
    return(
            <div className="col-md-12  col-centered displaycells">
                {array.map((row, k) =>
                    <div className="row" key={k}>
                        {row.map((cell, y) =>
                            <div className="empty-cell" key={y}></div>
                        )}
                    </div>
                )}
            </div>
    )
}

export default DisplayCells
