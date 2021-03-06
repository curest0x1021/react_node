import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgDownTriangle from '../../assets/images/dropdown_gray_triangle.svg'

class MenuDatePicker extends Component {

  constructor (props) {
    super(props)

    let dates = []
    let n = 0
    while(n < 31){
      const day = moment(new Date()).add(n, 'days')
      const weekDay = day.weekday()

      if (weekDay === 3 || weekDay === 0) {
        dates.push(day);
      }

      n++
    }

    this.state = {
      deliveryDate: new Date(),
      dates: dates,
    }
  }

  onSelectDeliveryDate = (date) => {
    this.setState({
      deliveryDate: date,
    }, () => {
      this.refs.datePickerDropdown.hide()
      this.props.onSelectDeliveryDate(date)
    })
  }

  render () {
    const { deliveryDate, dates } = this.state
    return (
      <div className={classNames('menu-datepicker', this.props.className)} style={this.props.style}>
        <Dropdown ref='datePickerDropdown' className='datepicker-dropdown'>
          <DropdownTrigger>
            {
              this.props.forCheckoutPage ?
              <div><span>{moment(deliveryDate).format('dddd, MMMM D')}</span><img src={imgDownTriangle} alt='down'/></div>
              :
              <div className='trigger-when'>WHEN: <span>{moment(deliveryDate).format('MMMM Do, YYYY')}</span></div>
            }
            
          </DropdownTrigger>
          <DropdownContent>
            <div className='div-date-dropdown-content'>
              { dates.map((date, index) => {
                return <div key={index} className='div-date-menu clickable' onClick={()=>this.onSelectDeliveryDate(date)}>{date.format('dddd, MMMM D')}</div>
              }) }
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
    )
  }
}

export default MenuDatePicker
