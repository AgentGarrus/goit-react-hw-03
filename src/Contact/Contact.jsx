const Contact = ({ id, name, number, onDelete }) => (
  <li>
    <p>{name}: {number}</p>
    <button onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;