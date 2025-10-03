import React from 'react'
import TitleBar from '../components/ui/TitleBar'
import FormContainer from '../components/ui/FormContainer'
import SearchDispositionForm from '../components/dispositions/SearchDispositionForm'
import { DispositionListData } from '../constants/constants'
import List from '../components/ui/List'



function MyDispositions() {
  return (
    <>
    
    <TitleBar title={"My Dispositions"}></TitleBar>
    <div className='mt-5'>
        <FormContainer title={"Search"}>
           <SearchDispositionForm></SearchDispositionForm>
        </FormContainer>
    </div>

    <div className='mt-5'>
        <FormContainer title={"Disposition list "}>
          <List Data={DispositionListData}></List>
        </FormContainer>
        
    </div>
    </>
  )
}

export default MyDispositions