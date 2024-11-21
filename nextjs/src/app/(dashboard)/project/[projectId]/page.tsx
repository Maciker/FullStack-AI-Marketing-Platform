import { notFound } from "next/navigation";
import React from "react";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { projectId } = await props.params;
  if (projectId != "123") {
    return notFound();
  }
  return <div>ProjectPage: {projectId}</div>;
}
