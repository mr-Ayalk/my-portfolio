// import { title } from "process";
// import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ayalk/",
  },
  {
    title: "Github",
    href: "https://github.com/mr-Ayalk",
  },
  {
    title: "X(tweeter)",
    href: "https://x.com/mr_ayalk",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/ayalkbetteketel.tadese",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ayalkteketel/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-hidden mx-auto justify-center w-full">
      <div className="absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2  bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between  md:ml-14  
        items-center  gap-8 ">
          <div className="text-white/40 ml-10">
            &copy; 2025. All rights reserved.
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold  inline-flex shadow-lg">
                  {link.title}{" "}
                  <ArrowUpRightIcon className="text-white fill-white size-4" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
