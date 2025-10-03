import React from 'react'
import TitleBar from '../components/ui/TitleBar'
import FormContainer from '../components/ui/FormContainer'
import CourseFilterForm from '../components/couponCode/CourseFilterForm'
import { couponCodeList } from '../constants/constants'
import List from '../components/ui/List'


function CouponCode() {
  return (
    <>
    <TitleBar title={"Coupon Code"}></TitleBar>
     <div className='mt-5'>
        <FormContainer title={"Coupon Codes"}>
            <CourseFilterForm></CourseFilterForm>

        </FormContainer>
    </div>
    <div className='mt-5'>
        <FormContainer title={"Coupon Codes list"}>
            <List Data={couponCodeList}></List>

        </FormContainer>
    </div>
    
    </>
    
  )
}

export default CouponCode