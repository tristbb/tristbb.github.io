import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ filename }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/src/${filename}.md`); // Adjust the path accordingly
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error(`Error reading Markdown file: ${error.message}`);
      }
    };

    fetchMarkdownContent();
  }, [filename]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
