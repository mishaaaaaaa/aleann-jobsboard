import clsx from "clsx";
import { arrowBack } from "../../icons/icons";

type ButtonProps = {
  content: string;
  className?: string;
  hidden: boolean;
};

export default function Button(props: ButtonProps) {
  const { content, hidden } = props;
  const classes = clsx(
    "text-white bg-slate-400 hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-gray-300 text-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ",
    { hidden: hidden, "md:block": hidden }
  );

  return (
    <button type="button" className={classes}>
      <div className="flex justify-center items-center">
        {arrowBack}
        {content}
      </div>
    </button>
  );
}
