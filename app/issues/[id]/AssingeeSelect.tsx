import { Select } from "@radix-ui/themes";
import React from "react";

const AssingeeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Yeabsra Gebriel</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssingeeSelect;
