export default function InputRow({
  label,
  icon,
  placeholder,
  value,
  onChange,
  err,
  errMsg = "",
}) {
  return (
    <div className="flex flex-col gap-0.4">
      <div className="flex justify-between">
        <label className="text-darkGrayishCyan" htmlFor="">
          {label}
        </label>
        {err && <p className="text-[#dc2626]">{errMsg}</p>}
      </div>

      <div className="relative">
        <input
          className={`w-full bg-veryLightGrayishCyan py-0.8 px-1.2 text-right text-2.4 text-veryDarkCyan outline-none focus:border-strongCyan focus:border-2 rounded-md ${
            err ? "border-2 border-[#dc2626]" : "border-0"
          }`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <img
          className="absolute top-[50%] translate-y-[-50%] left-[1.2rem]"
          src={icon}
          alt="icon"
        />
      </div>
    </div>
  )
}
