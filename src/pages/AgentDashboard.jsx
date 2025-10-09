import React, { useState } from 'react'
import TitleBar from '../components/ui/TitleBar'
import FormContainer from '../components/ui/FormContainer'
import CardContainer from '../components/agentDashboard/CardContainer'
import { agentDashboardList } from '../constants/constants'
import List from '../components/ui/List'
import ReportFilterForm from '../components/agentDashboard/ReportFilterForm'

function AgentDashboard() {
  const [csvData,setCsvData]=useState([]);
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
         <ReportFilterForm onCsvUpload={(data) => setCsvData(data)} />
            
        </FormContainer>
    </div>

     <div className='mt-5'>
        <List Data={csvData||[]}></List>
    </div>
    </>
    
  )
}

export default AgentDashboard