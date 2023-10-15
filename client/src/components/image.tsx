import React from "react";
class Image extends React.Component<any, any> {
    render() {
        return (
            <img src={this.props.image} alt="" />
        )
    }
}

export default Image