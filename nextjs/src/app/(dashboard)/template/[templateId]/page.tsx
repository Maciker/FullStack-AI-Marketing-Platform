import React from "react";

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  return <div>Template Page {params.templateId} </div>;
}
