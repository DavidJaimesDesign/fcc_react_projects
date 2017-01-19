import React from 'react';
import {Row, Col} from 'react-bootstrap';

const GenerationCount = ({count}) => {
    return(
    	    <Row>
                <Col md={4} mdOffset={4}>
                	  <div className="center_text">Generations Passed: {count}</div>
                 </Col>
            </Row>

    )
}

export default GenerationCount;
