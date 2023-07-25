import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormText from "../components/formText";
import {
  editPlayer,
  getPlayerById,
  getPlayers,
} from "../services/player-services";
import { useParams } from "react-router-dom";
import FormSelect from "../components/formSelect";

function EditPlayer() {
  const { id } = useParams();
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editPlayer(id, username, email, password, experience, level);

      window.location.href = "/";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  const fetchCurrentPlayer = async () => {
    const res = await getPlayerById(id);

    setUsername(res.data.username);
    setEmail(res.data.email);
    setPassword(res.data.password);
    setExperience(res.data.experience);
    setLevel(res.data.lvl);
    setCurrentPlayer(res.data);
  };

  const fetchAllPlayers = async () => {
    const res = await getPlayers();

    setPlayers(res.data);
  };

  const handleSelectChange = (event) => {
    const selectedPlayerId = event.target.value;

    window.location.href = `/edit-player/${selectedPlayerId}`;
  };

  useEffect(() => {
    fetchCurrentPlayer();
    fetchAllPlayers();
  }, []);

  return (
    <div>
      {currentPlayer && players && (
        <div style={{ display: "block", width: 700, padding: 30 }}>
          <h2 className="mb-3">Edit Player</h2>
          <FormSelect
            currentData={currentPlayer}
            listPlayers={players}
            onSelected={handleSelectChange}
          />
          <Form
            onSubmit={handleSubmit}
            className="container"
            style={{ display: "block", width: 700, padding: 30 }}
          >
            <FormText
              id="inputUsername"
              type="text"
              label="Username"
              value={username}
              placeholder="Input your username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <FormText
              id="inputEmail"
              type="text"
              label="Email"
              value={email}
              placeholder="Input your email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <FormText
              handleSubmit={handleSubmit}
              id="inputPassword"
              label="Password"
              type="password"
              value={password}
              placeholder="Input your password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormText
              handleSubmit={handleSubmit}
              id="inputExperience"
              label="Experience"
              type="experience"
              value={experience}
              placeholder="Input your experience"
              onChange={(event) => setExperience(event.target.value)}
            />
            <FormText
              handleSubmit={handleSubmit}
              id="inputLevel"
              label="Level"
              type="text"
              value={level}
              placeholder="Input your level"
              onChange={(event) => setLevel(event.target.value)}
            />

            <Button variant="danger" onClick={() => handleCancel()}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default EditPlayer;
