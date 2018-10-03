import React, { Component } from 'react'
import MealPlan from './components/MealPlan'

import './styles.css'

import imgPlan1 from '../../assets/images/mealplan-1.png'
import imgPlan2 from '../../assets/images/mealplan-2.png';

class MenuPlans extends Component {

  render () {
    return (
      <div className='div-meal-plans-container'>
        {/* Banner and Title */}
        <div className='div-meal-plans-banner'>
          <div className='div-meal-plans-title'>
            Meal Plans
          </div>
        </div>

        {/* Meal Plans */}
        <div className='div-meal-plans'>
          <div className='div-meal-plans-grid container'>
            {/* Title */}
            <div className='div-weekly-plans-title'>
              WEEKLY PLANS
            </div>

            {/* Separator Line */}
            <div className='div-meal-plans-separator'/>

            {/* Plans */}
            <div className='row'>
              <div className='div-meal-plan-wrapper col-12 col-xl-6'>
                <MealPlan
                  title='Two-Person Plan'
                  subtitle='serves 2'
                  image={ imgPlan1 }
                  recipiesPerWeek={ [2, 3] }
                  prices={{
                      perServing: '$9.99',
                      shipping: 'FREE',
                      weeklyTotal: '$39.99',
                      weeklyTotalOld: '$59.94',
                    }
                  }
                />
              </div>
              <div className='div-meal-plan-wrapper col-12 col-xl-6'>
                <MealPlan
                  title='Family Plan'
                  subtitle='serves 2'
                  image={ imgPlan2 }
                  recipiesPerWeek={ [4, 5, 6] }
                  prices={{
                    perServing: '$9.99',
                    shipping: 'FREE',
                    weeklyTotal: '$39.99',
                    weeklyTotalOld: '$59.94',
                  }
                }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className='div-quote-container'>
          <div className='div-quote'>
            "I'd marry @blueapron if I could. We just have a good thing goin' on." - @kaywatt
          </div>
        </div>

        {/* Common Questions */}
        <div className='div-common-question-container'>
          <div className='div-common-question-title'>
            Common Questions  
          </div>
          <div className='div-common-questions container'>
            <div className='row'>
              <div className='div-common-questions-pannel col-12 col-xl-6'>
                <div className='div-question-title'>
                  Do you accommodate specific diets or allergies?
                </div>
                <div className='div-question-answer'>
                  We accomodate a variety of dietary preferences - e.g. vegetarians, pescetarians, or if you don't et red meat, fish, shellfish, pork, or lamb - and personalize your menu each week based on your preferences. All of our boxes are assembled in the same processing facility, so we don't recommend ordering Blue Apron if you have a serious food allergy.
                </div>
                <div className='div-question-title'>
                  When do you deliver?
                </div>
                <div className='div-question-answer'>
                  We deliver all 7 days of the week in most locations.
                </div>
                <div className='div-question-title'>
                  Where do you deliver?
                </div>
                <div className='div-question-answer'>
                  We deliver to all locations in the continental United States. <a className='clickable'>See if we deliver to you.</a>
                </div>
              </div>
              <div className='div-common-questions-pannel col-12 col-xl-6'>
                <div className='div-question-title'>
                  Where do you source your ingredients?
                </div>
                <div className='div-question-answer'>
                  The quality and freshness of our ingredients are incredibly important to us, so we work directly with artisanal purveyors and hundreds of family-run farms that support sustainable practices.
                </div>
                <div className='div-question-title'>
                  Can I skip my delivery for a particular week?
                </div>
                <div className='div-question-answer'>
                  Yes, you can skip any delivery until the order is processed. You can manage your deliveries directly in your account.
                </div>
                <div className='div-question-title'>
                  Do I need to be home to accept my delivery?
                </div>
                <div className='div-question-answer'>
                  Our refrigerated boxes are packed with ice packs and insulated liners to ensure your ingredients will stay fresh for the full delivery day, even if you're not at home to accept the delivery.
                </div>
              </div>
            </div>
          </div>
          <div className='div-check-faq-container'>
            <div className='div-check-faq'>
              Have other questions? <a className='clickable'>Check out our FAQs</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuPlans
