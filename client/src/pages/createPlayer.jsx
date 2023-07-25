import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormText from "../components/formText";
import { postPlayer } from "../services/player-services";

function CreatePlayer() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Itu, ada yang belum diisi. Di isi dulu no, sayangku.");
      return;
    }

    try {
      await postPlayer(username, email, password);

      window.location.href = "/";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="container"
      style={{ display: "block", width: 700, padding: 30 }}
    >
      <FormText
        id="inputUsername"
        type="text"
        label="Username"
        placeholder="Input your username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <FormText
        id="inputEmail"
        type="text"
        label="Email"
        placeholder="Input your email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormText
        handleSubmit={handleSubmit}
        id="inputPassword"
        label="Password"
        type="password"
        placeholder="Input your password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button variant="danger" onClick={() => handleCancel()}>
        Cancel
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CreatePlayer;
