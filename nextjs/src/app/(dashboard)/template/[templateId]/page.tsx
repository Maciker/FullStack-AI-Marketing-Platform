import React from "react";

interface TemplatePageProps {
  params: Promise<{ templateId: string }>;
}

export default async function TemplatePage(props: TemplatePageProps) {
  const { templateId } = await props.params;
  return <div>Template Page {templateId} </div>;
}
