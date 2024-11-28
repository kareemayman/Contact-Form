import { useForm } from "react-hook-form"

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="contact-us karla rounded-xl p-7 bg-white m-4 w-80 lg:w-2/5 mx-auto">
      <h1 className=" text-3xl font-bold mb-7">Contact Us</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 max-lg:flex-wrap">
          <div className="first-name basis-full lg:basis-2/4">
            <label htmlFor="first-name" className="font-bold text-gray-600">
              First Name <span>*</span>
            </label>
            <input
              type="text"
              {...register("first-name", { required: "Required" })}
              className="rounded-lg border-gray-300 border-2 block p-3 w-full mt-2 hover:outline-green-700 focus:outline-green-700"
            />
          </div>

          <div className="last-name basis-full lg:basis-2/4">
            <label htmlFor="last-name" className="font-bold text-gray-600">
              Last Name <span>*</span>
            </label>
            <input
              type="text"
              {...register("last-name", { required: "Required" })}
              className="rounded-lg border-gray-300 border-2 block p-3 w-full mt-2 hover:outline-green-700 focus:outline-green-700"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
