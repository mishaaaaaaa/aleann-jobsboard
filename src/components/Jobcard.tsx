import React from "react";
import { Card } from "flowbite-react";

export default function Jobcard() {
  return (
    <Card href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-10">
              <div className="shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil "
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  Neil Sims
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
