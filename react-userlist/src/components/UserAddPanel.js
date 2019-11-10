import React, {Component} from 'react';

class UsersForm extends Component {
    constructor(props){
        super(props);
    }    

    handleSubmit = (event) => {
        event.preventDefault(); 

        let firstName = this._inputFirstName.value.trim();

        if (firstName == '') {
            console.log("Nie uzupelnione imie");
            
            return false;
        }

        let lastName = this._inputLastName.value.trim();

        if (lastName == '') {
            console.log("Nie uzupelnione nazwy");
            
            return false;
        }

        this.props.addUser(this._inputFirstName.value, this._inputLastName.value); 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" className='input' ref={(data) => {this._inputFirstName = data}} ></input>&nbsp;
                <input type="text" placeholder="Last Name" className='input' ref={(data) => {this._inputLastName = data}} ></input>
                <button type="submit" className='btnAdd'>Add user</button>
                {/* <ul className="errors">
                        <il>Please give your first name</il>
                        <il>Please give your last name</il>
                    </ul> */}
            </form>
                        
        )
    }
}

export default UsersForm;