import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Flex, Card, Text } from "@radix-ui/themes";
import { Heading } from "lucide-react";
import ReactMarkDown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose dark:prose-invert" mt={"4"}>
        <ReactMarkDown>{issue?.description}</ReactMarkDown>
      </Card>
    </>
  );
};

export default IssueDetails;
