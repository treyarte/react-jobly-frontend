import React from 'react';
import JoblyAPI from './JoblyAPI';
import { Button } from 'reactstrap';

const ApplyButton = ({ id, toggle, setToggle }) => {
  const applyToJob = async () => {
    const msg = await JoblyAPI.applyToJob(id);
    console.log(msg);
    setToggle(!toggle);
  };
  return (
    <>
      <Button disabled={toggle} className='btn btn-danger' onClick={applyToJob}>
        Apply
      </Button>
    </>
  );
};

export default ApplyButton;
