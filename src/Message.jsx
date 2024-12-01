export function Message({ name, label, errorMessage, register, errors }) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-gray-600">
        {label} <span>*</span>
      </label>
      <textarea
        {...register(name, { required: errorMessage })}
        id="message"
        className={`rounded-lg border-gray-300 border-2 block p-3 w-full mt-2 
          transition duration-300 resize-none h-32 max-lg:h-48 ${
            errors.message
              ? "border-rose-500"
              : "hover:border-green-700 focus:outline-green-700"
          }`}
      ></textarea>
      <label className="text-sm text-rose-500 font-medium block mt-2">
        {errors.message?.message}
      </label>
    </>
  )
}
