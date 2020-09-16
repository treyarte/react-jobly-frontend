import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import JobCard from './JobCard';
import JoblyAPI from './JoblyAPI';
import SearchBar from './SearchBar';

const Jobs = ({ checkLogin }) => {
  const [jobs, setJobs] = useState([]);

  const handleSetJobs = async (searchParams) => {
    const jobsArr = await JoblyAPI.getJobs(searchParams);
    setJobs(jobsArr);
  };

  useEffect(() => {
    async function getJobs() {
      const jobsArr = await JoblyAPI.getJobs();
      setJobs(jobsArr);
    }

    getJobs();
  }, []);

  if (!checkLogin()) return <Redirect to='/login' />;

  return (
    <>
      <div className='jobs col-md-8 offset-md-2'>
        <div>
          <SearchBar handleData={handleSetJobs} />
        </div>
        {jobs.length !== 0 ? (
          <div>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div>
            <p>Sorry no results found!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Jobs;
