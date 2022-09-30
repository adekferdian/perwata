import axios from "axios";
import React, {Fragment, useState, useReducer} from "react";
import VerticalLayout from "../../src/@core/layouts/VerticalLayout";
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
import Card from "reactstrap/lib/Card";
import { Row, Col } from "reactstrap";
import { Plus } from "react-feather";
import ReactPaginate from "react-paginate";
import CollapsibleRow from "../../components/anggota/CollapsibleRow";
import ModalValidation from "../../components/alerts/ModalValidation";
import { useRouter } from 'next/router';

const Anggota = ({

}) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const router = useRouter();
    const [dataTable, setDataTable] = useState([]);
    const [listYear, setListYear] = useState([]);
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear());
    const [lengthData, setLengthData] = useState(null);
    const [totalPage, setTotalPage] = useState(null);
    const [currentLength, setCurrentLength] = useState(1);
    const [flagFilter, setFlagFilter] = useState(false);
    const [countPagination, setCountPagination] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [showLimit, setShowLimit] = useState(10);
    const [isLogin, setIslogin] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [superAdmin, setSuperAdmin] = useState(true);
    const [kampung, setKampung] = useState("");
    const getData = async() => {
        const res = await axios({
            method: "GET",
            url: `https://frozen-citadel-29769.herokuapp.com/users?page=0&size=${showLimit}`,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            responseType: "json",
        })
        if (res.status === 200) {
            setDataTable(res.data.rows);
            console.log(dataTable);
            setTotalPage(res.data.count);
            setLengthData(res.data.count);
            if (res.data.rows == false) {
            setCurrentLength(0);
            }
            if (showLimit - res.data.count > 0) {
            setCountPagination(res.data.count);
            } else {
            setCountPagination(null);
            }
        }
    };

    const handleSearch = async(e) => {
        if (kampung !== "") {
            const res = await axios({
                method: "GET",
                url: `https://frozen-citadel-29769.herokuapp.com/users?page=0&size=${showLimit}&kampung=${kampung}&searchValue=${e.target.value}`,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                responseType: "json",
            })
            if (res.status === 200) {
                setDataTable(res.data.rows);
                console.log(dataTable);
                setTotalPage(res.data.count);
                setLengthData(res.data.count);
                if (res.data.rows == false) {
                setCurrentLength(0);
                }
                if (showLimit - res.data.count > 0) {
                setCountPagination(res.data.count);
                } else {
                setCountPagination(null);
                }
            }
        } else {
            const res = await axios({
                method: "GET",
                url: `https://frozen-citadel-29769.herokuapp.com/users?page=0&size=${showLimit}&searchValue=${e.target.value}`,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                responseType: "json",
            })
            if (res.status === 200) {
                setDataTable(res.data.rows);
                console.log(dataTable);
                setTotalPage(res.data.count);
                setLengthData(res.data.count);
                if (res.data.rows == false) {
                setCurrentLength(0);
                }
                if (showLimit - res.data.count > 0) {
                setCountPagination(res.data.count);
                } else {
                setCountPagination(null);
                }
            }
        }
    };

    const handleFilterKampung = async(e) => {
        const res = await axios({
            method: "GET",
            url: `https://frozen-citadel-29769.herokuapp.com/users?page=0&size=${showLimit}&kampung=${e.target.value}`,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            responseType: "json",
        })
        if (res.status === 200) {
            setDataTable(res.data.rows);
            console.log(dataTable);
            setTotalPage(res.data.count);
            setLengthData(res.data.count);
            if (res.data.rows == false) {
            setCurrentLength(0);
            }
            if (showLimit - res.data.count > 0) {
            setCountPagination(res.data.count);
            } else {
            setCountPagination(null);
            }
        }
        setKampung(e.target.value);
        forceUpdate();
    };

    React.useEffect(() => {
        getData()
    }, []);

    const listKampuang = [
        {
            name: "Semua",
            value: ""
        },
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
    return (
        <VerticalLayout>
            {
                isLogin ?
                <Fragment>
                    <TabContent className="py-50" activeTab={true}>
                        <Card className="card-table2">
                            {
                                superAdmin ?
                                    <Card className="pt-0" style={{ border: "1px solid #d8d6de" }}>
                                        <Row className="mx-0">
                                            <Col
                                                className="d-flex align-items-center justify-content-start mt-1"
                                                xl="6"
                                                md="4"
                                                sm="12"
                                            >
                                                <Button
                                                color="custom"
                                                className="button-table2 mr-2 mb-1"
                                                style={{
                                                    width: "auto",
                                                    color: "white",
                                                    backgroundColor: "#87BEFF",
                                                }}
                                                onClick={() => {
                                                    router.push({
                                                        pathname: "/anggota/Add"
                                                    })
                                                }}
                                                >
                                                <Plus size={14} />
                                                    <span className="align-middle ml-25">Tambah Anggota</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                    : null
                            }
                            <Card className="pt-2" style={{ border: "1px solid #d8d6de" }}>
                                <Row className="mx-0 mb-2">
                                    <Col
                                        className="d-flex align-items-center justify-content-start mt-1"
                                        xl="8"
                                        md="4"
                                        sm="12"
                                    >
                                        <Label className="mr-1" for="search-input-1">
                                        Tampilkan
                                        </Label>
                                        <CustomInput
                                        id="pages"
                                        type="select"
                                        className="custominput-table2"
                                        // onChange={(e) => handleSort(e)}
                                        >
                                        <option
                                            selected
                                            value="10"
                                            // onClick={() => setShowLimit(10)}
                                        >
                                            10
                                        </option>
                                        <option
                                            value="50"
                                            // onClick={() => setShowLimit(50)}
                                        >
                                            50
                                        </option>
                                        <option
                                            value="100"
                                            // onClick={() => setShowLimit(100)}
                                        >
                                            100
                                        </option>
                                        </CustomInput>
                                    </Col>
                                    <Col
                                        sm="12"
                                        md="12"
                                        lg="12"
                                        xl="4"
                                        className="d-flex align-items-center justify-content-start mt-1"
                                    >
                                        <Input
                                        className="search-table2 mr-2"
                                        type="text"
                                        name="search"
                                        id="search-invoice"
                                        placeholder="Pencarian"
                                        onKeyPress={(e) => {
                                            
                                        }}
                                        onChange={(e) => {
                                            handleSearch(e);
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mx-0 mb-2">
                                    <Col
                                        className="d-flex align-items-center justify-content-start mt-1"
                                        xl="8"
                                        md="4"
                                        sm="12"
                                    >
                                        <Label className="mr-1" for="search-input-1">
                                            Kampung
                                        </Label>
                                        <Input
                                            id="pages"
                                            type="select"
                                            className="custominput-table2"
                                            style={{minWidth: 200}}
                                            onChange={(e) => handleFilterKampung(e)}
                                            value={kampung}
                                        >
                                            {
                                                listKampuang.map((el, index) => (
                                                    <option key={index} value={el.value}>{el.name}</option>
                                                ))
                                            }
                                        </Input>
                                    </Col>
                                </Row>
                                <CollapsibleRow data={dataTable} superAdmin={superAdmin} />
                                <Row className="mx-0 ml-2 mb-1">
                                    <Col
                                    className="d-flex align-items-center justify-content-start mt-1"
                                    md="9"
                                    sm="12"
                                    >
                                    <p className="mb-0" style={{ color: "#b9b9c3" }}>
                                    Menampilkan {currentLength} Sampai{" "}
                                    {countPagination !== null
                                        ? countPagination
                                        : showLimit}{" "}
                                    dari {lengthData} Total
                                    </p>
                                    </Col>
                                    <Col
                                        className="d-flex align-items-center justify-content-start mt-1"
                                        md="3"
                                        sm="12"
                                    >
                                        <ReactPaginate
                                        pageCount={1}
                                        nextLabel={""}
                                        breakLabel={"..."}
                                        activeClassName={"active"}
                                        pageClassName={"page-item"}
                                        previousLabel={""}
                                        nextLinkClassName={"page-link"}
                                        nextClassName={"page-item next-item"}
                                        previousClassName={"page-item prev-item"}
                                        previousLinkClassName={"page-link"}
                                        pageLinkClassName={"page-link"}
                                        breakClassName="page-item"
                                        breakLinkClassName="page-link"
                                        containerClassName={"pagination react-paginate m-0"}
                                        onPageChange={(event) => handlePageChange(event)}
                                        forcePage={pageNumber - 1}
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </TabContent>
                </Fragment>
                :
                <ModalValidation isOpen={!isLogin} onSubmit={(bool) => setIslogin(bool)}
                isCancel={() => {
                    router.back()
                }}
                setSuperAdmin={(bool) => setSuperAdmin(bool)}
                />
            }
        </VerticalLayout>
    )
};

export default Anggota;