import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../service/fetchData";
import Loader from "../loader/Loader";
import TableBody from "./TableBody";
import { Registry } from "./interface";
import "./Table.css";

function TableComponent() {
  const [data, setData] = useState<Registry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(setLoading, setData);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="table-container">
        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-color-table fw-medium">ID</th>
              <th className="text-color-table fw-medium">Название файла</th>
              <th className="text-color-table fw-medium">Статус</th>
              <th className="text-color-table fw-medium">Дата загрузки</th>
              <th className="text-color-table fw-medium">
                Кол-во кредитных договоров
              </th>
              <th className="text-color-table fw-medium">
                Загружено пользователем
              </th>
              <th className="text-color-table fw-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableBody key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
      </div>
      <div className="text-body-tertiary mt-3">Всего строк: {data.length}</div>
    </>
  );
}

export default React.memo(TableComponent);
