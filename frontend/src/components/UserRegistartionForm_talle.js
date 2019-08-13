import React from 'react';
import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {happenings} from "../javascript/dbData";
import {getPrice} from "../javascript/tools"


var keyValue = 1000000
const uniqueKey = () => {
    keyValue++
    return keyValue.toString()
}

class UserRegistrationForm extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            ...props,
            order: {},
        }
    }

    onChange = (event, data={}) => {
        let state = {"order":{}}
        let name = event.target.name ? event.target.name : data.name
        let value = event.target.value ? event.target.value : data.value
        console.log("UserRF name="+name+" value="+value)
        // if (!this.props.order) this.props["order"] = {}
        state.order[name] = value
        // this.props.order[name] = value
        this.setState(state)
    }

    onCheckBoxSelect = (event) => {
        let state = {"order": {}}
        if (!state.order[event.target.name]) state.order[event.target.name] = {}
        state.order[event.target.name][event.target.id] = event.target.checked
        // if (!this.props.order[event.target.name]) this.props.order[event.target.name] = {}
        // this.props.order[event.target.name][event.target.id] = event.target.checked
        this.setState(state)
    }


    onNumberChange = (event) => {
        console.log("-->onNumberChange")
        let target = event.target
        let price = getPrice(target.name)
        let orderPrice = target.value * price
        let state = {"order": {}}
        state.order[target.name] = target.value
        // this.props.order[target.name] = target.value
        let orderName = target.name + "OrderPriceName"
        state.order[orderName] = orderPrice
        // if (!this.props.order) {this.props["order"] = {}}
        // this.props.order[orderName] = orderPrice
        // target.getElementByName(orderName).onChange()
        this.setState(state)
        console.log("onNumberChange-->")
    }


    // sumUp = (name, id) => {
    //     let sum = 0
    //     for (let item of this.props.order) {
    //         if (item.name && item.name === name) {
    //             sum += item.value
    //         }
    //     }
    //     this.state.order[id] = {}
    //     this.state.order[id].name = id
    //     this.state.order[id].value = sum
    // }
    // sumGroup = (event) => {
    //     this.sumUp(event.target.name, event.target.id)  // name=part.subtotal
    // }

    render() {
        console.log("UserRegistrationForm: render: this.props="+JSON.stringify(this.props))
        let happeningTitle = this.props.theHappening
        return this.makeUserRegistrationForm (happeningTitle)
    }

    makeUserRegistrationForm (happeningTitle) {
        let happening = happenings[happeningTitle]
        let description = "Happening Description missing!"
        if (happening.description) description = happening.description
        let parts = this.makeParts(happening, happening.parts)
        let total = "Name of Total missing!"
        if (happening.total) total = happening.total
        
        return (
            <Form>
                <Form.Field>
                    <h1>{happeningTitle}</h1>
                    <h2>{description}</h2>
                </Form.Field>
                {parts}
                <Form.Field>
                    <h3>
                        <label htmlFor={total}>{total}:</label>
                        <input type="number"
                            readOnly 
                            name={total}
                            value="0" />
                    </h3>
                </Form.Field>
                
                <Button>Vahvista</Button>
            </Form> 
        )
    }

    makeParts(happening, parts) {
        let tmpParts = []
        let tmpPart;
        if (!parts) return tmpParts
        for (let part of parts) {
            tmpPart = this.makePart(happening, parts, part)
            tmpParts.push(
                <div key= {uniqueKey()}>
                    {tmpPart}
                </div>
            )
            tmpParts.push(<br key= {uniqueKey()}/>)
        }
        return tmpParts
    }

    makePart(happening, parts, part) {
        let header = "No header!"
        if (part.header) header = part.header
        let products = ""
        if (part.products) products = this.makeProducts(happening, parts, part, part.products)
        return (
            <fieldset key={uniqueKey()}>
            <legend key={uniqueKey()}>{header}</legend>
            {products}
            </fieldset>
        )
    }

    makeProducts(happening, parts, part, products) {
        let tmpProducts = []
        for (let product of products) {
            tmpProducts.push(this.makeProduct(happening, parts, part, product))       
        }
        return tmpProducts
    }

    makeProduct(happening, parts, part, product) {
        let tmpProduct = []
        // tmpProduct.push(
        //     <Form.Field key={uniqueKey()}>
        //     <label className="large-label" 
        //         htmlFor={product.name}
        //         key={uniqueKey()}>
        //         {product.name}
        //     </label>
        // )
        // if (product.required) tmpProduct.push(
        //     <span className="required" key={uniqueKey()}>*</span>)
        switch (product.type.toUpperCase()) {
            case "TEXT":
            case "EMAIL":
                return <TextProduct happening={happening} 
                                    parts={parts} 
                                    part={part} 
                                    product={product} />
                // tmpProduct.push(this.makeTextProduct(happening, parts, part, product))
                break
            // case "NUMBER":
            //     tmpProduct.push(this.makeNumberProduct(happening, parts, part, product))
            //     break
            // case "SUBTOTAL":
            //     tmpProduct.push(this.makeSubTotalProduct(happening, parts, part, product))
            //     break
            // case "CHECKBOX":
            //     tmpProduct.push(this.makeCheckBoxProduct(happening, parts, part, product))
            //     break
            // case "RADIO":
            //     tmpProduct.push(this.makeRadioProduct(happening, parts, part, product))
            //     break 
            // case "TEXTAREA":
            //     tmpProduct.push(this.makeTextAreaProduct(happening, parts, part, product))
            //     break 
            // case "SELECT":
            //     tmpProduct.push(this.makeSelectProduct(happening, parts, part, product))
            //     break 
            // case "DIV":
            //     tmpProduct.push(this.makeDivProduct(happening, parts, part, product))
            //     break 
            default:
                tmpProduct.push(<p key={uniqueKey()}>Unknown Product Type: {product.type}</p>)
        }
        if (product.comment) {
            tmpProduct.push(<p key={uniqueKey()}>{product.comment}</p>)
        }
        // tmpProduct.push(</Form.Field>)
        return tmpProduct
    }
}

    // makeTextProduct(happening, parts, part, product) {
