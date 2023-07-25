import { Form } from "react-bootstrap";

function FormText({ id, label, type, placeholder, value, onChange }) {
  return (
    <Form.Group className="mb-4 d-flex flex-column">
      <Form.Label className="text-start" htmlFor={id}>
        {label}:
      </Form.Label>
      <Form.Control
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    </Form.Group>
  );
}

export default FormText;
