import React from 'react'
import DepartementName from './components/DepartementName'
import Team from './components/Team'
import EmployeRequestTable from './components/EmployeRequest'
import PageHeader from '../../DesignSystem/PageHeader'
import { Typography } from '@mui/material'
const SuperviseurEquipe =() => {
  return (
    <>
    <PageHeader>
      <Typography variant='h5' color ='primary' >Departement: Developpement web</Typography>
    </PageHeader>
    <EmployeRequestTable/>
    <Team/>
    </>
  )
}

export default SuperviseurEquipe