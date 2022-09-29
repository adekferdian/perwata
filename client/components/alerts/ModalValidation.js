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
  

export default function ModalValidation(props) {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorLogin, setErrorLogin] = React.useState(false);

    const onLogin = () => {
        if (userName === "admin" && password === "perwata100") {
            props.onSubmit(true)
        } else {
            setErrorLogin(true);
        };
    };

    return (
        <Modal
            centered
            isOpen={props.isOpen}
            // toggle={resetNew}
            contentClassName="border-radius-20"
        >
            <ModalHeader>
                Masuk
            </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup className="mb-3">
                Silahkan Masuk Dahulu untuk Melanjutkan
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <User size={18} className="text-muted" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        id="login-username"
                        placeholder="nama atau email"
                        autoFocus
                        value={userName}
                        onChange={(e) => {
                        setUserName(e.target.value)
                        setErrorLogin(false)
                        }}
                    />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputPasswordToggle
                    prependLogo
                    className="mt-2"
                    id="login-password"
                    placeholder="kata sandi"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setErrorLogin(false)
                    }}
                    />
                </FormGroup>
                {
                    errorLogin ?
                    <p style={{color: "red"}} >salah emaail atau kata sandi!</p>
                    : null
                }
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
                        onLogin();
                    }}
                >
                    Masuk
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