import React from 'react';
import companyIcon from './companyIcon.png';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
const CompanyCard = ({ company }) => {
  return (
    <>
      <div className='card-company'>
        <Card>
          <Link className='card-link' to={`/companies/${company.handle}`}>
            <CardBody>
              <CardTitle>{company.name}</CardTitle>
              <span>
                <CardImg src={companyIcon} />
              </span>

              <CardText>{company.description}</CardText>
            </CardBody>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default CompanyCard;
