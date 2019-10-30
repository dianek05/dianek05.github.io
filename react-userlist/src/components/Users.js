import React from 'react';


handleInput = (ev) => {
    this.setState(prevVal => {
        return {
            inputVal: ev.target.value
        }
    })
}


buttonHandleClick = ( => {
    this.setState(prevList => {
        return {
            userMock: prevList.userMock.concat(this.state.inputVal)
        }
    })
})

render () {
    return (
    <div>
        <div className="form">
            <input name="imie" />
            <button>Dodaj imie</button>
        </div>
        <div className='listing'>
            <ul>
                {this.state.usersMock.map(user => {
                    return <li>User o id{user}</li>
                })}
            </ul>
        </div>
    </div>
    )
}