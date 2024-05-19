const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search contacts"
    value={value}
    onChange={onChange}
  />
);

export default SearchBox;