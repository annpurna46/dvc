import { Input } from "@material-tailwind/react";

export function NormalInput({
  onChange,
  value,
  type = "text",
  placeholder = "placeholder",
  size = "md",
  upperCase = false,
}) {
  return (
    <div
      className="
    "
    >
      <Input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`!border !border-gray-300 ${upperCase && "uppercase"} bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none `}
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
