"use client";

import React from "react";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Search } from "lucide-react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" size="1">
        <TextField.Slot>
          <Search height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <SimpleMDE />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
