import React, { Component } from 'react'


export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return (
            <>
                <div className={className} style={{
                    backgroundImage: `url(${this.props.id.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}>
                </div>

            </>


        )
    }
}
