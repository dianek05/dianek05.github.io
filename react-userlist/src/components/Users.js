import React, {Component} from 'react';
import UserList from './UserList';
import UsersForm from './UserAddPanel';
import "./Users.css";

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            listOfUsers: []
        }
    }

    addUser = (userName) =>  {
        
        let newUser = {
            key: Date.now(),
            name: userName
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

    
    render(){
        return (
            // <div className="users-main">
            //     <h1>User's List</h1>
            // </div>
            <div>
                <h1>User's List</h1>
                <UsersForm addUser={this.addUser}/>
                <br />
                <UserList currentList={this.state.listOfUsers} listRemoveUser={this.removeUser}/>
            </div>
        ) 
    }

}

export default Users;