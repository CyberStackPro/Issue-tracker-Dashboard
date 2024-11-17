import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();

  const issues = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issues) {
    notFound();
  }

  return (
    <div>
      <p>{issues?.title}</p>
      <p>{issues?.description}</p>
      <p>{issues?.status}</p>
      <p>{issues?.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
