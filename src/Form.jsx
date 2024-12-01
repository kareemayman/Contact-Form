import { useForm } from "react-hook-form"
import checkedBox from "../assets/images/icon-checkbox-check.svg"
import { Input } from "./Input"

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const enquiry = watch("enquiry")
  // console.log(enquiry)
  const consent = watch("consent")

  console.log(errors)

  return (
    <div className="contact-us karla rounded-xl p-7 lg:p-14 bg-white m-4 w-80 lg:w-2/5 mx-auto shadow-2xl">
      <h1 className=" text-3xl font-bold mb-7">Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex lg:gap-4 max-lg:flex-wrap">
          <div className="first-name basis-full lg:basis-2/4 mb-7">
            <Input
              type="text"
              name="first-name"
              label="First Name"
              errorMessage="This field is required"
              register={register}
              watch={watch}
              errors={errors}
            ></Input>
          </div>

          <div className="last-name basis-full lg:basis-2/4 mb-7">
            <Input
              type="text"
              name="last-name"
              label="Last Name"
              errorMessage="This field is required"
              register={register}
              watch={watch}
              errors={errors}
            ></Input>
          </div>
        </div>

        <div className="email mb-7">
        <Input
              type="email"
              name="email"
              label="Email Address"
              errorMessage="This field is required"
              register={register}
              watch={watch}
              errors={errors}
            ></Input>
        </div>

        <label className="font-bold text-gray-600">
          Query Type <span>*</span>
        </label>
        <div className="query-type flex lg:gap-4 max-lg:flex-wrap">
          <label
            className={`general basis-full lg:basis-2/4 mb-2 lg:mb-7 rounded-lg border-gray-300 cursor-pointer
            border-2 p-3 w-full mt-2 hover:border-green-700 focus:outline-green-700 
            transition duration-300 relative before:content-[''] before:rounded-full before:absolute 
            before:top-2/4 before:left-4 before:-translate-y-2/4 before:border-2 flex items-center
            before:border-slate-300 before:w-5 before:aspect-square before:transition before:duration-300
            ${
              enquiry === "general"
                ? "bg-green-100 border-green-700 before:bg-green-600"
                : ""
            }`}
          >
            <input
              type="radio"
              value={"general"}
              {...register("enquiry", {
                required: "Please select a query type",
              })}
              className="opacity-0"
            />
            <span className="font-bold text-gray-600 ml-9">
              General Enquiry
            </span>
          </label>

          <label
            className={`general basis-full lg:basis-2/4 mb-2 lg:mb-7 rounded-lg border-gray-300 cursor-pointer
            border-2 p-3 w-full mt-2 hover:border-green-700 focus:outline-green-700 
            transition duration-300 relative before:content-[''] before:rounded-full before:absolute 
            before:top-2/4 before:left-4 before:-translate-y-2/4 before:border-2 flex items-center
            before:border-slate-300 before:w-5 before:aspect-square before:transition before:duration-300
           ${
             enquiry === "support"
               ? "bg-green-100 border-green-700 before:bg-green-600"
               : ""
           }`}
          >
            <input
              type="radio"
              value={"support"}
              {...register("enquiry", {
                required: "Please select a query type",
              })}
              className="opacity-0"
            />
            <span className="font-bold text-gray-600 ml-9">
              Support Request
            </span>
          </label>
        </div>

        <div className="message mb-7">
          <label htmlFor="message" className="font-bold text-gray-600">
            Message <span>*</span>
          </label>
          <textarea
            {...register("message", { required: "This field is required" })}
            id="message"
            className="rounded-lg border-gray-300 border-2 block p-3 w-full mt-2 hover:border-green-700 
            focus:outline-green-700 transition duration-300 resize-none h-32 max-lg:h-48"
          ></textarea>
        </div>

        <label className="consent group flex items-center gap-3 cursor-pointer">
          <div
            className={`checkbox border-gray-400 border-2 w-6 lg:w-4 aspect-square transition-all duration-300 
               group-hover:border-green-700 group-focus:outline-green-700 relative 
               ${consent && "border-0"}`}
          >
            <input
              type="checkbox"
              {...register("consent", {
                required:
                  "To submit this form, please consent to being contacted",
              })}
              id="consent"
              className="absolute opacity-0"
            />
            <img
              src={checkedBox}
              alt="checked box"
              className={`opacity-0 w-full h-full ${
                consent && "opacity-100"
              } transition duration-300`}
            />
          </div>
          <span className="font-bold text-gray-600">
            I consent to being contacted by the team <span>*</span>
          </span>
        </label>

        <input
          type="submit"
          className="flex justify-center content-center rounded-lg 
        border-none outline-none py-3 w-full mt-7 cursor-pointer font-bold text-white hover:bg-emerald-800
        transition-all duration-300"
        />
      </form>
    </div>
  )
}
