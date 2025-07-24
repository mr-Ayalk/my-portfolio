import figmaIcon from "../assets/images/assets/images/figma-logo.svg";
import notionIcon from "../assets/images/assets/images/notion-logo.svg";
import slackIcon from "../assets/images/assets/images/slack-logo.svg";
import relumeIcon from "../assets/images/assets/images/relume-logo.svg";
import framerIcon from "../assets/images/assets/images/framer-logo.svg";
import gitHubIcon from "../assets/images/assets/images/github-logo.svg";

import IntegrationColumn from "../components/IntegrationColumn.jsx";
import Tag from "../components/Tag.jsx";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: gitHubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export default function Integrations() {
  return (
    <section className="px-10 overflow-hidden overflow-x-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-1">
          <div className="overflow-hidden  ">
            <Tag>Technologies</Tag>
            <h2 className="text-2xl md:text-4xl font-medium mt-6">
              I Work Well with <span className="text-yellow-500"> Latest </span>
              Technologies
            </h2>
            <p className="text-white/50 mt-4 text-xl">
              Over the past 3 years, I've been working with these technologies
              while continuously learning and staying up to date with the latest
              tools in the tech world.
            </p>
          </div>

          <div>
            <div className=" h-[500px] lg:h-[400px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-1 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
