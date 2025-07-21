"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  // force purge cached version of page when data changes
  revalidatePath("/");
  // redirect back to homepage after submission
  redirect("/");
}
