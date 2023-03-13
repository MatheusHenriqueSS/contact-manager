import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { FormValidation } from "./FormValidation";
import { IPersonState, StringOrNull } from "./Types";

interface IProps {
    defaultState: IPersonState
}

const PersonalDetails: React.FC<IProps> = ({defaultState}) =>  {
    const [form, setForm] = useState(defaultState);
    const [canSave, setCanSave] = useState<boolean>(false);

    const updateBinding = (fieldName: string, value: StringOrNull) => {
        setForm(
            {   
                ...form,
                [fieldName]: value
            }
        )
        console.log("postcode", form.Postcode);
    }

    const userCanSave = (hasErrors: boolean) => {
        setCanSave(hasErrors);
    }

    return (
        <Row>
            <Col lg="8">
                <Row>
                    <Col><h4 className="mb-3">Personal details</h4></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="firstName">First name</label></Col>
                    <Col><label htmlFor="lastName">Last name</label></Col>
                </Row>
                <Row>
                    <Col>
                        <input type="text" id="firstName" className="form-control" placeholder="First name" value={form.FirstName} onChange={((e) => updateBinding('FirstName', e.target.value))}></input>
                    </Col>
                    <Col>
                        <input type="text" id="lastName" className="form-control" placeholder="Last name" value={form.LastName} onChange={((e) => updateBinding('LastName', e.target.value))}></input>
                    </Col>
                </Row>
                <Row>
                    <Col><label htmlFor="addr1">Address Line 1</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="addr1" className="form-control" placeholder="Address Line 1" value={form.Address1} onChange={(e) => updateBinding('Address1', e.target.value)}/></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="addr1">Address Line 2</label></Col>
                </Row>
                <Row>
                    <Col><input type="text" id="addr2" className="form-control" placeholder="Address Line 2" value={form.Address2!} onChange={(e) => updateBinding('Address2', e.target.value)}/></Col>
                </Row>
                <Row>
                    <Col lg="3"><label htmlFor="postcode">Postal/Zipcode</label></Col>
                    <Col lg="4"><label htmlFor="phoneNumber">Phone number</label></Col>
                </Row>
                <Row>
                    <Col lg="3"><input type="text" id="postcode" className="form-control" value={form.Postcode} onChange={(e) => updateBinding('Postcode', e.target.value)}/></Col>
                    <Col lg="4"><input type="text" id="phoneNumber" className="form-control" value={form.PhoneNumber} onChange={(e) => updateBinding('PhoneNumber', e.target.value)} /></Col>
                </Row>
                <Row>
                    <Col><label htmlFor="dateOfBirth">Date of birth</label></Col>
                </Row>
                <Row>
                    <Col><input type="date" id="dateOfBirth" value={form.DateOfBirth!} onChange={(e) => updateBinding('DateOfBirth', e.target.value)}/></Col>
                </Row>
                <Row>
                    <Col>
                        <Col>
                            <Row>
                                <Col lg="6"><Button size="lg" color="success">Load</Button></Col>
                                <Col lg="6"><Button size="lg" color="info">New Person</Button></Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
                <Row><FormValidation CurrentState={form} CanSave={userCanSave}/></Row>
            </Col>
        </Row>
    )
}


export default PersonalDetails;