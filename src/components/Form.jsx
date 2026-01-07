import React from "react";

function Form() {
  return (
    <div className="grid place-content-center mt-6">
      <form className="flex flex-col gap-4">
        {/* firstname */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your first name</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter first name"
          />
        </div>

        {/* lastname */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your last name</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter last name"
          />
        </div>

        {/* password */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your password</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Password"
          />
        </div>

        {/* repassword */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">ReEnter your password</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="ReEnter Password"
          />
        </div>

        {/* email */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your email</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter email"
          />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your mobile</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter mobile no"
          />
        </div>

        {/* address */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your address</label>
          <textarea
            id="message"
            rows="4"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        {/* submit button */}
        <div className="flex justify-end mt-4">
          <button
            type="button"
            class="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
          >
            Purple to Pink
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
