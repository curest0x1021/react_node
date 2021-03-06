import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import './styles.css'

import imgRemove from '../../../../assets/images/close_gray.svg'
import { addToCart, removeFromCart, removeAllFromCart } from '../../../../redux/actions/cart'

class SideCartItem extends Component {


  onIncrementPurchasedCount = () => {
    this.props.dispatch(addToCart([this.props.item]))

    // showNotification('Added to cart', 'success')
  }

  onDecrementPurchasedCount = () => {
    this.props.dispatch(removeFromCart(this.props.item))

    // showNotification('Removed from cart', 'info')
  }

  onRemove = () => {
    this.props.dispatch(removeAllFromCart(this.props.item))

    // showNotification('Removed from cart', 'info')
  }

  render () {
    const { item, count } = this.props
    
    return (
      <div className='side-cart-item'>
        <div className='side-cart-item-content'>
          <LazyImage className='img-item' src={ item.main_image }/>
          <div className='side-cart-item-info'>
            <div className='side-cart-item-title'>{ item.name }</div>
            <div className='side-cart-item-price'>{ item.display_price }</div>
            <div className='side-cart-item-quantity'>{ `qty: ${count}` }</div>
          </div>
          <img className='img-remove clickable' src={imgRemove} alt='cross' onClick={this.onRemove}/>
        </div>
        
        <div className='side-cart-item-separator'/>
      </div>
    )
  }
}

export default connect()(SideCartItem)
