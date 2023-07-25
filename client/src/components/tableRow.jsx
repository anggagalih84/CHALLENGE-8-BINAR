// import TrashIcon from "@/icons/trash";

import { deletePlayer } from "../services/player-services";
import { Button } from "react-bootstrap";

export default function TableRow({ data }) {
  const dropData = async (id) => {
    await deletePlayer(id);
    window.location.href = "/";
  };

  return (
    <tbody>
      <tr>
        <td>{data.id}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{data.experience}</td>
        <td>{data.lvl}</td>
        <td>
          <Button
            onClick={() => dropData()}
            variant="danger"
            style={{ marginRight: 12 }}
          >
            DELETE

          </Button>
          <Button variant="warning">
            <a href={`/edit-player/${data.id}`}>
             UPDATE
            </a>
          </Button>
        </td>
      </tr>
    </tbody>
  );
}
