import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { query } from "./handler";

const Wrapper = styled.div`
  border-radius: 3px;
  width: 300px;
  height: 300px;
  margin: 0 1em;
  background-color: black;
  border-radius: 10px;
  padding: 0.25em 1em;
  margin-top: 15%;
  margin-left: 30%;
`;

const Tags = styled.p`
  color: #000;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: white;
  width: 50px;
  height: 20px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Input = styled.input`
  background-color: red;
  padding: 3px;
`;
export default props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TakeQuery();
  }, []);

  const TakeQuery = () => {
    query().then(response => {
      let jParse = JSON.parse(response);
      let item = [];
      jParse = jParse.data;

      item = {
        name: jParse.firstName,
        lastName: jParse.lastName
      };

      setData(item);
    });
  };

  return (
    <Wrapper>
      <Tags>Name:{data.name}</Tags>
      <Tags>Last name: {data.lastName}</Tags>
      <Input />
      <Button>Post</Button>
    </Wrapper>
  );
};
