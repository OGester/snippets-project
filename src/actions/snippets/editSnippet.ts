"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  //console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  // force purge cached version of page when data changes
  revalidatePath(`/snippets/${id}`);
  // redirect to view snippet page
  redirect(`/snippets/${id}`);
}
