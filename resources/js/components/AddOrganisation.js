import React, { Component } from 'react';

class AddOrganisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newOrg: ''
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(key, e) {
        var state = Object.assign({}, this.state.newOrg); 
        state[key] = e.target.value;
        this.setState({newOrg: state });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newOrg);      
    }

    render() {
        return(
            <div>
                <h2>Add New Organisation</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>&nbsp;&nbsp;
                        <input name="org" placeholder='Organisation' value={this.state.org} onChange={(e)=>this.handleInput('org', e)}></input>
                        &nbsp;&nbsp;
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default AddOrganisation;