import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  // extracting the id from the param props
  const { id } = await props.params;

  // parsing the id that is always a string in params to an Int
  const snippetId = parseInt(id);

  // extracting the data from database based on the id provided
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>Editing snippet with title: {snippet.title}</div>;
}
