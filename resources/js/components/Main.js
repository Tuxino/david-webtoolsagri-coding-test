import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';
import AddOrganisation from './AddOrganisation';

class Main extends Component {
   
    constructor() {
        super();
        this.state = { users:[], organisations:[] }
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleAddOrganisation = this.handleAddOrganisation.bind(this);
    }

    componentDidMount() {
        fetch('/api/users')
        .then(response => { return response.json(); })
        .then(users => { this.setState({ users }); });

        fetch('/api/organisations')
        .then(response => { return response.json(); })
        .then(organisations => { this.setState({ organisations }); });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                <tr key={user.id} > 
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.org}</td>
                    <td>{user.role}</td>
                </tr>      
            );
        });
    }

    renderOrganisations() {
        return this.state.organisations.map(organisation => {
            return (
                <tr key={organisation.id} > 
                    <td>{organisation.id}</td>
                    <td>{organisation.org}</td>
                </tr>      
            );
        });
    }

    handleAddUser(user) {
        fetch('/api/user', {
            method:'post',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            //update the state of the users
            this.setState((prevState)=> ({
                users: prevState.users.concat(data)
            }))
        })
    }

    handleAddOrganisation(organisation) {
        fetch('/api/organisation', {
            method:'post',
            headers: {
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body: JSON.stringify(organisation)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState((prevState)=> ({
                organisations: prevState.organisations.concat(data)
            }))
        })
    }

    render() {
        return (
            <div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>   
                            <th>Email</th>
                            <th>Org</th>  
                            <th>Role</th> 
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderUsers() }
                    </tbody>
                </table>
                <AddUser onAdd={this.handleAddUser} /> 
                <table className="table" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Organisation</th>   
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderOrganisations() }
                    </tbody>
                </table>
                <AddOrganisation onAdd={this.handleAddOrganisation} /> 
            </div>    
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}


