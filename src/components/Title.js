import React from 'react';
import {connect} from 'react-redux';

class Title extends React.Component {
    render() {
        let title = "RF Yhdistys RY"
        return (
            <div style={{backgroundColor: "PowderBlue",
                         width: "100%",
                         height: "150px"}}>
                <h1 style={{
                            fontSize:"100px",
                            fontFamily: "'Arial Black', Gadget, sans-serif",
                            color: "DarkBlue",
                            textShadow: "2px 2px 8px #070707"}}>
                    {title}
                </h1>
            </div>
        )
    }
}

export default connect()(Title);
