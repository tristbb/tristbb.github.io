import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ filename }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = () => {
      import(`../poems/${filename}.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => console.log(res))
            .then((res) => res.text())
            .then((res) => setMarkdownContent(res))

            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };

    fetchMarkdownContent();
  }, [filename]);

  return (
    <div>
      <ReactMarkdown>{filename}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
