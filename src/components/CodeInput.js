import React, { Component } from 'react';
// import { reactCodeInput } from 'CodeInputField.scss';
import ReactCodeInput from 'react-code-input';

const props = {
    //className: reactCodeInput,
    inputStyle: {
        fontFamily: "monospace",
        margin: "4px",
        MozAppearance: 'textField',
        width: '50px',
        borderRadius: '3px',
        fontSize: '20px',
        height: '70px',
        paddingLeft: '7px',
        backgroundColor: 'white',
        color: 'lightskyblue',
        border: '1px solid lightskyblue',
    }, 
    inputStyleInvalid: {
        color: 'red',
        border: '1px solid red',
    }


}
class CodeInput extends Component {
    render() {
        return (
            <div className="codeInput">
                <ReactCodeInput type='number' fields={4}  {...props}/>
            </div>
        );
    }
}

export default CodeInput;
