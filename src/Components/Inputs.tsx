import { Eye, EyeOff, Lock } from "lucide-react";
import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type textFieldProps = {
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  error: string | undefined;
} & ComponentProps<"input">;

const TextField = React.forwardRef<HTMLInputElement, textFieldProps>(
  ({ label, startIcon, endIcon, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <div className="flex items-center relative">
          <div className="absolute left-2 flex items-center">
            {startIcon && startIcon}
          </div>
          <input
            className={twMerge(
              `w-full py-2 px-10 outline-none ring-1 ring-transparent focus:ring-blue-400  rounded-sm border`,
              error ? "border-red-500" : " ",
              startIcon ? "ps-10" : "ps-2",
              endIcon ? "pe-10" : "pe-2"
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute right-2 flex items-center">
            {endIcon && endIcon}
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

export default TextField;

// export default React.forwardRef<HTMLInputElement, textFieldProps>(
//   function TextField({ label, startIcon, endIcon, error, ...props }, ref) {
//     return (
//       <div className="flex flex-col gap-2">
//         <label>{label}</label>
//         <div className="flex items-center relative">
//           <div className="absolute left-2 flex items-center">
//             {startIcon && startIcon}
//           </div>
//           <input
//             className={twMerge(
//               `w-full py-2 px-10 outline-none ring-1 ring-transparent focus:ring-blue-400  rounded-sm border`,
//               error ? "border-red-500" : " "
//             )}
//             ref={ref}
//             {...props}
//           />
//           <div className="absolute right-2 flex items-center">
//             {endIcon && endIcon}
//           </div>
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//       </div>
//     );
//   }
// );
type passwordInputProps = Omit<textFieldProps, "type">;
export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  passwordInputProps
>((props, ref) => {
  const [isPassShown, setIsPassShown] = React.useState(false);
  return (
    <TextField
      startIcon={<Lock />}
      endIcon={
        <button
          onMouseDown={(e) => e.preventDefault()}
          onMouseUp={(e) => e.preventDefault()}
          type="button"
          onClick={() => setIsPassShown((prev) => !prev)}
        >
          {isPassShown ? <Eye /> : <EyeOff />}
        </button>
      }
      {...props}
      type={isPassShown ? "text" : "password"}
      ref={ref}
    />
  );
});
