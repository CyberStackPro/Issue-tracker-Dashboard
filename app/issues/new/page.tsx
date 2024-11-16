import { Button, TextArea, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" size="1">
        <TextField.Slot>
          <Search height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
