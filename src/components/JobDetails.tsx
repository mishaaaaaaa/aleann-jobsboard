import React from "react";
import { bookmark, share } from "../icnos/icons";
import Map from "./Map";
import Button from "./ui-kit/Button";

export default function JobDetails() {
  return (
    <div className="container mx-auto max-w-[1240px] h-screen flex flex-col md:flex-row flex-stretch  my-5 p-3 ">
      <div className="flex flex-col   w-full md:w-3/5 space-y-5">
        <div className="job-title  justify-between items-center md:border-b-2 border-0 flex flex-col md:flex-row">
          <div className="flex grow items-center md:w-1/2 w-full">
            <p className="text-xl font-semibold">Job details</p>
          </div>
          <div className="flex   justify-start md:justify-end  items-center pr-5 space-x-3 border-t-2 md:border-0 md:w-1/2 w-full mt-2 md:mt-0">
            <div className="">{bookmark}</div>
            <div className="">Save to my list</div>
            <div className="">{share}</div>
            <div className="">Share</div>
          </div>
        </div>
        <Button content="Apply now" />
        <div className="flex flex-wrap w-full border">
          <div className="job-title md:w-1/2 order-1 font-semibold">
            Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
            Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
            Fachärztin für Arbeitsmedizin (m/w/d)
          </div>
          <div className="salary md:w-1/2 order-3 md:order-2 flex flex-col items-end border grow">
            <p className="font-semibold">€ 54 000—60 000</p>
            <p className="order-1 md:order-2">brutto per year</p>
          </div>
          <div className="date order-2 md:order-3 grow font-light text-slate-400">
            Posted 2 days ago
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full md:w-2/5">
        <Map />
      </div>
    </div>
  );
}
