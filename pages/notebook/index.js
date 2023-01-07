import React from "react";
import { useEffect, useState, useRef } from "react";
import ReactQuill, { Quill, editor } from "react-quill";
import Layout from "../../src/includes/noteapp/layout";
import "react-quill/dist/quill.snow.css";

const Index = () => {
  const textInput = useRef(null);
  const textEditor = useRef(null);
  const [isEditorShow, setIsEditorShow] = useState(false);

  useEffect(() => {
    // textEditor.current.style.display = "none";
    console.log(textEditor.current);

    document.addEventListener(["keydown", "click"], function (e) {
      if (textInput.current) {
        setIsEditorShow(true);
      }
    });
  });

  return (
    <Layout>
      <div className="py-6">
        <div class="flex justify-center ..."></div>
        <div class="flex justify-center ...">
          {isEditorShow ? (
            <ReactQuill ref={textEditor} />
          ) : (
            <input
              ref={textInput}
              type="text"
              name=""
              id="note"
              placeholder="Take a note..."
            />
          )}
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
