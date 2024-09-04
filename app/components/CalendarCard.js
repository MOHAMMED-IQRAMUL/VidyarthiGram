import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const CalendarCard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can add code here to fetch or display schedules based on the selected date
  };

  return (
    <Card sx={{ width: '45%', borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Your Schedule
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box display="flex" justifyContent="center">
            <DateCalendar 
              value={selectedDate} 
              onChange={handleDateChange} 
              views={['year', 'month', 'day']}
            />
          </Box>
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
