import React, { Component } from 'react';
import CalculatorFace from './calculator_face';
import CalculatorButton from './calculator_button';

class CalculatorBody extends Component {
    renderButtons(){
        
    }

    render(){
        return(
            <div className="calculatorBody">
                <CalculatorFace />
            </div>
        );
    }
}

export default CalculatorBody;