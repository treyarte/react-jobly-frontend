import React from 'react';

import './JobCard.css';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const JobCard = ({ job }) => {
  return (
    <>
      <div className='job-card'>
        <Card>
          <CardBody>
            <CardTitle>
              <h6>{job.title}</h6>
            </CardTitle>
            <ul>
              <li>
                <CardText>Salary: {job.salary}</CardText>
              </li>
              <li>
                <CardText>Equity: {job.equity}</CardText>
              </li>
            </ul>
            <div className='apply-btn-container'>
              <Button className='btn btn-danger'>Apply</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default JobCard;
