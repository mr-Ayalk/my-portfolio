import grainImage from "../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children, ...other }) => {
  return (
    <div
      className={twMerge(
        `
        relative z-0 overflow-hidden rounded-3xl bg-gray-800 
        after:absolute after:inset-0 after:rounded-3xl after:content-['']
        after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20
        after:pointer-events-none after:z-10 
        `,
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
