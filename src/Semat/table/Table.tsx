import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import Table from "react-bootstrap/Table";
import Header from "../../Header";
import { Row } from "react-bootstrap";
import PaginationComponent from "./Pagination";
import Search from "./Search";
import Selects from "./Select";

const urlTable = "organizations/manage";

interface TableData {
  Order: number;
  PkEntity?: number;
  Omissible?: number;
  OrganizationName: string;
  ParamInstitutionStatusValue: string;
  ParamValidationStatusValue: string;
  OrganizationParentName: string;
  DeleteDetail: string;
  ParamInstitutionStatus?: number;
}

const TableComponent = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [paramInstitutionStatus, setParamInstitutionStatus] =
    useState<number>(1);
  const [fkParentOrganization, setFkParentOrganization] = useState<number>(0);
  const [paramOrgValidationStatus, setParamOrgValidationStatus] =
    useState<number>(0);

  const fetchData = (page: number, search: string) => {
    axiosInstance
      .get(
        `${urlTable}?SearchString=${search}&searchType=${1}&ParamInstitutionStatus=${paramInstitutionStatus}&fkParentOrganization=${fkParentOrganization}&ParamOrgValidationStatus=${paramOrgValidationStatus}&paging=${page}&page=${62}`
      )
      .then((response) => {
        console.log("Fetched data:", response.data.content);
        setTableData(response.data.content.contents);
        setTotalItems(response.data.content.meta.rowCount);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData(currentPage, searchValue);
  }, [currentPage, searchValue]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    fetchData(1, searchValue);
    setCurrentPage(1);
  };

  const handleTeamChange = (value: number) => {
    setParamOrgValidationStatus(value);
  };

  const handleServiceTypeChange = (value: number) => {
    setParamInstitutionStatus(value);
  };

  const handleParentOrgChange = (value: number) => {
    setFkParentOrganization(value);
  };

  const handleApplyFilters = () => {
    fetchData(currentPage, searchValue);
  };

  const totalPages = Math.ceil(totalItems / 20); // Assuming 20 items per page for pagination calculation

  return (
    <>
      <Header />
      <Row className="mt-5 selects">
        <Search
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          handleSearch={handleSearch}
        />

        <Selects
          onTeamChange={handleTeamChange}
          onServiceTypeChange={handleServiceTypeChange}
          onParentOrgChange={handleParentOrgChange}
          onApplyFilters={handleApplyFilters}
        />
      </Row>

      <div className="table d-flex justify-content-center align-items-center mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order</th>
              <th>Organization Name</th>
              <th>Institution Status</th>
              <th>Validation Status</th>
              <th>Parent Organization</th>
              <th>Delete Detail</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.Order}>
                <td>{data.Order}</td>
                <td>{data.OrganizationName}</td>
                <td>{data.ParamInstitutionStatusValue}</td>
                <td>{data.ParamValidationStatusValue}</td>
                <td>{data.OrganizationParentName}</td>
                <td>{data.DeleteDetail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default TableComponent;
