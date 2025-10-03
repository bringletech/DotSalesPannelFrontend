import React from 'react'
import TitleBar from '../components/ui/TitleBar'
import FormContainer from '../components/ui/FormContainer'
import CardContainer from '../components/agentDashboard/CardContainer'
import { agentDashboardList } from '../constants/constants'
import List from '../components/ui/List'
import ReportFilterForm from '../components/agentDashboard/ReportFilterForm'

function AgentDashboard() {
  return (
    <>
    
    <TitleBar title={"Agent Dashboard"}></TitleBar>
    <div className='mt-5'>
        <FormContainer title={"Monthly Performance"}>
         <CardContainer></CardContainer>
        </FormContainer>
    </div>
    <div className='mt-5'>
        <FormContainer title={"Report Filter"}>
          <ReportFilterForm></ReportFilterForm>
        </FormContainer>
    </div>

     <div className='mt-5'>
        <List Data={agentDashboardList}></List>
    </div>
    </>
    
  )
}

export default AgentDashboard