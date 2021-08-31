import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Input,
  Table,
  Container,
  Form,
  Header,
  Button,
} from "semantic-ui-react";

import dataJson from "./data.json";

function App() {
  const [name, setName] = useState("");
  const [filterData, setFilterData] = useState([]);

  const filterHandler = async (e) => {
    e.preventDefault();
    const filter = dataJson.slice(1).filter((i) => i.C.includes(name));

    setFilterData(filter);
    // console.log(dataJson.slice(1, 2));
  };

  return (
    <Container className="container">
      <Header as="h2">
        <br />
        <br />
        React Google Sheet
      </Header>

      <Form onSubmit={filterHandler}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%" }}
        />
        <Button type="submit" style={{ marginTop: "5px" }}>
          Submit
        </Button>
      </Form>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Hobby</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filterData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.A}</Table.Cell>
              <Table.Cell>{item.B}</Table.Cell>
              <Table.Cell>{item.C}</Table.Cell>
              <Table.Cell>{item.D}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default App;
