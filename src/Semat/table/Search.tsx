import React from "react";
import { Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const Search: React.FC<SearchProps> = ({
  searchValue,
  handleSearchChange,
  handleSearch,
}) => {
  return (
    <Form.Group controlId="formRequestTitle">
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="search"
        value={searchValue}
        placeholder="Search"
        onChange={handleSearchChange}
        className="col"
      />
      <FiSearch className="icon" onClick={handleSearch} />
    </Form.Group>
  );
};

export default Search;
