import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ data, type }) => {
  return (
    <>
      <div className={`alert alert-${type}`}>
        <ul>
          {[...data].map((d, i) => (
            <li key={i}>{d.replace('instance.', '')}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CustomAlert;
