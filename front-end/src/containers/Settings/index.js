import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routes from './routes'
import SettingsMenu from './components/SettingsMenu'
import LazyImage from '../../components/LazyImage'
import './styles.css'

import imgBanner from '../../assets/images/banner.png'

import { hideSidebar } from '../../redux/actions/sideBar'

class Settings extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  render () {
    const { location, history } = this.props

    return (
      <div className='div-settings-container'>
        {/* Banner */}
        <div className='div-settings-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
        </div>
  
        {/* Main Area */}
        <div className='div-settings-body container'>
          {/* Menu */}
          <div className='div-settings-menu'>
            <SettingsMenu
              location={ location }
              history={ history }
            />
          </div>
  
          {/* Page Area */}
          <div className='div-settings-page'>
            { routes }
          </div>
        </div>
  
        {/* Footer - Contact us */}
        <div className='div-settings-contact'>
          Need help? Visit the&nbsp;
          <Link to='/help-center'><span>Help Center</span></Link>
          &nbsp;or&nbsp;
          <Link to='/contact-us'><span>Contact Us</span></Link>
        </div>
      </div>
    )
  }
}

export default connect()(Settings)
