import React from 'react';
import axios from 'axios';
import './Crypto.css';
import CryptoList from './CryptoList';

class Crypto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoList: [],
        };
    }

    getCryptoData = () => {
        axios.get('https://blockchain.info/pl/ticker')
            .then((res) => {

                const ticker = res.data;
                let cryptoListArray = [];
                let lastCryptoList = this.state.cryptoList;

                cryptoListArray = Object.keys(ticker).map(key => {
                    let cryptoObj = {};
                    cryptoObj.currency = key;
                    cryptoObj.symbol = ticker[key].symbol;
                    cryptoObj.buy = ticker[key].buy;
                    cryptoObj.sell = ticker[key].sell;
                    cryptoObj.lastRate = ticker[key].last;

                    console.log(lastCryptoList);

                    // let lastObj = lastCryptoList.find(lastObj => {
                    //     return (cryptoObj.symbol === lastObj.symbol
                    // });

                    // if (lastObj !=== undefined) {
                    //     if (cryptoObj.lastRate > lastObj.lastRate) {
                    //         cryptoObj.class = "green";
                    //         cryptoObj.arrow = String.fromCharCode(8593);
                    //     } else if (cryptoObj.lastRate < lastObj.lastRate) {
                    //         cryptoObj.class = "red";
                    //         cryptoObj.arrow = String.fromCharCode(8595);
                    //     } else {
                    //         cryptoObj.class = "blue";
                    //         cryptoObj.arrow = String.fromCharCode(8596);
                    //     }
                    // } else {
                    //     cryptoObj.class = "blue";
                    //     cryptoObj.arrow = String.fromCharCode(8596);
                    // }
                // }

                    console.log(cryptoObj);

                    return cryptoObj;
                });

                console.log(this.state);

                this.setState({
                    cryptoList: cryptoListArray,
                });
            });
    }

    componentDidMount() {
        this.getCryptoData();
        console.log('component się zamontował');
        this.timer = setInterval(this.getCryptoData, 5000);
    }

    filterCryptoList () {
        console.log('wyszukiwanie');
    }


    render() {
        return (
            <div className="Crypto">
                <input type="text" placeholder="filter" ref={element =>
                this._filterInput = element } onChange={this.filterCryptoList} />
                <CryptoList cryptoList={this.state.cryptoList} />
          </div>
        );
    }
}

export default Crypto;

// jeśli jest w ES5 (funkcja nie strzałkowa) this.getCryptoData = this.getCryptoData.bind(this); w construktorze


