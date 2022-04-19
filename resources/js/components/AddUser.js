import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                role_id: 1, // Not sure if this is best practice but I initialised the state to first element of the select
                organisation_id: 1, // Might be better to grab the current state of the component rather than initialise?
                password: ''   
            },
            organisations: [],
            roles: []
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/api/organisations')
        .then(response => { return response.json(); })
        .then(organisations => { this.setState({ organisations }); });

        fetch('/api/roles')
        .then(response => { return response.json(); })
        .then(roles => { this.setState({ roles }); });
    }
    
    handleInput(key, e) {
        var state = Object.assign({}, this.state.user);
        state[key] = e.target.value;
        this.setState({user: state });
    }

    handleChange(key, e) {
        var state = Object.assign({}, this.state.user);
        state[key] = e.target.value;
        this.setState({user: state });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.user);    
    }
    // TODO: remove all the awful non-breaking space in the near future
    render() {
        return(
            <div>
                <h2>Add New Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>&nbsp;&nbsp;
                        <input name="name" placeholder='Name' value={this.state.user.name} onChange={(e)=>this.handleInput('name', e)}></input>
                        &nbsp;&nbsp;
                        <label>Email:</label>&nbsp;&nbsp;
                        <input name="email" placeholder='Email' value={this.state.user.email} onChange={(e)=>this.handleInput('email', e)}></input>
                        &nbsp;&nbsp;
                        <label>Password:</label>&nbsp;&nbsp;  
                        <input name="password" placeholder='Password' value={this.state.user.password} onChange={(e)=>this.handleInput('password', e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Organisation:</label>&nbsp;&nbsp; 
                        <select value={this.state.user.organisation_id} onChange={(e)=>this.handleChange('organisation_id', e)}>
                            {this.state.organisations.map((org) => {
                                return <option key={org.id} value={org.id}>{org.org}</option>
                            })}
                        </select>
                        &nbsp;&nbsp;
                        <label>Role</label>&nbsp;&nbsp;
                        <select value={this.state.user.role_id} onChange={(e)=>this.handleChange('role_id', e)}> 
                            {this.state.roles.map((role) => {
                                return <option key={role.id} value={role.id}>{role.role}</option>
                            })}
                        </select>
                        &nbsp;&nbsp;
                        <input type="submit" value="Submit" />
                    </div>                   
                </form>
            </div>
        )
    }
}
export default AddUser;
