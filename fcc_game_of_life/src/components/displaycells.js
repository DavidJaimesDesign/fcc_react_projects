import React from 'react';

const DisplayCells = ({array}) => {
    function checkCell(cell, y){
        let cellVal;
        if(cell === true){
            cellVal = <div className="empty-cell filled-cell col-centered" key={y}></div>
        }else {
            cellVal = <div className="empty-cell col-centered" key={y}></div>
        }
        return cellVal;
    }
    
    return(
            <div className="col-md-8 col-md-offset-2  col-centered displaycells">
                {array.map((row, k) =>
                    <div className="row" key={k}>
                        {row.map((cell, y) =>
                            checkCell(cell, y)
                        )}
                    </div>
                )}
            </div>
    )
}

export default DisplayCells
