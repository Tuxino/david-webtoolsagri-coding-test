import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';

class Main extends Component {
   
    constructor() {
        super();
        this.state = { users: [] }
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    componentDidMount() {
        fetch('/api/users')
        .then(response => { return response.json(); })
        .then(users => { this.setState({ users }); });
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
        })
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
            </div>    
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}


