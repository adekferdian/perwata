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
    Input,
    Row,
    Col
} from "reactstrap";
import Image from "next/image";
import Trash_Ic from "../../public/images/icons/trash-2.png";
import axios from "axios";

export default function ModalEdit(props) {
    const data = props.data;
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorLogin, setErrorLogin] = React.useState(false);
    const [newChild, setNewChild] = React.useState([]);
    const [allowOne, setAllowOne] = React.useState(false);

    const onLogin = () => {
        if (userName === "admin" && password === "perwata100") {
            props.onSubmit(true);
        } else if (userName === "super admin" && password === "perwata100") {
            props.onSubmit(true);
            props.setSuperAdmin(true);
        } else {
            setErrorLogin(true);
        };
    };

    const addChild = () => {
        newChild.push({
            name: "",
            dateOfBirth: "",
            gender: "",
            UserId: data.id
        });
        setAllowOne(true);
        forceUpdate();
    };

    const onSubmit = async() => {
        if (allowOne) {
            if (newChild[0].name == "" || newChild.gender == "") {
    
            } else {
                const res = await axios({
                    method: "POST",
                    url: `https://frozen-citadel-29769.herokuapp.com/children`,
                    data: newChild[0]
                })
                console.log(res);
                if (res.status === 201) {
                    props.isSuccess(false)
                }
            }
        }
    };

    return (
        <Modal
            centered
            isOpen={props.isOpen}
            // toggle={resetNew}
            contentClassName="border-radius-20"
        >
            <ModalHeader>
                Info Anggota
            </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup className="mb-3">
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Nama</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.name}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Tanggal Lahir</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.dateOfBirth}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Domisili</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.domisili}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Nama Ibu</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.motherName}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Nama Ayah</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.fatherName}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Kampung</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.hometown}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Nama Istri</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.partnerName}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>Asal Istri</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.partnerFrom}</p>
                    </Row>
                    <Row className="mx-0 mb-2">
                        <p style={{minWidth: 120}}>No Hp</p>
                        <p style={{minWidth: 100, paddingLeft: 5}}>: {data.phone}</p>
                    </Row>
                    <Row className="mx-0">
                        <p style={{minWidth: 120}}>Anak</p>
                        <div>
                            :
                            {
                                data.Children != false && data.Children.map((el, idx) => (
                                    <p key={idx}><span style={{width: 15}}>{idx+1}.</span><span style={{paddingLeft: 5}}>{el.name}</span></p>
                                ))
                            }
                        </div>
                    </Row>
                    {
                        !allowOne ?
                            <div className="mx-0" style={{border: "1px solid white", background: "#87BEFF", borderRadius: 5, width: 170}}>
                                <p style={{textAlignLast: "center", paddingTop: 10}} onClick={() => addChild()} >Tambah Data Anak +</p>
                            </div>
                            :null
                    }
                    <div className="mx-0 mt-1">
                        {
                            newChild != false && newChild.map((el, idx) => (
                                <div key={idx} className="border mb-1 d-flex">
                                    <div style={{width: "80%", padding: 10}}>
                                        <div style={{display: 'flex', justifyContent: "space-between", width: "90%"}}>
                                            <p>Nama Anak</p>
                                        </div>
                                        <Input
                                            type="text"
                                            value={el.name}
                                            onChange={(e) => {
                                                el.name = e.target.value;
                                                forceUpdate();
                                            }}
                                        />
                                        <div style={{display: 'flex', justifyContent: "space-between", width: "90%", marginTop: 10}}>
                                            <p>Jenis Kelamin</p>
                                        </div>
                                        <Input
                                            type="select"
                                            value={el.gender}
                                            onChange={(e) => {
                                                el.gender = e.target.value;
                                                forceUpdate();
                                            }}
                                            defaultValue="Pria"
                                        >
                                            <option disabled value="">Pilih</option>
                                            <option selected value="Pria">Pria</option>
                                            <option value="Wanita">Wanita</option>
                                        </Input>
                                    </div>
                                    <div style={{width: '20%', textAlignLast: "center", marginTop: 20, alignSelf: "center"}}>
                                        <Image src={Trash_Ic} width={30} height={30} onClick={() => {
                                            newChild.splice(idx, 1);
                                            setAllowOne(false);
                                            forceUpdate();
                                        }} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </FormGroup>
                <div className="d-flex justify-content-center w-100">
                    {
                        allowOne ?
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
                                onSubmit();
                            }}
                        >
                            Edit
                        </Button>
                        :null
                    }
                <div className="mx-2"></div>
                <Button
                    className="button button-secondary button-large"
                    onClick={() => {
                        props.isCancel();
                        setAllowOne(false);
                    }}
                >
                    Batal
                </Button>
                </div>
            </Form>
            </ModalBody>
        </Modal>
    )
};