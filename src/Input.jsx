export function Input({ name, label, type, errorMessage, register, errors }) {
  return (
    <>
      <label htmlFor={name} className="font-bold text-gray-600">
        {label} <span>*</span>
      </label>
      <input
        type={type}
        {...register(name, {
          required: errorMessage,
        })}
        className={`rounded-lg border-gray-300 border-2 block p-3 w-full mt-2  
        transition duration-300 ${
          errors[name]
            ? "border-rose-500"
            : "hover:border-green-700 focus:outline-green-700"
        }`}
      />

      <label className="text-sm text-rose-500 font-medium block mt-2">
        {errors[name]?.message}
      </label>
    </>
  )
}
