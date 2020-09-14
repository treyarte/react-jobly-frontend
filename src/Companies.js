import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import JoblyAPI from './JoblyAPI';
import './Companies.css';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const handleSetCompanies = async (searchParams) => {
    const companyArr = await JoblyAPI.getCompanies(searchParams);
    console.log(companyArr);
    setCompanies(companyArr);
  };

  useEffect(() => {
    async function getCompanies() {
      const companiesArr = await JoblyAPI.getCompanies();
      setCompanies(companiesArr);
    }

    getCompanies();
  }, []);

  return (
    <>
      <div className='companies col-md-8 offset-md-2'>
        <div>
          <SearchBar handleData={handleSetCompanies} />
        </div>
        {companies.length !== 0 ? (
          <div>
            {companies.map((company) => (
              <CompanyCard key={company.handle} company={company} />
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

export default Companies;
