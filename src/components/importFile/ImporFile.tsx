import { Form } from "react-bootstrap";
import "./ImportFile.css";

export default function ImportFile() {
  return (
    <div className="p-4 pt-4">
      <div className="fs-3 fw-bolder ">Импорт файла</div>
      <div className="d-flex justify-content-between gap-3 mt-4">
        <div className="input-name-files border-0 w-100">
          <input
            className="background-import-files-color border-0 "
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <label htmlFor="file-upload" className="custom-file-upload">
            Обзор
          </label>
          <input id="file-upload" type="file" className="d-none" />
        </div>
      </div>
      <Form.Check
        className="m-0 mt-3 custom-checkbox"
        type="checkbox"
        label="Проверить ИНН"
      />
      <Form.Check
        className="m-0 mt-2 custom-checkbox"
        type="checkbox"
        label="Обработан"
      />
      <div className="d-flex justify-content-end gap-3 mt-5">
        <button className="cancel-button">Отмена</button>
        <button className="border-0 text-white main-background-color rounded-3 ps-3 pe-3 fw-medium">
          Импортировать
        </button>
      </div>
    </div>
  );
}
