import React from "react";
import clsx from "clsx";

type KeyWordBlockProps = {
  content: string;
  className: string;
};
export default function KeyWordBlock(props: KeyWordBlockProps) {
  const { content, className } = props;
  const classes = clsx(
    "border font-medium rounded-lg text-sm space-x-1 py-2.5 text-center mb-2 flex-1  justify-center",
    className
  );
  return <div className={classes}>{content}</div>;
}
