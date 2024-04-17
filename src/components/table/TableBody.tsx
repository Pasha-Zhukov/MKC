import React from "react";
import Delete from "../../assets/importFiles/delete.svg";
import Download from "../../assets/importFiles/download.svg";
import {
  deleteRegistry,
  fetchProcessedRegistry,
} from "../../service/fetchData";
import { formatDate } from "../../service/formatDate";
import { Registry } from "./interface";
import "./Table.css";

function TableBody({ item }: { item: Registry }) {
  console.log(item);

  return (
    <tr>
      <td className="text-color-table fw-normal">{item.id}</td>
      <td className="name-file">{item.file.name}</td>
      <td style={{ color: item.status.color }}>{item.status.name}</td>
      <td className="text-color-table fw-normal">
        {formatDate(item.created_at)}
      </td>
      <td className="text-color-table fw-normal">{item.credits_count}</td>
      <td className="text-color-table fw-normal">{item.created_by.username}</td>
      <td>
        <div className="d-flex gap-2 ">
          <button
            onClick={() => fetchProcessedRegistry(item.id)}
            className="button-table"
          >
            <img src={Download} alt="Download" />
          </button>
          <button
            onClick={() => deleteRegistry(item.id)}
            className="button-table"
          >
            <img src={Delete} alt="Delete" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default React.memo(TableBody);