class TextProductElement extends React.Component {
    constructor () {
        super(props)
        this.state = {  
            name: props.product.name,
            value: ""
    }

    onChange = (event, data={}) => {
        let state = {"order":{}}
        let name = event.target.name ? event.target.name : data.name
        let value = event.target.value ? event.target.value : data.value
        console.log("UserRF name="+name+" value="+value)
        // if (!this.props.order) this.props["order"] = {}
        state.name = value
        // this.props.order[name] = value
        this.setState(state)
    }
    render () {
        console.log("makeTextProduct: "+product.name +" :"+this.state.order[product.name])
        comment = ""
        if (product.comment) comment = <p>>props.product.comment</p>
        return product.required ?
        (
        <Form.Field key={uniqueKey()}>
        <label className="large-label" 
            htmlFor={product.name}
            key={uniqueKey()}>
            {product.name}
        </label>
        <span className="required" key={uniqueKey()}>*</span>)
        <input type={product.type.toLowerCase()}
            key={uniqueKey()}
            name={product.name}
            required
            className="form-control"
            onChange={this.onChange}
            defaultValue={this.state.order[product.name]}
        />
        {comment}
        </Form.Field>
        ) :
        (
            <Form.Field key={uniqueKey()}>
            <label className="large-label" 
                htmlFor={product.name}
                key={uniqueKey()}>
                {product.name}
            </label>
            <input type={product.type.toLowerCase()}
                key={uniqueKey()}
                name={product.name}
                className="form-control"
                onChange={this.onChange}
                defaultValue={this.state.order[product.name]}
            />
            {comment}
            </Form.Field>
        )
}


