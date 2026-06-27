"use client";

import { useState } from "react";
import { GridWrapper } from "@/app/components/GridWrapper";

// --- Types ---
interface PhotoAlbum {
  title: string;
  images: string[];
}

interface Poster {
  title: string;
  image: string;
}

// --- Data ---
const albums: PhotoAlbum[] = [
  {
    title: "Street Photography",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg", 
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
    ],
  },
  {
    title: "Portraits",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/051556250807599.6a27f6482a670.jpg",
    ],
  },
];

const posters: Poster[] = [
  {
    title: "Poster 1",
    image: "/design/posters/fifa.png",
  },
  {
    title: "Poster 2",
    image: "/design/posters/wikirace.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/techtrivia.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/techtactoe.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/gamejam1.png",
  },
  {
    title: "Poster 2",
    image: "/design/posters/gamejam2.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/gamejam3.png",
  },
  {
    title: "Poster 2",
    image: "/design/posters/cryptoex.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/multiverse.png",
  },{
    title: "Poster 2",
    image: "/design/posters/panache.png",
  },
  {
    title: "Poster 3",
    image: "/design/posters/clonewars.png",
  },
];

// --- Components ---
function ProjectImage(props: { src: string; alt: string; className?: string }) {
  return (
    <img 
      src={props.src} 
      alt={props.alt} 
      className={`drama-shadow rounded-xl object-cover w-full aspect-[4/5] ${props.className || ''}`} 
    />
  );
}

// Reusable Expandable Grid Component
function ExpandableGrid({ title, items }: { title: string, items: { src: string, alt: string }[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show the toggle button if the items overflow past row 1 on the current screen size.
  const getButtonVisibilityClass = (count: number) => {
    if (count <= 1) return "hidden";
    if (count === 2) return "sm:hidden";
    if (count === 3) return "md:hidden";
    if (count === 4) return "lg:hidden";
    return ""; // Always show button for 5+ items
  };

  // Truncates to exactly one row based on the active Tailwind breakpoint
  const getItemVisibilityClass = (index: number, expanded: boolean) => {
    if (expanded) return "";
    if (index === 0) return "";
    if (index === 1) return "hidden sm:block";
    if (index === 2) return "hidden md:block";
    if (index === 3) return "hidden lg:block";
    return "hidden"; // Hide item 5 and beyond by default
  };

  const showButton = items.length > 1;

  return (
    <div className="border-b border-slate-200 pb-12 last:border-0">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-medium leading-6 tracking-tight text-white md:leading-none">
          {title}
        </h2>
        {showButton && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 ${getButtonVisibilityClass(items.length)}`}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={index} className={getItemVisibilityClass(index, isExpanded)}>
            <ProjectImage src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-24 pb-24">
      {/* Header */}
          <title>Design | Siddhanth Bhat</title>

      <GridWrapper>
        <h1 className="mx-auto font-serif mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A Collection of my Artwork
        </h1>
      </GridWrapper>

      {/* SECTION 1: Photos (Grouped by Albums) */}
      <GridWrapper className="space-y-12 px-10">
        {albums.map((album) => (
          <ExpandableGrid 
            key={album.title} 
            title={album.title} 
            items={album.images.map((img, i) => ({ 
              src: img, 
              alt: `${album.title} photo ${i + 1}` 
            }))} 
          />
        ))}
      </GridWrapper>

      {/* SECTION 2: Posters */}
      <GridWrapper className="px-10">
        <ExpandableGrid 
          title="Posters" 
          items={posters.map((poster) => ({ 
            src: poster.image, 
            alt: poster.title 
          }))} 
        />
      </GridWrapper>
    </div>
  );
}