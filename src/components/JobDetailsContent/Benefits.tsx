import React from "react";

type BenefitsProps = {
  benefits?: string[];
};

function Benefits({ benefits }: BenefitsProps) {
  return (
    <div className="compensation_benefits">
      <p className="text-lg font-medium">Compensation & Benefits:</p>
      <ul className="list-square">
        <p>Our physicians enjoy a wide range of benefits, including:</p>
        {benefits &&
          benefits.map((benefit: string, index) => {
            return (
              <li className="text-neutral-400 ml-5 lg:ml-0" key={index}>
                <div className="text-black">{benefit}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Benefits;
