import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import JobCard from './JobCard';
import './Company.css';

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    async function getCompany(handle) {
      const companyObj = await JoblyAPI.getCompany(handle);

      setCompany((c) => ({
        ...c,
        ...companyObj,
      }));
    }
    getCompany(handle);
  }, []);

  const { name, description, jobs } = company;

  return (
    <>
      <div className='company-page col-md-8 offset-md-2'>
        <header className='company-page-header'>
          <h5>{name}</h5>
          <p>{description}</p>
        </header>
        {jobs ? (
          <div>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div>
            <p>No jobs found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Company;
