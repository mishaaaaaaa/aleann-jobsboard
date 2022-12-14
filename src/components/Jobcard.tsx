import { Card } from "flowbite-react";
import { star, bookmark } from "../icons/icons";
import { Link } from "react-router-dom";
import { CardProps } from "../types/CardPropsType";
import useExtractDate from "../hooks/useExtractDate";

export default function JobCard(props: CardProps) {
  const { card } = props;
  const rating = new Array(Math.floor(Math.random() * 5) + 1).fill(1);
  const creationDate = card.createdAt;

  const postDate = useExtractDate(creationDate);

  return (
    <Card className="bg-primary md:bg-white border-0">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <Link to={`/jobdetails/${card.id}`}>
          <li className="py-3 sm:py-4 ">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 rounded-full"
                  src={card.pictures[0]}
                  alt="Neil "
                />
              </div>
              <div className="min-w-0 flex  flex-col md:flex-row gap-y-1 grow md:justify-between">
                <div className="flex flex-col ">
                  <p className=" text-sm font-medium text-gray-900 dark:text-white">
                    {card.title}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    Department name • {card.address}
                  </p>
                  <div className="">
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Vienna, Austria
                    </p>
                  </div>
                </div>
                <div className="min-w-0 flex justify-between lg:w-2/5 w-full  md:order-last order-first">
                  <div className="min-w-0 inline-flex items-center ">
                    {rating.map((el) => star)}
                  </div>
                  <div className="inline-flex items-end  flex-end flex-col justify-between">
                    <div className="hidden  md:block"> {bookmark}</div>
                    <div className="text-sm text-slate-400">
                      Posted {postDate} years ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </Card>
  );
}
