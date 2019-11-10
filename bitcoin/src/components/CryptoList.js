import React from 'react';
import axios from 'axios';
import './CryptoList.css';

class CryptoList extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        let cryptoRate = this.props.cryptoList;
        console.log(cryptoRate);
        // let currencies = cryptoRate.map ( crypto => {
       
        // 
            
        //     return ( 
        //         <li key={crypto.currency} className="CryptoListLi">
        //             <span className="CryptoLabel">Last Rate:</span>
        //             &nbsp;&nbsp;&nbsp;
        //             <span className={crypto.class + " CryptoSymbol"}>{crypto.lastRate}{crypto.arrow}</span>
        //             &nbsp;&nbsp;&nbsp;
        //             <span className="CryptoCurrency">{crypto.currency}</span>
        //             &nbsp;&nbsp;&nbsp;
        //             <span className="CryptoName">{crypto.symbol}</span>
        //         </li>
        //     );   
        // });

        return (
            <div className="CryptoList">
            <ul className="CryptoListUl">
                {/* {currencies} */}
            </ul>
            </div>
        )
    }
}


export default CryptoList;

