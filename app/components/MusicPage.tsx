"use client"; // Add this to the very top if using Next.js App Router

import { BorderCard } from "@/app/components/BorderCard";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { hardwareData, softwareData } from "app/data/toolbox";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { useState } from 'react';
import { GridWrapper } from "@/app/components/GridWrapper";
import { AlbumBento } from "../components/Album1Bento";
import { Album2Bento } from "../components/Album2Bento";
import { Album3Bento } from "../components/Album3Bento";

// Assuming AlbumBento is imported here
// import AlbumBento from './AlbumBento'; 

export default function ToolboxPage() {
  // This is the line that defines showTracks!
  const [showTracks1, setShowTracks1] = useState(false);
  const [showTracks2, setShowTracks2] = useState(false);
  const [showTracks3, setShowTracks3] = useState(false);

  return (
    <div className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10 mb-6">
          
          {/* LEFT SIDE: Album Bento */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-8">
            <AlbumBento />
          </div>

          {/* RIGHT SIDE: SoundCloud Embeds */}
          <div className="flex flex-col gap-4 md:col-span-7 lg:col-span-8">
            
            {/* Mobile Dropdown Button */}
            <button
              onClick={() => setShowTracks1(!showTracks1)}
              className="flex w-full items-center justify-between rounded-xl bg-neutral-100 p-4 text-left font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 md:hidden"
            >
              <span>{showTracks1 ? 'Hide Tracks' : 'View Tracks'}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
                  showTracks1 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Tracks Container */}
            <div className={`${showTracks1 ? 'flex' : 'hidden'} flex-col md:flex`}>
              <div className="left: 0; width: 100%; height: 166px; position: relative;">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2290809392%3Fsecret_token%3Ds-1DywG8CtKm3&color=%235c8cb4&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe></div>
              <iframe src="https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2290809395&show_artwork=false&secret_token=s-Mpyo9DxMU3r&show_comments=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2290809389%3Fsecret_token%3Ds-OM37AG8A2MW&color=%239ad1ae&auto_play=false&hide_related=false&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
            </div>
        
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10">
          
          {/* LEFT SIDE: Album Bento */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-8">
            <Album2Bento />
          </div>

          {/* RIGHT SIDE: SoundCloud Embeds */}
          <div className="flex flex-col gap-4 md:col-span-7 lg:col-span-8">
            
            {/* Mobile Dropdown Button */}
            <button
              onClick={() => setShowTracks2(!showTracks2)}
              className="flex w-full items-center justify-between rounded-xl bg-neutral-100 p-4 text-left font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 md:hidden"
            >
              <span>{showTracks2 ? 'Hide Tracks' : 'View Tracks'}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
                  showTracks2 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Tracks Container */}
            <div className={`${showTracks2 ? 'flex' : 'hidden'} flex-col md:flex`}>
              <div className="left: 0; width: 100%; height: 166px; position: relative;">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2291553425&color=%23ff6d6d&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe></div>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2291553428&color=%236fbaba&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2291553431&color=%23366ed1&auto_play=false&hide_related=false&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
            </div>
        
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-10">
          
          {/* LEFT SIDE: Album Bento */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-8">
            <Album3Bento />
          </div>

          {/* RIGHT SIDE: SoundCloud Embeds */}
          <div className="flex flex-col gap-4 md:col-span-7 lg:col-span-8">
            
            {/* Mobile Dropdown Button */}
            <button
              onClick={() => setShowTracks3(!showTracks3)}
              className="flex w-full items-center justify-between rounded-xl bg-neutral-100 p-4 text-left font-semibold text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 md:hidden"
            >
              <span>{showTracks3 ? 'Hide Tracks' : 'View Tracks'}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-200 ${
                  showTracks3 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Tracks Container */}
            <div className={`${showTracks3 ? 'flex' : 'hidden'} flex-col md:flex`}>
              <div className="left: 0; width: 100%; height: 166px; position: relative;">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047129%3Fsecret_token%3Ds-TF1dJZEi3he&color=%23835ac4&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe></div>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047138%3Fsecret_token%3Ds-IoIGai2zYbv&color=%23835ac41&auto_play=false&hide_related=false&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047126%3Fsecret_token%3Ds-sX0QMImOklz&color=%23a7db88&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047141%3Fsecret_token%3Ds-fe9YU4z5wf4&color=%2317998a&auto_play=false&hide_related=false&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047135%3Fsecret_token%3Ds-oNQLTIUFIgq&color=%23db2b55&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047132%3Fsecret_token%3Ds-iOjcRjjjqtI&color=%236d86db&auto_play=false&hide_related=false&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047144%3Fsecret_token%3Ds-VSau0MNzpFe&color=%236dc7db&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
              <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2295047123%3Fsecret_token%3Ds-eGaTuUxrrUO&color=%2367cc28&show_comments=false&show_artwork=false" className="top: 0 left: 0 w-full min-height: 166px;  position: absolute; border: 0;" allowFullScreen></iframe>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
