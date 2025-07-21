"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

// server action to create a snippet that can be imported
// to the create snippet page
export default async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");
  // validating form inputs
  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title is too short",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code snippet needs to be longer",
    };
  }

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
