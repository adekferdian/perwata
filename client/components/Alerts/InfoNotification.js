import React from "react";
import {
    TabContent,
    TabPane,
    Button,
    Input,
    Label,
    CustomInput,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
  } from "reactstrap";
  

export default function InfoNotification(props) {

    return (
        <Modal
            centered
            isOpen={props.isOpen}
            // toggle={resetNew}
            contentClassName="border-radius-20"
        >
            <ModalHeader className="bg-info" >{props.title}</ModalHeader>
            <ModalBody>
            <Form >
                <FormGroup className="mb-3">
                  {props.description}
                </FormGroup>
                <div className="d-flex justify-content-center w-100">
                <div className="mx-2"></div>
                <Button
                    className="button button-secondary button-large bg-info"
                    onClick={() => props.isCancel()}
                    color="custom"
                    type="submit"
                >
                    Ok
                </Button>
                </div>
            </Form>
            </ModalBody>
        </Modal>
    )
};