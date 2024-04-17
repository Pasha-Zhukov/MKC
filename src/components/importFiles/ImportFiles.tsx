import { useState } from "react";
import { Form } from "react-bootstrap";
import Search from "../../assets/importFiles/search.svg";
import ImportFile from "../importFile/ImporFile";
import Modal from "../modal/Modal";
import TableComponent from "../table/TableComponent";
import "./ImportFiles.css";

export default function ImportFiles() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-3 ps-4 pe-0 background-import-files-color">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="main-color fs-4 fw-semibold  ">Импорт файлов</div>
        <button
          onClick={() => setModalOpen(true)}
          className="main-background-color rounded-3 p-2 ps-3 pe-3 text-white border-0 "
        >
          <span className="fs-5">+</span> Импорт
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ImportFile />
      </Modal>
      <div className="d-flex justify-content-start gap-4 align-items-center mb-5">
        <div className="input-import-files">
          <img className="mb-2 me-2" src={Search} alt="Search" />
          <input
            className="background-import-files-color border-0 "
            type="text"
            name=""
            id=""
          />
        </div>
        <Form.Select aria-label="Default select example">
          <option>Статус</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Check
          className="m-0 custom-checkbox"
          type="checkbox"
          label="Обработан"
        />{" "}
      </div>
      <TableComponent />
    </div>
  );
}
