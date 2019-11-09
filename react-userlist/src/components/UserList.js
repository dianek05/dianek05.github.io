import React, {Component} from 'react';

class UserList extends Component{
    constructor (props){
        super(props)
    }

    createLi = (user) => {
       return (
        <li key={user.key}>
            <div>
            {user.firstName} {user.lastName}
            </div>
            <button className='userRem' onClick={() => this.props.listRemoveUser(user.key) }> Remove</button>
       </li>
       );
    }

    render(){
        let usersList = this.props.currentList;
        let usersLi = usersList.map(this.createLi);

        return(
            <div className='the-list'>
                <ul>{usersLi}</ul>
                
            </div>
        )
    }
}

export default UserList;