import React from "react";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from "reactstrap";


const SWCard = (char) => {
    return (
      <Col xs="6" md="4" xl="3">
        <Card body outline color="success">
          <CardHeader>Name: {char.name} </CardHeader>
          <CardBody>
            <CardText>Height: {char.height} centimeters</CardText>
            <CardText>Weight: {char.mass} kilograms</CardText>
            <CardText>Hair Color: {char.hair_color}</CardText>
            <CardText>Eye Color: {char.eye_color}</CardText>
            <CardText>Born: {char.birth_year}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };
  export default SWCard;