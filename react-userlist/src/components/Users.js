import React, {Component} from 'react';
import UserList from './UserList';
import UsersForm from './UserAddPanel';
import './Users.css';

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            listOfUsers: []
        }
    }

    addUser = (firstName, lastName) =>  {
        
        let newUser = {
            key: Date.now(),
            firstName: firstName,
            lastName: lastName
        }

        this.setState(  (prevState) => {
            return({
                listOfUsers: prevState.listOfUsers.concat(newUser)
            })   
        });
    }

    removeUser = (key) => {
        this.setState({
            listOfUsers: this.state.listOfUsers.filter(el => el.key !== key) 
        })
    }

    
    render() {

        let headingTitle = `"${this.props.title}" ${this.props.firstName}`;

        return (
            <div className="users-main">
                <h1>{headingTitle}</h1>

                <UsersForm addUser={this.addUser}/>
                <br />
                <UserList currentList={this.state.listOfUsers} listRemoveUser={this.removeUser}/>
            </div>
        ) 
    }

}

export default Users;