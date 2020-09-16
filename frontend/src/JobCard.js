import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import './JobCard.css';
import ApplyButton from './ApplyButton';
import { Card, CardBody, CardTitle, CardText, Spinner } from 'reactstrap';

const JobCard = ({ job }) => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserJobs() {
      const jobs = await JoblyAPI.getUserJobs();
      const userJob = jobs.some((j) => {
        return j.id === job.id;
      });

      if (userJob && !toggle) {
        setToggle(true);
      }
    }
    getUserJobs();
    setLoading(false);
  }, [setToggle, setLoading, job.id, toggle]);
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
              {loading ? (
                <div>
                  <Spinner color='dark' />
                </div>
              ) : (
                <ApplyButton
                  id={job.id}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default JobCard;
