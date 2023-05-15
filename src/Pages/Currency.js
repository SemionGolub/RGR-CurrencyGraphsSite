import React from 'react';
import './Pages.css'

function PrintCurrencyGraph(){

}

const Currency = () => {
    return (
        <div >
            <h1>Welcome to MoneyTree</h1>
            <div className={"curmenu"}>
                <input className={""} placeholder={"Выберите валюту"}/>
                <input type={"button"} className={"button-icon-currency"}/>
            </div>
        </div>
    );
};

export default Currency;