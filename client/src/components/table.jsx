import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./tableRow";
import { Button } from "react-bootstrap";

function BasicTable() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/players");
    setData(res.data.data);
  };

  const deleteData =  async (id) => {
    await axios.delete (`http://localhost:5000/api/v1/players/${id}`)
    window.location.href = "/"
  }
  // const deleteData =  async (id) => {
  //   await axios.delete (`http://localhost:5000/api/v1/players/${id}`)
  //   window.location.href = "/"
  // }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>

        {data.map((item) => (
          <TableRow
            key={item.id}
            data={item}
            handler={() => deleteData(item.id)}
          />
        ))}
      </Table>

      <Button>
        <a href="/create-player" className="text-light">
          Create
        </a>
      </Button>
    </div>
  );
}

export default BasicTable;
