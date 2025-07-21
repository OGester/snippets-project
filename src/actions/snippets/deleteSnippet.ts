"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
