import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Col, Row } from "reactstrap";
import { IPersonState, IValidation } from "./Types";
import { AddressValidation } from "./validation/AddressValidation";
import { PersonValidation } from "./validation/PersonValidation";
import { PhoneValidation } from "./validation/PhoneNumberValidation";

interface IValidationProps {
    CurrentState: IPersonState;
    CanSave: (canSave: boolean) => void;
}

export const FormValidation: FC<IValidationProps> = (props) => {
    const [failures, setFailures] = useState<string[]>([]);
    const validation  = useMemo(() => [new PersonValidation(), new AddressValidation(), new PhoneValidation()], []);


    const validate = useCallback(() => {
        const newFailures: string[] = [];
        validation.forEach((validation) => {
            validation.Validate(props.CurrentState, newFailures);
        });

        setFailures(newFailures);   
        props.CanSave(newFailures.length === 0);
    }, [validation, props.CurrentState, props.CanSave]);

    useEffect(() => {
        validate()
        
    }, [validate]);

    return (
        <Col>{failures.map((failure) => {
            return (<Row key={failure}><Col><label>{failure}</label></Col></Row>)
        })}</Col>
    )
}  


