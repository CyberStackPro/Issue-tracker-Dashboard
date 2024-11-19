import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import AssingeeSelect from "./AssingeeSelect";
import { cache } from "react";
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const session = await getServerSession();

  const issues = await fetchUser(parseInt(params.id));
  if (!issues) {
    notFound();
  }

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
      <Box className="md:col-span-4">
        <IssueDetails issue={issues} />
      </Box>
      {session && (
        <Box>
          <Flex direction={"column"} gap={"4"}>
            <AssingeeSelect issue={issues} />
            <EditIssueButton issueId={issues.id} />
            <DeleteIssueButton issueId={issues.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

const fetchUser = cache((issueId: number) => {
  return prisma.issue.findUnique({
    where: { id: issueId },
  });
});
export async function generateMetadata({ params }: { params: { id: string } }) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: "Details of issue" + issue?.id,
  };
}

export default IssueDetailPage;
