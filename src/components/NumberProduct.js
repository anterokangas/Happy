import React from 'react';
import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {getPrice, uniqueKey} from "../javascript/tools"

class TextProduct extends React.Component {

    constructor (props) {
        console.log("Product: props="+JSON.stringify(props))

        super(props)
        this.state = {
            ...props,
        }
    }

    onChange = (event) => {
        console.log("NumberProduct onChange/Blue name="
                    + event.target.name 
                    + " value="
                    + event.target.value)
        let state = {order:{}}
        state[event.target.name] = event.target.value
        this.setState(state)
    }

    render () {
        let product = this.props.product   
        
        let numberName = "Number"
        if (happening.numberName) numberName = this.props.happening.numberName
        
        let productMin = "0"
        if (product.min) productMin = this.props.product.min

        let value = 0
        if (product.value) value = product.value

        // if (this.props.order && this.props.order[product.name]) {
        //     defaultValue = this.props.order[product.name]
        // }
        // let priceSumName = "price in total"
        // if (product.priceSumName) priceSumName = product.priceSumName

        // let id = product.name + "OrderPriceName"
        // let orderPriceValue = 0
        // if (this.props.order && this.props.order[id]) orderPriceValue = this.props.order[id]
       
        let comment = ""
        if (product.comment) comment = <p>product.comment</p>
        
       
        return (
            <Form.Field>
            <span>{numberName}: </span>
            <input type="number"
                name={product.name}
                min={productMin}
                required
                className="form-control"
                value={value}
                onChange={this.onNumberChange}
            />
            <span key={uniqueKey()}>{priceSumName}:
            <input type="number"
                name={part.subtotal}
                id={id}
                readOnly
                value={orderPriceValue}
                onChange={this.sumGroup}
            /> € </span>
            {comment}
            </Form.Field>
        )   
    }
        
        
        
        
        
        
        return product.required ?
            (
            <Form.Field key={uniqueKey()}>
            <label className="large-label" 
                htmlFor={product.name}
                key={uniqueKey()}>
                {product.name}
            </label>
            <span className="required" key={uniqueKey()}>*</span>
            <input type={product.type.toLowerCase()}
                key={uniqueKey()}
                name={product.name}
                required
                className="form-control"
                onBlur={this.onChange}
                defaultValue={this.state[product.name]}
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
                    defaultValue={this.state[product.name]}
                />
                {comment}
                </Form.Field>
            )
    }
}

export default connect()(TextProduct);
