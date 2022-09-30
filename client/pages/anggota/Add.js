import React from "react";
import VerticalLayout from "../../src/@core/layouts/VerticalLayout";
import ReactResizeDetector from "react-resize-detector";
import {
    Input,
    Button
} from "reactstrap";
import AlertValidation from "../../components/alerts/AlertValidation";
import axios from "axios";

const Add = ({

}) => {
    const [name, setName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [domisili, setDomisili] = React.useState("");
    const [mothername, setMotherName] = React.useState("");
    const [fatherName, setFatherName] = React.useState("");
    const [hometown, setHometown] = React.useState("");
    const [partnerName, setPartnerName] = React.useState("");
    const [partnerFrom, setPartnerFrom] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [visibleAlert, setVisibleAlert] = React.useState(false);
    const listKampuang = [
        {
            name: "Sawah tangguang",
            value: "Sawah tangguang",
        },
        {
            name: "Polak loweh ",
            value: "Polak loweh ",
        },
        {
            name: "Sumur Ampaleh",
            value: "Sumur Ampaleh",
        },
        {
            name: "Meltas",
            value: "Meltas",
        },
        {
            name: "Mandailiang Ate",
            value: "Mandailiang Ate",
        },
        {
            name: "Melteng",
            value: "Melteng",
        },
        {
            name: "Kutianyir",
            value: "Kutianyir",
        },
        {
            name: "Melbar",
            value: "Melbar",
        },
        {
            name: "Balai Batu",
            value: "Balai Batu",
        },
        {
            name: "Tobek",
            value: "Tobek",
        },
        {
            name: "Topi Selo",
            value: "Topi Selo",
        },
        {
            name: "Tobiang",
            value: "Tobiang",
        },
        {
            name: "Pono",
            value: "Pono",
        },
        {
            name: "Piliang",
            value: "Piliang",
        },
        {
            name: "Palagan",
            value: "Palagan",
        },
        {
            name: "Balai tabuah",
            value: "Balai tabuah",
        },
        {
            name: "Subarang lobuah",
            value: "Subarang lobuah",
        },
        {
            name: "Iku Tanjuang",
            value: "Iku Tanjuang",
        },
        {
            name: "Kampuang Godang",
            value: "Kampuang Godang",
        },
        {
            name: "Batang situak",
            value: "Batang situak",
        },
        {
            name: "Aur kuniang",
            value: "Aur kuniang",
        },
        {
            name: "Lugha",
            value: "Lugha",
        },
        {
            name: "Kampung Tongah",
            value: "Kampung Tongah",
        },
        {
            name: "Rumah Baghu",
            value: "Rumah Baghu",
        },
        {
            name: "Salo",
            value: "Salo",
        },
        {
            name: "Kampuang Panjang",
            value: "Kampuang Panjang",
        },
        {
            name: "Bakubang",
            value: "Bakubang",
        },
        {
            name: "Mandailiang subarang",
            value: "Mandailiang subarang",
        },
        {
            name: "Mandailiang Bawuah",
            value: "Mandailiang Bawuah",
        },
        {
            name: "Basukun",
            value: "Basukun",
        },
        {
            name: "Batunjam",
            value: "Batunjam",
        },
        {
            name: "Kampuang Baru",
            value: "Kampuang Baru",
        },
        {
            name: "Pandan",
            value: "Pandan",
        },
        {
            name: "Polak soko",
            value: "Polak soko",
        },
    ];

    const onsubmit = async() => {
        if (visibleAlert === false) {
            setVisibleAlert(true);
        } else {
            if (!name || !dateOfBirth || !domisili || !mothername || !fatherName || !hometown || !partnerName || !partnerFrom || !phone) {

            } else {
                console.log("aa");
                const body = {
                    name,
                    dateOfBirth,
                    domisili,
                    mothername,
                    fatherName,
                    hometown,
                    partnerName,
                    partnerFrom,
                    phone,
                    childs: "",
                    picture: ""
                };
                const res = await axios({
                    method: "POST",
                    url: `https://frozen-citadel-29769.herokuapp.com/users`,
                    data: body
                });
                console.log(res);
            }
        }
    };

    return (
        <VerticalLayout>
            {
                visibleAlert ?
                <AlertValidation
                    onSubmit={() => onsubmit()}
                    isOpen={visibleAlert}
                    isCancel={() => setVisibleAlert(false)}
                />
                :
                null
            }
            <h1>Tambah Anggota</h1>
            <ReactResizeDetector>
                    {({ width }) => (
                        <div
                        className={`${
                            width >= 500 ? "d-flex" : "d-column"
                        }`}
                        >
                            {
                                width < 500 ?
                                <div style={{marginTop: 50}}>
                                    <div style={{marginTop: 10}}>
                                        <h5>Nama</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Tanggal Lahir</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={dateOfBirth}
                                            onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Domisili</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={domisili}
                                            onChange={(e) => setDomisili(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Nama Ibu</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={mothername}
                                            onChange={(e) => setMotherName(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Nama Ayah</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={fatherName}
                                            onChange={(e) => setFatherName(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Kampung</h5>
                                        <Input
                                            type="select"
                                            value={hometown}
                                            onChange={(e) => setHometown(e.target.value)}
                                            id="hometown"
                                        >
                                            {
                                                listKampuang.map((el, idx) => (
                                                    <option key={idx} value={el.value} >{el.name}</option>
                                                ))
                                            }
                                        </Input>
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Nama Istri</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={partnerName}
                                            onChange={(e) => setPartnerName(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Asal Istri</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={partnerFrom}
                                            onChange={(e) => setPartnerFrom(e.target.value)}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <h5>Nomor HP</h5>
                                        <Input
                                            type="text"
                                            placeholder="Nama"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center w-100 mt-2 mb-1">
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
                                                onsubmit()
                                            }}
                                        >
                                            Tambah
                                        </Button>
                                        <div className="mx-2"></div>
                                        <Button
                                            className="button button-secondary button-large"
                                            // onClick={() => props.isCancel()}
                                        >
                                            Batal
                                        </Button>
                                    </div>
                                </div>
                                :
                                <div>
                                </div>
                            }
                        </div>
                    )}
            </ReactResizeDetector>
        </VerticalLayout>
    );
};

export default Add;