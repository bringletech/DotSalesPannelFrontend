import React from 'react'
import TitleBar from '../components/ui/TitleBar'
import FormContainer from '../components/ui/FormContainer'


function AgentCampaign() {
  return (
    <>
    <TitleBar title={"Againt Campaign"}></TitleBar>
   
    <div className='mt-5'>
        <FormContainer title={"Search"}>

        </FormContainer>
    </div>

    <div className='mt-5'>
        <FormContainer title={"Search Results"}>

        </FormContainer>
    </div>
    </>
    
    
  )
}

export default AgentCampaign