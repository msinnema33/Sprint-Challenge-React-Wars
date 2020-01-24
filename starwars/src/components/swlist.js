import React, { useEffect, useState } from "react";
import axios from "axios";
import SWCard from "./SWCard";
import { Container, Row } from "reactstrap";

export default function SWList() {
    //https://swapi.co/api/people/
    const [chars, setChars] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
         const chars = response.data.results;
          console.log(chars);
          setChars(chars);
        })
        .catch(error => {
          console.log("Sorry no data", error);
        });
    }, []);
  
    return (
      <Container>
        <Row>
        {chars.map(char => {
            return <SWCard key={char.index}
            name = {char.name} 
            height = {char.height}
            weight = {char.mass}
            hair_color = {char.hair_color}
            eye_color = {char.eye_color}
            birth_year = {char.birth_year}
          />; 
        })}
       </Row>
      </Container>
    );
  }
  