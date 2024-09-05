import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SchoolCard = ({ school }) => {
  return (
    <Card className="w-full md:w-1/3 lg:w-1/4 m-4 bg-white shadow-lg">
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          {school.school_name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Principal: {school.principal_name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Address: {school.address}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Rating: {school.rating}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Timing: {school.timing}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Website: <a href={school.website}>{school.website}</a>
        </Typography>
        <Typography variant="h6" component="div" color="primary">
          Faculty
        </Typography>
        <Box>
          {school.faculty_list.map((faculty, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              {faculty.name} - {faculty.subject}
            </Typography>
          ))}
        </Box>
        <Typography variant="h6" component="div" color="primary">
          Students
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Total Students: {school.student_data.total_students}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SchoolCard;
