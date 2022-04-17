import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                email: '',
                role: '',
                organisation: '',
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
        // alert(key);
        // alert(e.target.value);
        var state = Object.assign({}, this.state.user);
        state[key] = e.target.value;
        this.setState({user: state });
    }

    handleChange(key, e) {
        console.log(key);
        console.log(e.target.value);
        var state = Object.assign({}, this.state.user);
        state[key] = e.target.value;
        this.setState({user: state });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, password} = this.state.user;
        var organisation = this.state.value;
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(organisation);      
    }

    render() {
        return(
            <div>
                <h2>Add New Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input name="name" placeholder='Name' value={this.state.user.name} onChange={(e)=>this.handleInput('name', e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>  
                        <input name="email" placeholder='Email' value={this.state.user.email} onChange={(e)=>this.handleInput('email', e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>  
                        <input name="password" placeholder='Password' value={this.state.user.password} onChange={(e)=>this.handleInput('password', e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Organisation:</label> 
                        <select value={this.state.value} onChange={(e)=>this.handleChange('organisation', e)}>
                        {this.state.organisations.map((org) => {
                            return <option key={org.id} value={org.id}>{org.org}</option>
                        })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select value={this.state.value} onChange={this.handleChange}> 
                        {this.state.roles.map((role) => {
                            return <option key={role.id} value={role.id}>{role.role}</option>
                        })}
                        </select>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )

    }

}
export default AddUser;
