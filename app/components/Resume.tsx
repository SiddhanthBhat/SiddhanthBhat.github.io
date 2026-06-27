import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Formetry Labs",
      period: "Feb 2024 - Present",
      positions: [
        {
          title: "Technical Product Manager | Founders Office",
          description: [
            "Drove the product roadmap for an AI-powered Knowledge Management System, delivering semantic search, summarization, and TTS features for 16 remote client teams via Agile methodologies.",
            "Directed the integration of Transformer-based NLP models and vector databases, scaling the platform to 2,500+ monthly active users with continuous integration and deployment pipelines.",
            "Spearheaded a reinforcement-based re-prompting framework that reduced factual inconsistencies in model outputs by 25%, improving reliability across benchmark datasets and user satisfaction.",
            "Created and managed a self hosted multi-agent workflow automation via n8n and oversaw the full-stack deployment of two production applications from prototype to release.",
            "Secured over $250,000 in seed funding and infrastructure support from investors including Google & NVIDIA.",

          ],
        },
        {
          title: "Software Development Engineer and Researcher",
          description: [
            "Worked at the Research team at Formetry Labs to review and document the latest papers in the field to update in-house models and solution methodologies.",
            "Managed plans to build the frontend stack along with supplementary requirements in DevOps and codebase repository management."
            
          ],
        },
      ],
    },
    {
      company: "Manipal University",
      period: "Mar 2023 - Feb 2024",
      positions: [
        {
          title: "Student Research Assistant",
          description: [
            "Pioneered research on GAN and State Space Model (SSM) architectures for novel image generation and analysis, music production and genome sequencing directly contributing to 3 publications in Q1 peer-reviewed journals.",
            "Engineered and deployed Large Language Transformers and Autoencoder-based neural networks for text classification, achieving state of the art accuracy on proprietary datasets.",
            "Executed end-to-end exploratory data analysis, literature review and visualisation across large-scale, multi-domain datasets to support the experimental validation of 9 distinct research papers.",
          ],
        },
      ],
    },
    {
      company: "MuSigma",
      period: " June 2023 - Jul 2023",
      positions: [
        {
          title: "SDE Intern",
          description: [
            "Developed and designed a responsive React-based web dashboard to visualize key metrics for a major client initiative targeting a 20% revenue growth.",
            "Conducted data analysis and extensive data wrangling using Python libraries to clean, optimize, and structure legacy client datasets.",
            "Attended 3 client presentations and strategy meetings and contributed to pitch sessions to refine proposals.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/profileNobg.png",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl text-blue-500 font-bold">{experience.company}</h3>
                  <p className="text-sm text-white">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg text-blue-500 font-bold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-white">
                            ◦ {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
