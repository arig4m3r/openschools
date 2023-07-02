"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);

export function TextEditor({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) {
  return (
    <div className="w-full min-h-[5.5rem]">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="rounded-full"
      />
    </div>
  );
}
