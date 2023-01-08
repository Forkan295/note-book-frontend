import React from "react";
import { useEffect, useState, useRef } from "react";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import Layout from "../../src/includes/noteapp/layout";
import styles from './css/note.module.css'
import "react-quill/dist/quill.snow.css";


function classNames(...styles) {
    return styles.filter(Boolean).join(' ')
  }
const Index = () => {
  const textInput = useRef(null);
  const [isEditorShow, setIsEditorShow] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (textInput.current) {
        setIsEditorShow(true);
      }
    });
  });

  const handleInputClick = () => {
    setIsEditorShow(true);
  };

  return (
    <Layout>
      <div className="py-6">
        <div class="flex justify-center ..."></div>
        <div class="flex justify-center ...">
          {isEditorShow ? (
            <ReactQuill />
          ) : (
           <div className={classNames(styles.inputContainer)}>
             <input
              ref={textInput}
              onClick={handleInputClick}
              type="text"
              name=""
              id="note"
              className={classNames(styles.inputStyle)}
              placeholder="Take a note..."
            />
           </div>
          )}
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-20">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
