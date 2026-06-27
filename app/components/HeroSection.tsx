"use client"

import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="pt-12 pb-6 w-full flex justify-center items-center px-4 md:px-6">
      <div 
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px]  bg-card shadow-sm min-h-[600px] flex flex-col items-center justify-center duration-500">
          
          {/* Animated Background */}
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#3B82F6"  // Accent - adjust this hex to match your brand!
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Status Badge */}
            {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-600/20 bg-indigo-600/10 px-4 py-1.5 text-sm font-medium text-indigo-600 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              AI/ML Researcher & TPM
            </div> */}

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-text-primary mb-8 leading-[1.05]">
              Hey, I&apos;m Siddhanth!
            </h1>
            
            {/* Description */}
            <p className="text-text-secondary font-mono text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
              I&apos;m a Technical Product Manager specialising in Transformer architectures, Deep Learning, and App Development & an AI researcher with multiple contributions to Q1 journals in IEEE and Elsevier with a patent in Transformer-based models and  Deep Neural Networks.
            </p>

            {/* Button */}
            {/* You can wrap this in a Next.js <Link> if it needs to route somewhere */}
            <img className="h-[15vh]" src="/profileNobg.png">
            </img>
            
          </div>
        </div>
      </div>
    </section>
  )
}