import React from 'react'
import List from '../components/ui/List'
import FormContainer from '../components/ui/FormContainer'
import TitleBar from '../components/ui/TitleBar'
import { coursesData } from '../constants/constants'
function CourseList() {
  return (
   <>
   <TitleBar title={"Course List"}></TitleBar>
   
    <div className='mt-5'>
        <FormContainer title={"Courses"}>
            <List Data={coursesData}></List>

        </FormContainer>
    </div>
   </>
  )
}

export default CourseList