import Form from "react-bootstrap/Form";

function FormSelect({ currentData, listPlayers, onSelected }) {
  return (
    <Form.Select className="mb-4" onChange={onSelected}>
      <option>{currentData.username}</option>
      {listPlayers.map((item) => (
        <option key={item.id} value={item.id}>
          {item.username}
        </option>
      ))}
    </Form.Select>
  );
}

export default FormSelect;
