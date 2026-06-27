import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "General",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Socials",
    links: [
      { href: "https://www.linkedin.com/in/siddhanthbhat/", label: "LinkedIn", isExternal: true, },
      { href: "https://github.com/SiddhanthBhat", label: "Github", isExternal: true, },
      {
        href: "https://scholar.google.com/citations?user=QQ0yGDkAAAAJ&hl=en",
        label: "Scholar",
        isExternal: true,
      },
      { href: "https://youtu.be/dQw4w9WgXcQ", label: "Rick", isExternal: true, },
    ],
  },
  {
    title: "Extra",
    links: [
      { href: "https://soundcloud.com/siddhanthbhat", label: "Music" , isExternal: true },
      { href: "https://medium.com/@bhatsiddhanth", label: "Medium" , isExternal: true},
      { href: "https://drive.google.com/file/d/1fgNe99qid9epwUdqotLwW_BcnqOKiew_/view?usp=sharing", label: "Resume", isExternal: true },
      { href: "/links", label: "Links"},
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="relative max-w-7xl  mt-12">
        <GridWrapper>
          <div className="max-w-6xl px-4 lg:mx-auto lg:flex lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <img
                      className="h-10 w-10"
                      src="/profileNobg.png"
                      alt="Siddhanth's Logo"
                    />
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    I&apos;m Siddhanth - a Technical Project Manager, SDE and AI Researcher. Thanks for checking out my site!
                  </p>
                </div>
                <p className="mt-6 text-gray-500">
                  © {new Date().getFullYear()} Siddhanth Bhat
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <span className="mb-4 inline-block text-base font-medium text-blue-500">
                      {section.title}
                    </span>
                    <ul className="space-y-2 text-sm text-gray-500">
                      {section.links.map((link) => (
                        <li className="hover:text-blue-500" key={link.href}>
                          {renderFooterLink(link)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </>
  );
}
