import { useState } from "react";
import classnames from "classnames";
import { ChevronUp } from "react-feather";
import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";
import { Edit, CheckCircle, XCircle } from "react-feather";
import Edit_ic from "../../public/images/icons/edit.png";
import Image from 'next/image'
import router from "next/router";

const CollapsibleRow = ({ data, active, type, kpiType }) => {
  var defaultEditableRow = new Array(data.length).fill(true);
  const [editableRow, setEditableRow] = useState(defaultEditableRow);
  const [newKPIModal, setKPIModal] = useState(false);

  const showNew = () => setKPIModal(true);
  console.log(data);
  const resetNew = () => {
    setKPIModal(false);
    setKPIType("");
  };

  const addNew = (e) => {
    event.preventDefault();
    const KPIData = {
      topikData: {
        name: kpiType,
      },
    };
  };

  const defaultActive = () => [active];
  const [openCollapse, setOpenCollapse] = useState(defaultActive());

  const handleCollapseToggle = (id) => {
    const arr = openCollapse,
      index = arr.indexOf(id);
    if (arr.includes(id)) {
      arr.splice(index, 1);
      setOpenCollapse([...arr]);
    } else {
      if (arr.includes(id)) {
        arr.splice(index, 1);
        setOpenCollapse([...arr]);
      } else {
        arr.push(id);
        setOpenCollapse([...arr]);
      }
    }
  };

  return (
    <Table responsive className="table border-bottom">
      <thead>
        <tr
          className="d-flex align-items-center"
          style={{ backgroundColor: "#F3F2F7" }}
        >
          <td
            className="text-center font-weight-bolder"
            style={{ width: "1%", border: "none" }}
          ></td>
          <td className="text-left font-weight-bolder" style={{ minWidth: 200, border: "none",  }}>
            NAMA
          </td>
          <td className="text-left font-weight-bolder" style={{ minWidth: 200, border: "none" }}>
            KAMPUNG
          </td>
        </tr>
      </thead>
      <tbody
        className={classnames("collapse-icon", {
          "collapse-default": !type,
        })}
      >
        {data &&
          data.map((item, index) => (
            <Card
              className={classnames("app-collapse", {
                open: openCollapse.includes(index),
              })}
              key={index}
            >
              <CardHeader
                className={classnames("align-items-center p-0", {
                  collapsed: !openCollapse.includes(index),
                })}
              >
                <tr
                  className="d-flex align-items-center td-table3"
                  style={{ width: "100%", }}
                >
                  <td
                    className="text-center"
                    style={{ width: "1%", borderTop: "0px", border: "none" }}
                    onClick={() => handleCollapseToggle(index)}
                  >
                    <ChevronUp size={14} />
                  </td>
                  <td
                    className="text-left"
                    style={{ minWidth: 200,  borderTop: "0px", }}
                  >
                    {
                      item.name
                    }
                  </td>
                  <td
                    className="text-left"
                    style={{ minWidth: 200, borderTop: "0px" }}
                  >
                    {
                      item.hometown
                    }
                  </td>
                </tr>
              </CardHeader>
              <Collapse
                isOpen={openCollapse.includes(index)}
                style={{ backgroundColor: "" }}
              >
                <CardBody
                  className="m-2 pt-2 pb-2 shadow"
                  style={{ paddingLeft: "1rem" }}
                >
                  <Col><p>Tanggal Lahir : {item.dateOfBirth}</p></Col>
                  <Col><p>Domisili : {item.domisili}</p></Col>
                  <Col><p>Nama Istri : {item.partnerName}</p></Col>
                  <Col><p>Asal Istri : {item.partnerFrom}</p></Col>
                  <Col><p>Anak : <span>{item.Children !== false ? item.Children.map((el, idx) => {
                    return (
                      <p key={idx}>{idx+1}. {el.name}</p>
                    )
                  }) : null}</span></p>
                  </Col>
                </CardBody>
              </Collapse>
            </Card>
          ))}
      </tbody>
    </Table>
  );
};

export default CollapsibleRow;
