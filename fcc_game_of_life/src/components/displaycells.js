import React from 'react';
import {Row, Col} from 'react-bootstrap';

const DisplayCells = ({array}) => {
    function checkCell(cell, y){
        let cellVal;
        if(cell === true){
            cellVal = <div className="empty-cell filled-cell cell-right" key={y}></div>
        }else {
            cellVal = <div className="empty-cell cell-right" key={y}></div>
        }
        return cellVal;
    }
    
    return(
            <Row>
                <Col md={8} mdOffset={2}>
                {array.map((row, k) =>
                        <Row key={k}>
                        <div className="div-center">
                        {row.map((cell, y) =>
                            checkCell(cell, y)
                        )}
                        </div>
                        </Row>  
                )}
                </Col>
            </Row>
    )
}

export default DisplayCells
