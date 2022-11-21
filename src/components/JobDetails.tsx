import React from "react";
import { bookmark, share } from "../icons/icons";
import Map from "./Map";
import Button from "./ui-kit/Button";
import KeyWordBlock from "./ui-kit/KeyWordBlock";
import BackButton from "./ui-kit/BackButton";
import group_of_people from "../images/group_of_people.jpg";
import persons from "../images/persons.jpg";
import building from "../images/building.jpg";
import { Link } from "react-router-dom";

//try to apply useNavigate (but need to refactor)

export default function JobDetails() {
  return (
    <>
      <div className="container mx-auto max-w-[1240px] h-screen flex flex-col md:flex-row  my-5 p-3 ">
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
          <Button content="Apply now" className="btn" hidden={true} />
          <div className="flex flex-wrap w-full ">
            <div className="job-title md:w-1/2 order-1 font-semibold">
              Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
              Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
              Fachärztin für Arbeitsmedizin (m/w/d)
            </div>
            <div className="salary md:w-1/2 order-3 md:order-2 flex flex-col items-end  grow">
              <p className="font-semibold">€ 54 000 - 60 000</p>
              <p className="order-1 md:order-2">brutto per year</p>
              {/* toDo: align brutto per year with salary (make them start from one point) */}
            </div>
            <div className="date order-2 md:order-3 grow font-light text-slate-400">
              Posted 2 days ago
            </div>
          </div>
          <div className="main_job_text space-y-5 flex flex-col">
            <div className="description text-base">
              At WellStar, we all share common goals. That`s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare provider in
              Georgia, this means we pride ourselves on investing in the
              communities that we serve. We continue to provide innovative care
              models, focused on improving quality and access to healthcare.
            </div>
            <div className="resp_title text-lg font-semibold pt-2">
              Responsibilities
            </div>
            <div className="resp_description space-y-5">
              <p className="text-base">
                Wellstar Medical Group, a physician-led multi-specialty group in
                Atlanta, Georgia, is currently recruiting for a BC/BE
                cardiothoracic surgeon to join their existing cardiovascular
                program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
              </p>
              <p className="text-base">
                The ideal candidate will have five or more years of experience
                in cardiac surgery. This candidate should be facile with
                off-pump revascularization, complex aortic surgery, minimally
                invasive valve and valve repair, transcatheter valve
                replacement, surgical atrial fibrillation ablation, ventricular
                assist device placement, and extra corporeal membrane
                oxygenation.
              </p>
              <p className="text_base">
                Wellstar is one of the largest integrated healthcare systems in
                the Southeast with 11 hospitals in Atlanta metro region. With
                two open heart programs at Kennestone Regional Medical Center
                and Atlanta Medical Center, Wellstar cardiac surgeons perform
                over 1200 cardiac procedures per year. The cardiac service line
                is the only center in Georgia with the Joint Commission`s
                Comprehensive Cardiac Center certification.
              </p>
            </div>
            <div className="compensation_benefits">
              <p className="text-lg font-medium">Compensation & Benefits:</p>
              <ul className="list-square">
                {/* <p>Our physicians enjoy a wide range of benefits, including:</p> */}
                <li className="text-neutral-400">
                  <div className="text-black">
                    Very competitive compensation package with bonuses
                  </div>
                </li>
                <li className="text-neutral-400">
                  <div className="text-black">
                    Medical, Dental, and Vision Insurance
                  </div>
                </li>
                <li className="text-neutral-400">
                  <div className="text-black">
                    Occurrence-based Malpractice Coverage
                  </div>
                </li>
                <li className="text-neutral-400">
                  <div className="text-black">
                    Short-term and Long-term Disability Insurance and life
                    insurance
                  </div>
                </li>
              </ul>
            </div>
            {/* refactor btn in component so i can add proprty to hide/unhide btn on small screens */}
            <Button
              content="Apply now"
              hidden={false}
              className="self-center md:self-start"
            />
          </div>
          <div className="aditional_info grow">
            <p className="text-xl font-semibold mb-2">Additional info</p>
            <div className="employment_type border-t-2 space-y-2 pt-2">
              <p className="text-lg">Employment type</p>
              <div className="flex w-full space-x-2 ">
                <KeyWordBlock
                  content="Full time"
                  className="flex border-blue-700 bg-blue-100 text-blue-700"
                />
                <KeyWordBlock
                  content="Part time"
                  className="flex border-blue-700 bg-blue-100 text-blue-700"
                />
                <KeyWordBlock
                  content="Temporary"
                  className="flex border-blue-700 bg-blue-100 text-blue-700"
                />
              </div>
              <p className="text-lg">Benefits</p>
              <div className="flex w-full space-x-2 ">
                <KeyWordBlock
                  content="Flexible shedule"
                  className="flex border-yellow-300 bg-yellow-100 text-yellow-500"
                />
                <KeyWordBlock
                  content="Relocation assistance"
                  className="flex border-yellow-300 bg-yellow-100 text-yellow-500"
                />
              </div>
            </div>
            <div className="benefits"></div>
          </div>
          <div className="attached_images grow">
            <p className="text-xl font-semibold mb-2">Attached images</p>
            <div className="images_group border-t-2 space-y-2 pt-2 flex items-center overflow-x-auto space-x-2">
              <div className="img w-1/3">
                <img
                  src={group_of_people}
                  className="w-full max-w-xl h-auto rounded-lg"
                  alt="image description"
                />
              </div>
              <div className="img w-1/3">
                <img
                  src={persons}
                  className="w-full max-w-xl h-auto rounded-lg"
                  alt="image description"
                />
              </div>
              <div className="img w-1/3">
                <img
                  src={building}
                  className="w-full max-w-xl h-auto rounded-lg"
                  alt="image description"
                />
              </div>
            </div>
          </div>
          <div className="back-bt mr-10 relative ">
            <Link to="/" className="absolute -left-12 flex">
              <BackButton content="RETURN TO JOB BOARD" hidden={true} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col   w-full md:w-2/5">
          <Map />
        </div>
      </div>
    </>
  );
}
