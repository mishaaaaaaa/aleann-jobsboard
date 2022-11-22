import React from "react";
import KeyWordBlock from "../ui-kit/KeyWordBlock";

type AdditionalInfoProps = {
  employment_type?: string[];
  benefits?: string[];
};

function AdditionalInfo({ employment_type, benefits }: AdditionalInfoProps) {
  return (
    <div className="aditional_info grow">
      <p className="text-xl font-semibold mb-2">Additional info</p>
      <div className="employment_type border-t-2 space-y-2 pt-2">
        <p className="text-lg">Employment type</p>
        <div className="flex w-full space-x-2 ">
          {employment_type &&
            employment_type.map((et) => {
              return (
                <KeyWordBlock
                  content={et}
                  className="flex border-blue-700 bg-blue-100 text-blue-700"
                />
              );
            })}
        </div>
        <p className="text-lg">Benefits</p>
        <div className="flex w-full space-x-2 ">
          {benefits &&
            benefits.map((benefit) => {
              return (
                <KeyWordBlock
                  content={benefit}
                  className="flex border-yellow-300 bg-yellow-100 text-yellow-500"
                />
              );
            })}
        </div>
      </div>
      <div className="benefits"></div>
    </div>
  );
}

export default AdditionalInfo;
