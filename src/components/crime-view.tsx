import styled from "styled-components";
import { Crime } from "../types/types";

interface Props {
  postCode: string;
  crime: Crime;
}

function CrimeView({ postCode, crime }: Props) {
  return (
    <Table>
      <TableRow>
        <TableHeader>PostCode</TableHeader>
        <TableHeader>Date</TableHeader>
        <TableHeader>Location</TableHeader>
        <TableHeader>Outcome status</TableHeader>
      </TableRow>
      <TableRow>
        <TableData>{postCode}</TableData>
        <TableData>{crime.month}</TableData>
        <TableData>{crime.location.street.name}</TableData>
        <TableData>
          {crime.outcome_status ? crime.outcome_status.category : "Ongoing"}
        </TableData>
      </TableRow>
    </Table>
  );
}

export default CrimeView;

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  width: 25%;
  border: 1px solid #dddddd;
  padding: 8px;
`;

const TableData = styled.td`
  width: 25%;
  text-align: center;

  border: 1px solid #dddddd;
  padding: 8px;
`;
