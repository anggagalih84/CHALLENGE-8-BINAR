import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import TableRow from "../components/tableRow";
import { Button } from "react-bootstrap";
import { getPlayers } from "../services/player-services";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getPlayers();
    setData(res.data);
  };

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
          <TableRow key={item.id} data={item} />
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

export default Home;
