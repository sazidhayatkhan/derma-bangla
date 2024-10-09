import React from "react";

type Props = {};

const AboutUI = (props: Props) => {
  return (
    <div className="_container w-[70%]">
        <label className="form-control w-full">
            <div className="label">
            <span className="label-text">What is your first name?</span>
            </div>
            <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            />
        </label>
        <label className="form-control w-full my-5">
            <div className="label">
            <span className="label-text">What is your last name?</span>
            </div>
            <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            />
        </label>
        <label className="form-control w-full">
            <div className="label">
            <span className="label-text">What is your address?</span>
            </div>
            <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            />
        </label>
    </div>
  );
};

export default AboutUI;
