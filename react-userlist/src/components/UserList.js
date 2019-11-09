import React, {Component} from 'react';

class UserList extends Component{
    constructor (props){
        super(props)
    }

    createLi = (user) => {
       return <li key={user.key}>{user.name} <button className='userRem' onClick={() => this.props.listRemoveUser(user.key) }>Usuń</button></li>;
    }

    render(){
        let usersList = this.props.currentList;
        let usersLi = usersList.map(this.createLi);

        return(
            <div className='usersContainer'>
                <ul>{usersLi}</ul>
                
            </div>
        )
    }
}

export default UserList;