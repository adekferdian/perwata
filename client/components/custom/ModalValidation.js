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
  

export default function ModalValidation(props) {

    return (
        <Modal
            centered
            isOpen={props.isOpen}
            // toggle={resetNew}
            contentClassName="border-radius-20"
        >
            <ModalHeader></ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup className="mb-3">
                Are you sure?
                </FormGroup>
                <div className="d-flex justify-content-center w-100">
                <Button
                    color="custom"
                    type="submit"
                    className="button button-primary button-large"
                    style={{
                    color: "white",
                    backgroundColor: "#87BEFF",
                    }}
                    onClick={(e) => props.onSubmit(e)}
                >
                    Yes
                    {/* ok */}
                </Button>
                <div className="mx-2"></div>
                <Button
                    className="button button-secondary button-large"
                    onClick={() => props.isCancel()}
                >
                    No
                </Button>
                </div>
            </Form>
            </ModalBody>
        </Modal>
    )
};