"use client";
import { ShadowBox } from "@/app/components/ShadowBox";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Button } from "@/app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { PageSection } from "../components/PageSection";
import { ContentLink } from "../components/ContentLink";
import { VideoCard } from "../components/VideoCard";
import { motion } from "framer-motion";
import { BlogPostCard } from "../components/research-card"; 

interface Talk {
  title: string;
  description: string;
  event: string;
  url?: string;
}
const posts = [
  {
    tag: 'ArXiv',
    date: 'ON OCT 4, 2024',
    title: 'Mathematical formalism for memory compression in selective state space models',
    description: 'Formalizing the trade-off between memory efficiency and information retention to analyse theoretical bounds on the amount of information that can be compressed without sacrificing model performance.',
    href: 'https://arxiv.org/abs/2410.03158',
  },
  {
    tag: 'Elsevier Discover Computing',
    date: 'ON MAY 27, 2026',
    title: 'Variational inference for pattern extraction and recognition in genome sequences using state space models for cancer detection',
    description: 'A novel deep-learning framework for cancer-causing mutation detection from genomic data',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QQ0yGDkAAAAJ&citation_for_view=QQ0yGDkAAAAJ:KlAtU1dfN6UC',
  },
  {
    tag: 'IEEE ACCESS',
    date: 'ON OCT 3, 2025',
    title: 'StructMamba: Structured Harmonic and Temporal Music Analysis via Dual-Axis Mamba and Attention',
    description: 'A dual-axis deep learning architecture that unifies state-space modeling with global two-dimensional attention.',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QQ0yGDkAAAAJ&citation_for_view=QQ0yGDkAAAAJ:kNdYIx-mwKoC',
  },
  
];

const featuredPost = {
    tag: 'IEEE ACCESS',
    date: '2024',
    title: 'MGU-V: a deep learning approach for lo-fi music generation using variational autoencoders with state-of-the-art performance on combined MIDI datasets',
    description: 'A new framework for generating Lo-Fi music using a hybrid approach combining Long Short-Term Memory (LSTM) networks and Variational Autoencoders (VAEs) capable of producing high-quality music by learning from a curated MIDI dataset',
    href: 'https://ieeexplore.ieee.org/abstract/document/10701541',
    imageUrl: 'https://images.pexels.com/photos/2480397/pexels-photo-2480397.jpeg',
    readMoreText: 'Read More',
};

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for child items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
const talksAndPresentations: Talk[] = [
  {
    title: "1. Construction of an Automatic Music Content Generation Model Based on Long Short-Term Memory Network",
    description:
      "X Chen - International Journal of Computational Intelligence, 2026 - Springer",
    event: "",
    url: "https://link.springer.com/article/10.1007/s44196-025-01077-y",
  },
  {
    title: "2. AIGC-driven traditional music composition and cultural context adaptation studies",
    description:
      "Q Huang - Multimedia Systems, 2026 - Springer",
    event: "",
    url: "https://link.springer.com/article/10.1007/s00530-026-02373-z",
  },
  {
    title: "3. TLFGMRU-based automatic music generation and optimal refinement using YQ-Wtd-Fuzzy with robot technology",
    description:
      "Y Huang - Journal of the Chinese Institute of Engineers, 2026 - Taylor & Francis",
    event: "",
    url: "https://www.tandfonline.com/doi/abs/10.1080/02533839.2026.2659722",
  },
   {
    title: "4. Enhancing emotional expression in algorithmic music composition systems using reinforcement learning",
    description:
      "P Xiao - Journal of Computational Methods in Sciences, 2025",
    event: "",
    url: "https://journals.sagepub.com/doi/abs/10.1177/14727978251352150",
  },
   {
    title: "5. Polyphonic music melody generation model based on inverse reinforcement learning algorithm",
    description:
      "H Yan, X Feng, Z Liu - International Journal of Information, 2026 - inderscienceonline",
    event: "",
    url: "https://www.inderscienceonline.com/doi/abs/10.1504/IJICT.2026.153005",
  },
   {
    title: "6. Research on AI music generation and melody optimization based on topological sorting algorithm",
    description:
      "Q Liu - J. COMBIN. MATH. COMBIN. COMPUT, 2025 - combinatorialpress.com",
    event: "",
    url: "https://combinatorialpress.com/article/jcmcc/Volume%20127/Volume%20127a/Research%20on%20AI%20music%20generation%20and%20melody%20optimization%20based%20on%20topological%20sorting%20algorithm.pdf",
  },
  {
    title: "7. From s4 to mamba: A comprehensive survey on structured state space models",
    description:
      "S Somvanshi et. al., ArXiv 2025",
    event: "",
    url: "https://www.researchgate.net/profile/Shriyank-Somvanshi/publication/390176387_From_S4_to_Mamba_A_Comprehensive_Survey_on_Structured_State_Space_Models/links/68f0670ef3032e2b4be98728/From-S4-to-Mamba-A-Comprehensive-Survey-on-Structured-State-Space-Models.pdf",
  },
   {
    title: "8. FDMamba-Net: Feature-Decoupled Mamba Network for Efficient Flight Trajectory Prediction",
    description:
      "J Tao, T Xu, J Fang, J Xu, Y Liu, Y Liu - International Conference on Intelligent Computing, 2025 - Springer",
    event: "",
    url: "https://link.springer.com/chapter/10.1007/978-981-96-9952-0_39",
  },
   {
    title: "9. SDN 环境下双阶段 DDoS 攻击检测方法",
    description:
      "包晓安， 范云龙， 涂小妹， 胡天缤， 张娜， 吴彪 - 电信科学, 2026 - telecomsci.com",
    event: "",
    url: "https://www.telecomsci.com/zh/article/doi/10.11959/j.issn.1000-0801.2026018/",
  }
];

