import successCheck from "../assets/images/icon-success-check.svg"

export function Success({ successState }) {
  return (
    <div
      className={`karla rounded-xl absolute left-1/2 -translate-x-2/4 bg-sky-950 shadow-2xl
        text-white p-6 transition-all duration-700 flex flex-col justify-center gap-2 ${
          successState ? "top-4" : "-top-full"
        }`}
    >
      <div className="flex content-center gap-3">
        <img src={successCheck} alt="Check" />
        <h3 className="font-bold">Message Sent!</h3>
      </div>
      <p className="text-sm">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  )
}
