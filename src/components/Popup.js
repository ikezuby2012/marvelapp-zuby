import React, { Component} from 'react';

class Popup extends Component {
    render() {
        return (
            <div>
                <div className="popup-box">
                    <div className=" box-center">
                        <span className="close-icon" onClick={this.props.handleClose}>&times;</span>
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
