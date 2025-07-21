"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
// if multiple actions in same file import: * as actions will allow access to all actions
// in said file! import with: actions.nameOfAction
import { editSnippet } from "@/actions/snippets/editSnippet";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  // state with default of the snippet code provided
  const [code, setCode] = useState(snippet.code);

  // eventHandler setting the state based on changes made in monaco editor
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        // setting the default display value to the code from snippet
        defaultValue={snippet.code}
        // disables the built in monaco minimap
        options={{ minimap: { enabled: false } }}
        // callback to handle changes made to the snippet code
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button className="p-2 border rounded">Save</button>
      </form>
    </div>
  );
}