export default function SpeakingPage() {
  return (
    <div className="relative">
          <title>Research | Siddhanth Bhat</title>
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Featured Post */}
      <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mb-8 md:mb-12">
        <BlogPostCard
          variant="featured"
          {...featuredPost}
        />
      </motion.div>

      {/* Grid of Default Posts */}
      <motion.div 
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post, index) => (
          <motion.div key={index} variants={itemVariants}>
            <BlogPostCard {...post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
      <div className="relative space-y-16">
        
        

        <div className="relative space-y-32 mt-12">
          <div className="space-y-16 ">
            <PageSection title={<h2>Patents</h2>} >
            <div className="mt-8 max-w-3xl">
              <div className="group relative flex flex-col overflow-hidden rounded-lg text-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md ">
                
                {/* Meta info: Status, Date, Patent Number */}
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-muted-foreground sm:gap-4">
                  <span className="rounded-full bg-primary/10 py-1 text-primary">Granted</span>
                  <span>28th Feb 2025</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50"></span>
                    202511013619 A
                  </span>
                </div>

                {/* Patent Title */}
                <h3 className="mb-3 text-xl font-bold leading-tight text-foreground lg:text-2xl">
                 Transformer-based Model Leveraging Customized Autoregression on Semantic Word Insight
                </h3>
                
                {/* Patent Abstract / Description */}
                <p className="mb-6 text-muted-foreground">
                  This patent introduces a novel approach to optimizing transformer-based architectures to semantically categorize news articles.
                </p>

                {/* External Link */}
                <div className="mt-auto">
                  <a 
                    href="https://github.com/SiddhanthBhat/SiddhanthBhat/blob/main/Intellectual%20Property%20India-SWIFT%5B1%5D.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 group-hover:underline"
                  >
                    View Patent Details
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
              </div>
            </div>
          </PageSection>

            <PageSection title={<h2>Derivative Works</h2>}>
              <div className="mt-8 max-w-2xl space-y-10 text-balance">
                {talksAndPresentations.map((talk) => (
                  <ContentLink
                    key={talk.title}
                    title={talk.title}
                    description={talk.description}
                    href={talk.url}
                  />
                ))}
              </div>
            </PageSection>

           
          </div>

          {/* Biography */}
          <GridWrapper>
            <section className="relative px-4">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <div className="relative col-span-7 flex flex-col space-y-8">
                  {/* Title */}
                  <div className="col-span-5 flex w-3/4 flex-col items-start space-y-3 text-balance">
                    <div className="text-left text-sm font-medium text-blue-500">
                      <span>Get in touch</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-text-primary">
                      I'm always looking to collaborate!
                    </h2>
                  </div>

                  <Tabs defaultTab="first-person">
                    <TabPanels className="mt-1">
                      <TabPanel id="first-person">
                        <p className="text-base leading-7 text-text-secondary pb-6">
                         If you want to talk about potential collaborations, have questions, or just want to say Hi. You can find me on LinkedIn and I&apos;ll be happy to connect with you and explore potential opportunities to work together.
                        </p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
            </section>
          </GridWrapper>
        </div>

        
      </div>
    </div>
  );
}
