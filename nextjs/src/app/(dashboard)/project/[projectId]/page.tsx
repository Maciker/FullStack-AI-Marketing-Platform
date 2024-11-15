import React from "react";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <div>Project Page {params.projectId}</div>;
}
