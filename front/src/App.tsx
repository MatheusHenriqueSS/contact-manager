import React from 'react';
import { Container } from 'reactstrap';
import { IPersonState } from './Types';
import PersonalDetails from './PersonalDetails';

function App() {
  const defaultPerson: IPersonState = {
      Address1: "",
      Address2: null,
      County: "",
      DateOfBirth: new Date().toISOString().substring(0, 10),
      FirstName: "",
      LastName: "",
      PersonId: "",
      PhoneNumber: "",
      Postcode: "",
      Town: ""

  }
  return (
    <Container>
      <PersonalDetails defaultState={defaultPerson}></PersonalDetails>
    </Container>
    
  );
}

export default App;
