import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid place-content-center mt-6">
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        {/* firstname */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your first name</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter first name"
            {...register("fname", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.fname && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* lastname */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your last name</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter last name"
            {...register("lname", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.lname && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* password */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your password</label>
          <input
            type="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.password && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* repassword */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">ReEnter your password</label>
          <input
            type="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="ReEnter Password"
            {...register("repassword", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.repassword && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* email */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your email</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.email && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* mobile */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your mobile</label>
          <input
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter mobile no"
            {...register("phone", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.phone && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* address */}
        <div className="flex items-center gap-3">
          <label className="whitespace-nowrap">Enter your address</label>
          <textarea
            id="message"
            rows="4"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
            placeholder="Write your thoughts here..."
            {...register("address", { required: true })}
          />
          <span className="w-40 text-sm whitespace-nowrap">
            {errors.address && (
              <span className="text-red-500">* This field is required</span>
            )}
          </span>
        </div>

        {/* submit button */}
        <div className="flex justify-end mt-4">
          <button className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
