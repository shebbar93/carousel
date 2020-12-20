import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Product from './Product'
import ProductDetail from './ProductDetail'
export default class CarouselClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }
    generateItems() {
        var items = []
        var level
        for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Product key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }

    getDescription() {
        var items = []
        var level
        items.push(<ProductDetail key={this.state.active} details={this.state.items[this.state.active]} />)
        return items
    }

    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }

    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ items: nextProps.items });
    }

    render() {
        return (
            <>
                <div id="carousel" className="noselect">
                    <div className="arrow arrow-left" onClick={this.rightClick}><i className="fas fa-arrow-left"></i></div>
                    <ReactCSSTransitionGroup
                        transitionName={this.state.direction}>
                        {this.generateItems()}
                    </ReactCSSTransitionGroup>
                    <div className="arrow arrow-right" onClick={this.leftClick}><i className="fas fa-arrow-right"></i></div>

                </div>
                <div>{this.getDescription()}</div>
            </>
        )
    }
}
