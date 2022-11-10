import React from "react";
import { Card } from "flowbite-react";

export default function Jobcard() {
  return (
    <Card href="#">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <img
                className="h-16 w-16 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil "
              />
            </div>
            <div className="min-w-0 grid gap-y-1">
              <p className=" text-sm font-medium text-gray-900 dark:text-white">
                Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
                Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
                Fachärztin für Arbeitsmedizin (m/w/d)
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
              </p>

              <div className="">
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  Vienna, Austria
                </p>
              </div>
            </div>

            <div className="min-w-0 flex-4">here will be starts icons</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              here will be bookmark and post date
            </div>
          </div>
        </li>
      </ul>
    </Card>
  );
}
