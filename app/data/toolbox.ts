type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

type SocialDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const socialData: SoftwareDataItem[] = [
  {
    title: "Scholar",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/960px-Google_Scholar_logo.svg.png",
    link: "",
  },
  {
    title: "Medium",
    imgSrc: "https://images.icon-icons.com/3041/PNG/512/medium_logo_icon_189223.png",
    link: "https://arc.net/",
  },
  {
    title: "Spotify",
    imgSrc: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    link: "https://arc.net/",
  },
  {
    title: "SoundCloud",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek9FD42uGUbMrElImrlEX5x1_OEVXXBuz2pcdKHawl-lnNhHC8y0mwbg&s=10",
    link: "https://arc.net/",
  },
];

const softwareData: SoftwareDataItem[] = [
  {
    title: "Raycast",
    imgSrc: "https://miro.medium.com/1*ThvbH5hKHEM4jpuAqRNfBQ.png",
    link: "",
  },
  {
    title: "Zen",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Zen_Browser_logo_%28red_circles%29.svg/1280px-Zen_Browser_logo_%28red_circles%29.svg.png",
    link: "https://arc.net/",
  },
  {
    title: "Manim",
    imgSrc: "https://www.manim.community/logo.svg",
    link: "https://www.manim.community/",
  },
  {
    title: "Handbrake",
    imgSrc: "https://handbrake.fr/img/logo.png",
    link: "https://handbrake.fr/",
  },
  {
    title: "Obsidian",
    imgSrc: "/obsidian_logo.png",
    link: "https://obsidian.md/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "KdenLive",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybHti488Ml8epQmfPBkthkrGwQVu3QdZXrw&s",
    link: "https://try.tana.inc/66bqr1sp5wkb",
  },
  {
    title: "Ghostty",
    imgSrc: "https://i.pinimg.com/736x/2d/9c/59/2d9c598b15fab5a944b82669060c62f7.jpg",
    link: "https://ghostty.org/",
  },
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "MIXXX",
    imgSrc: "https://mixxx.org/theme/images/mixxx-logo.svg",
    link: "https://mixxx.org/",
  },
  {
    title: "DarkTable",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aTGEDkwswmw9_n3Hkfy-LjUivEtmBNreAg&s",
    link: "https://www.darktable.org",
  },
  {
    title: "Bitwarden",
    imgSrc: "https://avatars.githubusercontent.com/u/15990069?s=200&v=4",
    link: "https://bitwarden.com/en-gb/",
  },
  {
    title: "Framer",
    imgSrc: "/framer_logo.png",
    link: "https://www.framer.com/",
  },
  {
    title: "Cleanshot X",
    imgSrc: "/cleanshotx_logo.png",
    link: "https://getcleanshot.com/",
  },
  {
    title: "PixelSnap 2",
    imgSrc: "/pixelsnap2_logo.png",
    link: "https://getpixelsnap.com/",
  },
  {
    title: "Linear",
    imgSrc: "/linear_logo.png",
    link: "https://linear.app/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "MGU-V",
    description:
      "MGU-V is a deep learning-based framework for generating Lo-Fi music using a hybrid approach combining Long Short-Term Memory (LSTM) networks and Variational Autoencoders (VAEs). This model is capable of producing high-quality music by learning from a curated MIDI dataset",
    link: "https://github.com/SiddhanthBhat/MGU-V",
  },
  {
    title: "SWIFT",
    description:
      "Tailored Autoregression using Semantic Word Insight for Transformers for single-label semantic classification on the combined dataset of BBC All Time and Reuters News.",
    link: "https://github.com/SiddhanthBhat/SWIFT",
  },
  {
    title: "VIPER",
    description: "This repository contains the official reference implementation for the paper: Variational Inference for Pattern Extraction and Recognition in Genome Sequences using State Space Models for Cancer Detection",
    link: "https://github.com/SiddhanthBhat/viper-genomics",
  },
  {
    title: "DRIVE",
    description:
      "A lightweight, USB-bootable operating system designed for system diagnostics, file recovery, and hardware troubleshooting.",
    link: "https://github.com/SiddhanthBhat/DRIVE",
  },
  {
    title: "sRELU",
    description:
      "A standing desk frame in a white finish. Topped with the IKEA Karlby tabletop, the desk measures almost 9’ wide, providing lots of space.",
    link: "https://www.autonomous.ai/standing-desks/diy-smart-desk-kit?option_code=DiySmartDeskKit-FrameSmartDesk2_DeskFrame.White,Model.Proframe",
  },
  {
    title: "Podcaster",
    description:
      "A dynamic mic that captures detail like a condenser without the noise, Wave DX is a remarkable feat of audio engineering.",
    link: "https://www.elgato.com/us/en/p/wave-dx-dynamic-microphone",
  },
  {
    title: "Project 1",
    description:
      "Iconic Stream Deck tech with customizable LCD keys, dials, and touch strip.",
    link: "https://www.elgato.com/us/en/p/stream-deck-plus-black",
  },
  {
    title: "Project 2",
    description:
      "Ultra-bright and dimmable. Space-saving and built to last. App-controlled and destined to evolve with you.",
    link: "https://www.elgato.com/us/en/p/key-light",
  },
  {
    title: "Website",
    description:
      "The work in progress Repo building this website",
    link: "https://github.com/siddhanthbhat.github.io",
  },
];

export { hardwareData, softwareData, socialData };
