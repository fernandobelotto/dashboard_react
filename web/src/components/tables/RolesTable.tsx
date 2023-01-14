import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const columns = ["Entity", "Read", "Write", "Update", "Delete"];

interface Permission {
  entity: string;
  key: string;
  read: boolean;
  write: boolean;
  update: boolean;
  deleteKey: boolean;
  [permission: string]: boolean | string;
}

const RolesTable = ({ data }: { data: Permission[] }) => {
  const [permissions, setPermissions] = useState(data);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    permission: string
  ) => {
    const newPermissions = [...permissions];
    const index = newPermissions.findIndex((p) => p.key === key);

    newPermissions[index][permission] = e.target.checked;

    if (permission === "read" && !e.target.checked) {
      newPermissions[index].write = false;
      newPermissions[index].update = false;
      newPermissions[index].deleteKey = false;
    }
    if (permission === "write" && e.target.checked) {
      newPermissions[index].read = true;
    }
    if (permission === "update" && e.target.checked) {
      newPermissions[index].read = true;
    }
    if (permission === "deleteKey" && e.target.checked) {
      newPermissions[index].read = true;
    }

    setPermissions(newPermissions);
  };

  return (
    <TableContainer w="full">
      <Table size="sm">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {permissions.map(
            ({ entity, key, read, write, update, deleteKey }) => (
              <Tr key={key}>
                <Td>{entity}</Td>
                <Td textAlign="center">
                  <Checkbox
                    isChecked={read}
                    onChange={(e) => handleChange(e, key, "read")}
                  />
                </Td>
                <Td textAlign="center">
                  <Checkbox
                    isChecked={write}
                    onChange={(e) => handleChange(e, key, "write")}
                  />
                </Td>
                <Td textAlign="center">
                  <Checkbox
                    isChecked={update}
                    onChange={(e) => handleChange(e, key, "update")}
                  />
                </Td>
                <Td textAlign="center">
                  <Checkbox
                    isChecked={deleteKey}
                    onChange={(e) => handleChange(e, key, "deleteKey")}
                  />
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RolesTable;
