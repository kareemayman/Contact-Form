export function Query({ enquiry, value, register, label }) {
  return (
    <label
      className={`${value} basis-full lg:basis-2/4 rounded-lg border-gray-300 cursor-pointer
        border-2 p-3 w-full mt-2 hover:border-green-700 focus:outline-green-700 
        transition duration-300 relative before:content-[''] before:rounded-full before:absolute 
        before:top-2/4 before:left-4 before:-translate-y-2/4 before:border-2 flex items-center
        before:border-slate-300 before:w-5 before:aspect-square before:transition before:duration-300
        ${
          enquiry === value
            ? "bg-green-100 border-green-700 before:bg-green-600"
            : ""
        }`}
    >
      <input
        type="radio"
        value={value}
        {...register("enquiry", {
          required: "Please select a query type",
        })}
        className="opacity-0"
      />
      <span className="font-bold text-gray-600 ml-9">{label}</span>
    </label>
  )
}
