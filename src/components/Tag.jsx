import { twMerge } from "tailwind-merge";

export default function Tag(props) {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-yellow-500 gap-2 text-yellow-400 px-3 py-1 rounded-full uppercase items-center  ",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
