import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type DatePickerFormProps={
  label:string,
    value: Date | null;
  onChange: (date: Date | null) => void;
}
const DatePickerForm = ({label, value, onChange}:DatePickerFormProps ) => {
  return (
    <LocalizationProvider dateAdapter={ AdapterDateFns }>
      <DemoContainer sx={{marginBottom:"16px",}} components={['DatePicker']}>
        <DatePicker sx={{ width:"100%"}}label= {label}
          value={value}
          onChange={onChange}
          slotProps={{ textField: { fullWidth: true } }}
         />
      </DemoContainer>
    </LocalizationProvider>
    
  )
}

export default DatePickerForm