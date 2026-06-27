import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AboutMeBento } from "./components/AboutMeBento";
import { GridWrapper } from "./components/GridWrapper";
import { BeamsBackground } from "./components/beams-background";
import clsx from "clsx";

// 1. Import your new Hero Component
import { HeroSection } from "./components/HeroSection"; 

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  return (
    <section>
          <title>Home | Siddhanth Bhat</title>

      <div className="mt-6 space-y-10 md:mt-12 md:space-y-16 bg-transparent">
        
        {/* 2. Replace the old 70vh section with your new Hero */}
        <HeroSection />

        {/* 3. Keep everything below EXACTLY the same */}
        {/* About Section */}
        <section className="relative space-y-8 md:space-y-10">
          <div className="">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span></span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg font-serif text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Get in touch with me here
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span></span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-serif font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                Links to my Corners on the Web
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                <ChangelogBento />
              </span>
              <SpeakingBento />
              <CommunityWallBento />
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter Section */}
        <section>

        </section>
      </div>
    </section>
  );
}