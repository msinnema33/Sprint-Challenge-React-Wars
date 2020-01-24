// adding pagination and trying to get more characters

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const MoreChar = (props) => {
  return (
    <Pagination aria-label="Page navigation Get More Characters!">
      <PaginationItem disabled>
        <PaginationLink first href="https://swapi.co/api/people/" />
      </PaginationItem>
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="https://swapi.co/api/people/">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=2">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=3">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=4">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=5">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=6">
          6
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=7">
          7
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=8">
          8
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=9">
          9
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="https://swapi.co/api/people/?page=2" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/?page=9" />
      </PaginationItem>
    </Pagination>
  );
}

export default MoreChar;



// const SWCard = (char) => {
//     return (
//       <Col xs="6" md="4" xl="3">
//         <Card body outline color="success">
//           <CardHeader>Name: {char.name} </CardHeader>
//           <CardBody>
//             <CardText>Height: {char.height} centimeters</CardText>
//             <CardText>Weight: {char.mass} kilograms</CardText>
//             <CardText>Hair Color: {char.hair_color}</CardText>
//             <CardText>Eye Color: {char.eye_color}</CardText>
//             <CardText>Born: {char.birth_year}</CardText>
//           </CardBody>
//         </Card>
//       </Col>
//     );
//   };
//   export default SWCard;