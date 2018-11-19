import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import routes from './routes'
import Sidebar from 'react-sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import SideCart from '../SideCart'
import DropdownFooter from './components/DropdownFooter'
import asyncComponent from '../../components/AsyncComponent'
import OverlaySpinner from '../../components/OverlaySpinner'

import './styles/styles.css'

import { initializeNotificationSystem } from '../../services/notification'
import { authenticateUser } from '../../redux/actions/user'
import { fetchAllProducts } from '../../redux/actions/products'
import { ModalType } from '../../redux/actions/modal';

const AsyncMenuModal = asyncComponent(() => import('../MenuModal'))
const AsyncComboSliceModal = asyncComponent(() => import('../ComboSliceModal'))

/**
 * Root component, containing routes
 */

class Root extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isChecked: false
    }

    props.dispatch(fetchAllProducts())
  }

  componentDidMount () {
    initializeNotificationSystem(this.refs.notificationSystem)

    if (this.props.user.loggedIn === true ) {
      this.setState({
        isChecked: true,
      })
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        this.props.dispatch(authenticateUser(token))
      } else {
        this.setState({
          isChecked: true,
        })
      }
    }
  }

  componentWillReceiveProps ({ user }) {
    if (!user.loggingIn) {
      this.setState({ isChecked: true })
    }
  }

  render () {
    const { modal, history, sideBar, location, overlaySpinner } = this.props

    return (
      <Sidebar
        sidebar={<SideCart history={history}/>}
        styles={{sidebar: {background: 'white', zIndex: '1001', width: '375px', transition: 'transform .1s ease-out', WebkitTransition: '-webkit-transform .1s ease-out'}}}
        docked={sideBar.visible}
        transitions={false}
        pullRight={true}
      >
        <div className='app header-fixed'>
          { this.state.isChecked &&
            <div>
              {/* Header */}
              <Header history={history} pathName={location.pathname}/>
        
              {/* Body */}
              <div className='app-body'>
                { routes }
              </div>
        
              {/* Footer */}
              <Footer/>
              <DropdownFooter/> {/* For responsive mode */}
        
              {/* Menu Modal */}
              { modal.active === ModalType.menuModal && <AsyncMenuModal /> }

              {/* Combo Slice Modal */}
              { modal.active === ModalType.comboSliceModal && <AsyncComboSliceModal /> }
            </div>
          }
    
          {/* Notification System */}
          <NotificationSystem ref='notificationSystem' dismissible='click'/>

          <OverlaySpinner visible={ overlaySpinner.visible }/>
        </div>
      </Sidebar>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cart: state.cart,
    modal: state.modal,
    overlaySpinner: state.overlaySpinner,
    sideBar: state.sideBar,
  }
}

export default connect(mapStateToProps)(Root)
