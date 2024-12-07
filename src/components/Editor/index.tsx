import { useRef } from "react";

export function Editor() {
  const editorNode = useRef<HTMLDivElement | null>(null);
  return <div ref={editorNode} style={{ height: 500 }} />;
}