    makeNumberProduct(happening, parts, part, product) {
        let numberName = "Number"
        if (happening.numberName) numberName = happening.numberName
        let productMin = "0"
        if (product.min) productMin = product.min
        let defaultValue = 0
        if (product.value) defaultValue = product.value
        if (this.props.order && this.props.order[product.name]) {
            defaultValue = this.props.order[product.name]
        }
        let priceSumName = "price in total"
        if (product.priceSumName) priceSumName = product.priceSumName
        let id = product.name + "OrderPriceName"
        let orderPriceValue = 0
        if (this.props.order && this.props.order[id]) orderPriceValue = this.props.order[id]
        return (
            <div key={uniqueKey()}>
            <span key={uniqueKey()}>{numberName}: </span>
            <input type="number"
                key={uniqueKey()}
                name={product.name}
                min={productMin}
                required
                className="form-control"
                defaultValue={defaultValue}
                onChange={this.onNumberChange}
            />
            <span key={uniqueKey()}>{priceSumName}:
            <input type="number"
                key={uniqueKey()}
                name={part.subtotal}
                id={id}
                readOnly
                value={orderPriceValue}
                onChange={this.sumGroup}
            /> € </span>
            </div>

        )   
    }

    makeSubTotalProduct(happening, parts, part, product) {
        let id = part.header+" subtotal"
        return (
            <h4 key={uniqueKey()}>
                {product.name}: <input type="number"
                    id={id}
                    name="subtotal"
                    readOnly
                    defaultValue={product.value} />
            </h4>
        )
    }

    makeCheckBoxProduct(happening, parts, part, product) {
        let tmpProduct = []
        for (let property of product.properties) {
            let checked = false
            if (this.props.order
                && this.props.order[product.name]
                && this.props.order[product.name][property]) {
                checked = this.props.order[product.name][property]
            }
            tmpProduct.push(
                <div key={uniqueKey()}>
                    <Checkbox label={property}
                    key={uniqueKey()}
                    name={product.name}
                    id={property}
                    value={property}
                    checked={checked}
                    onChange={this.onCheckBoxSelect}
                />
                <br key={uniqueKey()} />
                </div>
            )
        }
        tmpProduct.push(<br key={uniqueKey()} />)
        return tmpProduct
    }

    makeRadioProduct(happening, parts, part, product) {
        let tmpProduct = []
        for (let property of product.properties) {
            let checked = this.props.order[product.name] === property
            tmpProduct.push(
                <div key={uniqueKey()}>
                    <Radio label={property}
                    key={uniqueKey()}
                    name={product.name}
                    value={property}
                    checked={checked}
                    onChange={this.onChange}
                />
                <br key={uniqueKey()} />
                </div>
            )
        }
        return tmpProduct
    }

    makeTextAreaProduct(happening, parts, part, product) {
        let rows = 3
        if (product.rows) rows = product.rows 
        let cols = 72
        if (product.cols) cols = product.cols
        let placeHolder = ""
        if (product.placeHolder) placeHolder = product.placeHolder
        return (
            <TextArea key={uniqueKey()}
                    placeholder={placeHolder}  
                    name={product.name}
                    rows={rows} 
                    cols={cols}
                    value={this.props.order[product.name]}
                    onChange={this.onChange}
            />
        )

    }

    makeSelectProduct (happening, parts, part, product) {
        let tmpOptions = []
        let defaultValue = []
        let selected = this.props.order && this.props.order[product.name] === ""
        if (selected) defaultValue.push("")
        tmpOptions.push({
            key: uniqueKey(),
            value: "",
            text: "",
            // selected: selected,
        })
        for (let property of product.properties) {
            selected = this.props.order && this.props.order[product.name] === property
            if (selected) defaultValue.push(property)
            console.log(
                "makeselect name=" + product.name
                + " saved value=" + this.props.order[product.name]
                + " property.value=" + property
                + " -->selected=" + selected)
            tmpOptions.push({
                key: uniqueKey(),
                value: property,
                text: property,
                // selected: selected,
            })
        }
        console.log(defaultValue)
        return (
            <Form.Field key={uniqueKey()}>
            <Select key={uniqueKey()}
                    name={product.name}
                    onChange={this.onChange}
                    options={tmpOptions} />
            <br key={uniqueKey()} />
            </Form.Field>
        )
    }

    makeDivProduct(happening, parts, part, product) {
        let initial = ""
        if (product.initial) initial = product.initial
        return (
            <div key={uniqueKey()}
                id = {product.id}>
            {initial}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("\n====\nUserRegistrationForm: mapSTateToProps: state="+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(UserRegistrationForm)
