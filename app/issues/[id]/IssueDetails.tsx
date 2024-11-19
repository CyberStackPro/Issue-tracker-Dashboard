import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { Flex, Card, Text } from "@radix-ui/themes";
import { Heading } from "lucide-react";
import ReactMarkDown from "react-markdown";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  return {
    title: issue?.title,
    description: "Details of issue" + issue?.id,
  };
}
const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full dark:prose-invert" mt={"4"}>
        <ReactMarkDown>{issue?.description}</ReactMarkDown>
      </Card>
    </>
  );
};

export default IssueDetails;
