import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../../components/AsyncComponent'

const AsyncEditProfile = asyncComponent(() => import('./EditProfile'))
const AsyncPaymentMethod = asyncComponent(() => import('./PaymentMethod'))
const AsyncOrderHistory = asyncComponent(() => import('./OrderHistory'))
const AsyncMealPreference = asyncComponent(() => import('./MealPreference'))
const AsyncRedeemCredit = asyncComponent(() => import('./RedeemCredit'))

const routes = (
  <Switch>
    <Route path='/settings/edit_profile' component={ AsyncEditProfile } />
    <Route path='/settings/payment_method' component={ AsyncPaymentMethod } />
    <Route path='/settings/order_history' component={ AsyncOrderHistory } />
    <Route path='/settings/meal_preference' component={ AsyncMealPreference } />
    <Route path='/settings/redeem_credit' component={ AsyncRedeemCredit } />

    <Redirect to='/settings/edit_profile'/>
  </Switch>
)

export default routes
