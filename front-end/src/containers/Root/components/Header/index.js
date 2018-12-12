import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../../../../components/Button'
import Cart from '../../../../components/Cart'
import SettingsDropdown from './components/SettingsDropdown'

import './styles.css'

import imgLogo from '../../../../assets/images/logo.svg'
import imgFlow from '../../../../assets/images/login_flow.svg'
import imgMinimizedFlow from '../../../../assets/images/login_flow_min.svg'

import { logoutUser } from '../../../../redux/actions/user'

class Header extends Component {

  onClickLogo = () => {
    this.props.history.push('/home')
  }

  onSignUp = () => {
    this.props.history.push('/auth/signup')
  }

  onLogin = () => {
    this.props.history.push('/auth/login')
  }

  onEditProfile = () => {
    this.props.history.push('/settings/edit_profile')
  }

  onOrderHistory = () => {
    this.props.history.push('/settings/order_history')
  }

  onPaymentMethod = () => {
    this.props.history.push('/settings/payment_method')
  }

  onLogout = () => {
    this.props.dispatch(logoutUser())
    this.props.history.replace('/home')
  }

  onOrderNow = () => {
    this.props.history.push('/menus')
  }

  render () {
    let { pathName, user, history, sideBar } = this.props
    
    return (
      <div className={classNames('app-header', {'app-header-squizzed': false})}>
        <img className='img-logo clickable' src={imgLogo} alt='logo' onClick={this.onClickLogo}/>

        { pathName.includes('auth/signup') && <img className='img-flow' src={imgFlow} alt='flow'/> }
        { pathName.includes('auth/signup') && <img className='img-min-flow' src={imgMinimizedFlow} alt='flow'/> }

        { !pathName.includes('auth/signup') && !pathName.includes('help-center') && !pathName.includes('terms-of-service') &&
          <div className='div-links'>
            <Link to='/menus'><span className='clickable'>Menu</span></Link>
            <Link to='/how-it-works'><span className='clickable'>Pricing</span></Link>
            <Link to='/gift-cards'><span className='clickable'>Gifts</span></Link>
          </div>
        }

        { pathName.includes('help-center') && 
          <div className='div-help-center-banner'>
            <div className='div-separator'/>
            <div className='div-help-center-title'>Help Center</div>
          </div>
        }

        { pathName.includes('terms-of-service') && 
          <div className='div-help-center-banner'>
            <div className='div-separator'/>
            <div className='div-help-center-title'>Legal</div>
          </div>
        }
        
        { !pathName.includes('auth') && !pathName.includes('how-it-works') &&
          <div className='div-buttons'>
            { user.loggedIn && 
              <SettingsDropdown
                onEditProfile={ this.onEditProfile }
                onPaymentMethod={ this.onPaymentMethod }
                onOrderHistory={ this.onOrderHistory }
                onLogout={ this.onLogout }
              /> 
            }
            { !user.loggedIn && <div className='div-login clickable' onClick={this.onLogin}>LOG IN</div> }
            { !user.loggedIn && <Button onClick={this.onSignUp}>SIGN UP</Button> }
            { !sideBar.visible &&
              <Cart
                highlighted={ false }
                history={ history }
              />
            }
          </div>
        }

        { pathName.includes('how-it-works') && 
          <div className='div-buttons'>
            <Button className='btn-order-now' onClick={this.onOrderNow}>Order Now</Button>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    sideBar: state.sideBar,
  }
}

export default connect(mapStateToProps)(Header)
