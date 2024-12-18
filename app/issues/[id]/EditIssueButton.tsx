"use client";
import { Button } from "@radix-ui/themes";
import { PencilLineIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <PencilLineIcon size={20} />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
