import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default Main;
 
/* An example React component */
class Main extends Component {
   
    constructor() {
        super();
        this.state = { users: [] }
    }

    componentDidMount() {
        fetch('/api/users')
        .then(response => { return response.json(); })
        .then(users => { this.setState({ users }); });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <tr key={user.id} > 
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>{ user.role }</td>
                </tr>      
            );
        })
    }

    render() {
        return (
            <div>
                <table className="table" >
                <thead>
                    <th>ID</th>
                    <th>Name</th>   
                    <th>Email</th>   
                    <th>Role</th> 
                </thead>
                <tbody>
                </tbody>
                    { this.renderUsers() }
                </table> 
            </div>    
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}

