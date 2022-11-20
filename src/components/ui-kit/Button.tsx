import React from "react";
import clsx from "clsx";

type ButtonProps = {
  content: string;
  className: string;
  hidden: boolean;
};

export default function BackButton(props: ButtonProps) {
  const { content, className, hidden } = props;
  const classes = clsx(
    "w-32 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
    { hidden: hidden, "md:block": hidden }
  );

  return (
    <button type="button" className={classes}>
      {props.content}
    </button>
  );
}
