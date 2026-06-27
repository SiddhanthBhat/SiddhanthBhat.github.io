import { GridWrapper } from "@/app/components/GridWrapper";
import { ArrowRight } from "lucide-react";
import React from "react";

// 1. Your Configuration List
// Easily add, remove, or reorder links right here.
const LINKS_DATA = [
  // {
  //   title: "Read my latest Paper",
  //   description: "Similarity Verification of Kinship Pairs using Metricized Emphasis.",
  //   url: "https://your-paper-link.com",
  //   image: "/your-local-image.png", // Can be a local path or an external URL
  // },
];

export default function LinksPage() {
  return (
    <div className="relative mt-14 mb-24">
      <title>Links | Siddhanth</title>

      <div className="space-y-12">
        {/* Header Section */}
        <GridWrapper>
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <h1 className="text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
              My Links
            </h1>
            <p className="text-lg text-text-secondary">
              
            </p>
          </div>
        </GridWrapper>

        {/* Links Grid */}
        <GridWrapper>
          <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            {LINKS_DATA.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-md"
              >
                {/* Image / Icon */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                  <img
                    src={link.image}
                    alt={link.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 overflow-hidden">
                  <h2 className="truncate text-base font-medium text-text-primary group-hover:text-indigo-600 transition-colors">
                    {link.title}
                  </h2>
                  <p className="line-clamp-2 text-sm text-text-secondary mt-0.5">
                    {link.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="text-text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>
      </div>
    </div>
  );
}