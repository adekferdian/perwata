import axios from "axios";
import React, {Fragment, useState} from "react";
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
    const [isLogin, setIslogin] = useState(false);
    const getData = async() => {
        const res = await axios({
            method: "GET",
            url: "https://frozen-citadel-29769.herokuapp.com/users?page=0&size=10",
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
        const res = await axios({
            method: "GET",
            url: `https://frozen-citadel-29769.herokuapp.com/users?page=0&size=10&searchValue=${e.target.value}`,
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

    React.useEffect(() => {
        getData()
    }, []);
    return (
        <VerticalLayout>
            {
                isLogin ?
                <Fragment>
                    <TabContent className="py-50" activeTab={true}>
                        <Card className="card-table2">
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
                                    // onClick={showNew}
                                    >
                                    <Plus size={14} />
                                    <span className="align-middle ml-25">Tambah Anggota</span>
                                    </Button>
                                    <Modal
                                    centered
                                    // isOpen={newKPIModal}
                                    // toggle={resetNew}
                                    contentClassName="border-radius-20"
                                    >
                                    <ModalBody>
                                        <Form 
                                            // onSubmit={addNew}
                                        >
                                        <FormGroup className="mb-3">
                                            <Label className="mr-1" for="search-input-1">
                                            Year
                                            </Label>
                                            <CustomInput
                                            id="yearValue"
                                            type="select"
                                            style={{ width: "auto" }}
                                            defaultValue={new Date().getFullYear()}
                                            >
                                            <option value={new Date().getFullYear() + 1}>
                                                {new Date().getFullYear() + 1}
                                            </option>
                                            <option value={new Date().getFullYear()}>
                                                {new Date().getFullYear()}
                                            </option>
                                            <option value={new Date().getFullYear() - 1}>
                                                {new Date().getFullYear() - 1}
                                            </option>
                                            </CustomInput>
                                            <Label className="mr-1 mt-1" for="search-input-1">
                                            KPI Type
                                            </Label>
                                            <Input
                                            id="acceptNote"
                                            placeholder="Enter KPI Type"
                                            // onChange={(e) => setKPIType(e.target.value)}
                                            defaultValue=""
                                            required
                                            />
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
                                            >
                                            Submit
                                            </Button>
                                            <div className="mx-2"></div>
                                            <Button
                                            className="button button-secondary button-large"
                                            // onClick={resetNew}
                                            >
                                            Cancel
                                            </Button>
                                        </div>
                                        </Form>
                                    </ModalBody>
                                    </Modal>
                                </Col>
                                </Row>
                            </Card>
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
                                    {/* <option value="25" onClick={() => setShowLimit(25)}>
                                        25
                                    </option>
                                    <option value="50" onClick={() => setShowLimit(50)}>
                                        50
                                    </option> */}
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
                                        if (e.key === "Enter") {
                                        // searchFunction(e.target.value, altPage);
                                        // setTempName(e.target.value);
                                        }
                                    }}
                                    onChange={(e) => {
                                        handleSearch(e);
                                    }}
                                    />
                                </Col>
                                </Row>
                                <CollapsibleRow data={dataTable} />
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
                />
            }
        </VerticalLayout>
    )
};

export default Anggota;