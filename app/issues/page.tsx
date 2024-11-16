import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <>
      <Button>
        <Link href={"/issues/new"}>Create New</Link>
      </Button>
    </>
  );
};

export default IssuesPage;
