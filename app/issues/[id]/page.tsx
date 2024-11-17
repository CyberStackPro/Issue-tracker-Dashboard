import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { PencilLineIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkDown from "react-markdown";
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const issues = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issues) {
    notFound();
  }

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Box>
        <Heading>{issues?.title}</Heading>
        <Flex gap={"3"} my={"2"}>
          <IssueStatusBadge status={issues?.status} />
          <Text>{issues?.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose dark:prose-invert" mt={"4"}>
          <ReactMarkDown>{issues?.description}</ReactMarkDown>
        </Card>
      </Box>

      <Box>
        <Button>
          <PencilLineIcon size={20} />
          <Link href={`/issue/${issues.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
