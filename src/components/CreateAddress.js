import React, { Component } from 'react';

class CreateAddress extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            number: "",
            city: "",
            address: ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmit = () => {
        const userData = {
            name: this.state.name,
            number: this.state.number,
            city: this.state.city,
            address: this.state.address
        };
        console.log(userData);
    }
    render() {
        const {name, number, city, address } = this.state;
        return (
            <form onSubmit={(e) => this.onSubmit(e)} className="ca-form">
                <div className="ca-form_group">
                    <label htmlFor="name" className="ca-form_label">name</label>
                    <input type="text"
                    onChange={this.onChange}
                    className="ca-form_input"
                    placeholder="e.g john Doe" 
                    id="name"
                    value={name}
                    error=""
                    required={true}/>
                </div>
                <div className="ca-form_group">
                    <label htmlFor="number" className="ca-form_label">mobile number</label>
                    <input type="text"
                    onChange={this.onChange}
                    className="ca-form_input"
                    placeholder="mobile number" id="number"
                    value={number}
                    error=""
                    required={true}/>
                </div>
                <div className="ca-form_group">
                    <label htmlFor="city" className="ca-form_label">city</label>
                    <input type="text"
                    onChange={this.onChange}
                    className="ca-form_input"
                    placeholder="e.g kampala" id="city"
                    value={city}
                    error=""
                    required={true}/>
                </div>
                <div className="ca-form_group">
                    <label htmlFor="address" className="ca-form_label">address</label>
                    <input type="text"
                    className="ca-form_input ca-form_input-1"
                    onChange={this.onChange}
                    placeholder="e.g kalema Apartments, plot 00 johnson RD room 240" id="address"
                    value={address}
                    required={true}/>
                </div>
                <div className="popUp-buttons">
                    <button type="submit" value="submit" className="ca-form_btn">add address</button>
                </div>
            </form>
        );
    }
}

export default CreateAddress;
