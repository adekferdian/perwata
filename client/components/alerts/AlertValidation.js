import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
  } from "reactstrap";
import { User } from "react-feather";
import InputPasswordToggle from "../../src/@core/components/input-password-toggle";
  

export default function AlertValidation(props) {

    return (
        <Modal
            centered
            isOpen={props.isOpen}
            // toggle={resetNew}
            contentClassName="border-radius-20"
        >
            <ModalHeader>
                Info
            </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup className="mb-3">
                Yakin Ingin Menambahkan Anggota
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
                    onClick={(e) => {
                        e.preventDefault();
                        props.onSubmit()
                    }}
                >
                    Ya
                </Button>
                <div className="mx-2"></div>
                <Button
                    className="button button-secondary button-large"
                    onClick={() => props.isCancel()}
                >
                    Batal
                </Button>
                </div>
            </Form>
            </ModalBody>
        </Modal>
    )
};