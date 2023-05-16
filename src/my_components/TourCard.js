import React from "react";
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

function TourCard({id , tourcard}) {
    const { img, alt, title, subtitle } = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <Link to="/tour"> 
        <Button outline color="secondary" className="float-end">
          Read more
        </Button>
        </Link>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default TourCard