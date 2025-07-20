"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

// server action to create a snippet that can be imported
// to the create snippet page
export default async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  // create snippet to database
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("[Snippet to create]", snippet);

  // redirect back tom homepage after submission
  redirect("/");
}
