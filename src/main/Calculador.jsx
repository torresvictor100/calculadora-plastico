import React, { Component } from "react";
import './Calculador.css'
import Button from '../components/Button'
import Display from "../components/Display";

const initialState = {
    current: '0',
    clearDisplay: false,
    displayValue: ['0', false],
    milheiro: [1, false],
    largura: [1, false],
    altura: [1, false],
    fator: [1, false],
    espesura: [1, false],
    ads: [1, false],
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.result = this.result.bind(this)
    }

    result(){
        if(this.state.ads[1] === false){
            const valorMil = (this.state.largura[0] * this.state.altura[0]*this.state.espesura[0] * this.state.fator[0])/10
            const total = valorMil * this.state.milheiro[0]
            const unidade = valorMil/1000

            this.state.displayValue[0] = "T:" + parseFloat(total.toFixed(2)) + 
                                        "  M: "+ parseFloat(valorMil.toFixed(2)) + 
                                        " U:" + parseFloat(unidade.toFixed(2)) 
            this.state.displayValue[1] = true
        }else{
            const valorMil = ((this.state.largura[0] * this.state.altura[0]*this.state.espesura[0] * this.state.fator[0])/10) + (this.state.ads[0]/2)
            const total = valorMil * this.state.milheiro[0]
            const unidade = total/this.state.milheiro[0]/1000



            this.state.displayValue[0] = "To:" + parseFloat(total.toFixed(2))+" Mil:"+ parseFloat(valorMil.toFixed(2)) + " Un:" + parseFloat(unidade.toFixed(2)) 
            this.state.displayValue[1] = true
        }

        this.setState({ clearDisplay: false })

    }

    clearMemory() {

        this.setState({ ...initialState })
        this.state.displayValue[0] = '0'
        this.current = ''
        this.state.espesura[1] = false
        this.state.milheiro[1] = false
        this.state.largura[1] = false
        this.state.altura[1] = false
        this.state.fator[1] = false
        this.state.ads[1] = false
        this.state.displayValue[1] = false
    }


    setOperation(operation) { 
        if (operation === "esp") {
            this.state.espesura[0] = +this.state.current
            this.state.espesura[1] = true
        } else if (operation === "mil") {
            this.state.milheiro[0] = +this.state.current
            this.state.milheiro[1] = true
        } else if (operation === "lar") {
            this.state.largura[0] = +this.state.current
            this.state.largura[1] = true
        } else if (operation === "alt") {
            this.state.altura[0] = +this.state.current
            this.state.altura[1] = true
        } else if (operation === "far") {
            this.state.fator[0] = +this.state.current
            this.state.fator[1] = true
        } else if (operation === "ads"){
            this.state.ads[0] = +this.state.current
            this.state.ads[1] = true
        }


        this.state.displayValue[0] = '0'
        this.current = ''
        this.setState({ clearDisplay: false })

    }


    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        
        const clearDisplay = this.state.displayValue[0] === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? n==='.'?'0': '' : this.state.displayValue[0]
        
        this.setState({ clearDisplay: false })
        this.state.current = currentValue + n
        this.state.displayValue[0] = currentValue + n
    }



    render() {
        return (
            <div className="conteiner">
                <div className="calculator" >
                    <Display value={this.state.displayValue[0]} result={this.state.displayValue[1]} />
                    <Button label="AC" click={this.clearMemory} />
                    <Button label="esp" operation click={this.setOperation} used={this.state.espesura[1]} />
                    <Button label="mil" operation click={this.setOperation} used={this.state.milheiro[1]} />
                    <Button label="ads" operation click={this.setOperation} used={this.state.ads[1]} />
                    <Button label="7" click={this.addDigit} />
                    <Button label="8" click={this.addDigit} />
                    <Button label="9" click={this.addDigit} />
                    <Button label="lar" operation click={this.setOperation} used={this.state.largura[1]} />
                    <Button label="4" click={this.addDigit} />
                    <Button label="5" click={this.addDigit} />
                    <Button label="6" click={this.addDigit} />
                    <Button label="alt" operation click={this.setOperation} used={this.state.altura[1]} />
                    <Button label="1" click={this.addDigit} />
                    <Button label="2" click={this.addDigit} />
                    <Button label="3" click={this.addDigit} />
                    <Button label="far" operation click={this.setOperation} used={this.state.fator[1]} />
                    <Button label="0" click={this.addDigit} double />
                    <Button label="." click={this.addDigit} />
                    <Button label="=" click= {this.result} operation />
                </div>
            </div>
        )
    }


}
