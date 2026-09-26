/**
 * Game Portfolio - Projects Data
 * 
 * You can easily add, edit, or remove games by modifying this file.
 * Each project contains metadata, media references, and technical breakdown.
 */

export const projects = [
  {
    id: "chronoshift-odyssey",
    title: "ChronoShift: Odyssey",
    tagline: "Fast-paced 3D sci-fi action roguelike featuring time-reversal mechanics",
    category: "unreal", // unreal | unity | godot | jam | tool
    tags: ["Unreal Engine 5", "C++", "Blueprints", "Action Roguelike", "PC / Steam"],
    engine: "Unreal Engine 5.3",
    role: "Lead Gameplay Programmer & Systems Designer",
    year: "2024",
    status: "In Early Access",
    featured: true,
    thumbnail: "assets/images/project-chronoshift.svg",
    banner: "assets/images/project-chronoshift.svg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    itchEmbedUrl: "",
    steamUrl: "https://store.steampowered.com",
    itchUrl: "https://itch.io",
    githubUrl: "https://github.com",
    quickStats: [
      { label: "Engine", value: "UE 5.3" },
      { label: "Language", value: "C++ / Blueprints" },
      { label: "Team Size", value: "4 Developers" },
      { label: "Duration", value: "14 Months" }
    ],
    summary: `ChronoShift is an adrenaline-fueled third-person action roguelike where players manipulate temporal mechanics to outmaneuver adaptive robotic adversaries in a decaying cyberpunk metropolis.`,
    highlights: [
      "Designed and implemented custom deterministic rewind buffer recording position, state, and animation frames at 60 FPS.",
      "Engineered an asynchronous enemy AI coordinator using Unreal's StateTree and EQS (Environment Query System).",
      "Created custom Niagara particle systems for temporal distortions and shockwave warp effects.",
      "Optimized CPU thread pool utilization, sustaining rock-solid 60 FPS with 150+ concurrent physics-driven entities."
    ],
    techBreakdown: {
      architecture: "Modular C++ gameplay framework leveraging Gameplay Ability System (GAS) for attributes, cooldowns, and status effects.",
      ai: "Hierarchical behavior trees combined with Perception Component listening to sound waves and visual stimuli.",
      physics: "Custom physics trace prediction algorithms for high-speed projectile deflection and bullet-time collision resolution.",
      optimization: "Nanite and Lumen asset budgeting, instanced static meshes for urban foliage/debris, and profiling with Unreal Insights."
    }
  },
  {
    id: "aetheria-echoes",
    title: "Echoes of Aetheria",
    tagline: "Atmospheric puzzle adventure featuring volumetric light puzzles and gravity shifting",
    category: "unity",
    tags: ["Unity", "C#", "HLSL / Shader Graph", "Puzzle Adventure", "PC / Console"],
    engine: "Unity 2023 LTS (URP)",
    role: "Solo Developer",
    year: "2023",
    status: "Released",
    featured: true,
    thumbnail: "assets/images/project-aetheria.svg",
    banner: "assets/images/project-aetheria.svg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    itchEmbedUrl: "",
    steamUrl: "https://store.steampowered.com",
    itchUrl: "https://itch.io",
    githubUrl: "https://github.com",
    quickStats: [
      { label: "Engine", value: "Unity 2023 LTS" },
      { label: "Language", value: "C# & HLSL" },
      { label: "Role", value: "Solo Dev" },
      { label: "Duration", value: "8 Months" }
    ],
    summary: `Awaken in an ancient floating sanctuary forgotten by time. Manipulate prism light beams, align celestial mirrors, and invert gravity fields to restore power to dormant monoliths.`,
    highlights: [
      "Built custom raymarching shader in HLSL to calculate dynamic volumetric light scattering and colored crystal refraction.",
      "Programmed a continuous 6-degree-of-freedom gravity system that allows walking on spherical and arbitrary geometric surfaces.",
      "Wrote an intuitive modular node-based puzzle sequencer for level designers.",
      "Scored 92% positive reviews on itch.io and featured in the Unity Creator Spotlight."
    ],
    techBreakdown: {
      architecture: "Event-driven architecture using ScriptableObject architecture patterns to eliminate tight coupling.",
      graphics: "Custom Universal Render Pipeline (URP) render features for refractive crystal caustics and screen-space ambient occlusion.",
      audio: "Integrated FMOD Studio with dynamic stem fading depending on proximity to puzzle elements."
    }
  },
  {
    id: "hyper-overdrive",
    title: "Hyper Overdrive 2088",
    tagline: "High-octane arcade synthwave anti-gravity racer with responsive physics",
    category: "godot",
    tags: ["Godot 4", "GDScript", "Arcade", "Soundtrack Sync", "Itch.io"],
    engine: "Godot 4.2",
    role: "Gameplay & Physics Programmer",
    year: "2023",
    status: "Playable on Web / Itch",
    featured: true,
    thumbnail: "assets/images/project-overdrive.svg",
    banner: "assets/images/project-overdrive.svg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    itchEmbedUrl: "",
    itchUrl: "https://itch.io",
    githubUrl: "https://github.com",
    quickStats: [
      { label: "Engine", value: "Godot 4.2" },
      { label: "Language", value: "GDScript / C++" },
      { label: "Platforms", value: "Web / Windows" },
      { label: "Duration", value: "4 Months" }
    ],
    summary: `Inspired by F-Zero and Wipeout, Hyper Overdrive delivers blistering anti-gravity racing where your vehicle's speed and boost meters pulse in exact synchronization with 140 BPM synthwave tracks.`,
    highlights: [
      "Crafted custom raycast suspension physics providing snappy arcade drift mechanics while preventing track clipping at 400+ km/h.",
      "Implemented real-time audio FFT spectrum analysis in Godot to synchronize track neon pulses and obstacles with music frequencies.",
      "Packaged seamless WebGL export running smoothly in all desktop browsers at 60 FPS."
    ],
    techBreakdown: {
      physics: "RigidBody3D with 4-point raycast hover spring dampers and angular velocity clamping.",
      networking: "Global online leaderboard integration via lightweight REST API."
    }
  },
  {
    id: "neon-roots",
    title: "Rootbound: Cyber Sanctuary",
    tagline: "Winner of Global Game Jam - Symbiotic nature meets cybernetic underground",
    category: "jam",
    tags: ["Game Jam Winner", "Unity", "C#", "Top-Down Strategy", "48-Hour Jam"],
    engine: "Unity 2022",
    role: "Lead Programmer & Tech Artist",
    year: "2024",
    status: "Jam 1st Place",
    featured: false,
    thumbnail: "assets/images/project-neonroots.svg",
    banner: "assets/images/project-neonroots.svg",
    trailerUrl: "",
    itchUrl: "https://itch.io",
    githubUrl: "https://github.com",
    quickStats: [
      { label: "Timeframe", value: "48 Hours" },
      { label: "Rank", value: "1st Place Overall" },
      { label: "Team", value: "3 Developers" },
      { label: "Category", value: "Game Jam" }
    ],
    summary: `Developed in 48 hours for the Global Game Jam under the theme 'Make Me Laugh / Roots'. Guide bioluminescent roots through subterranean cybernetic ruins while hacking defense grids.`,
    highlights: [
      "Conceived, coded, and balanced core grid-expansion mechanics from scratch in under 36 hours.",
      "Created a generative root mesh extrusion algorithm creating organic procedural branching in real time.",
      "Voted #1 Best Visuals and #1 Overall out of 350+ regional entries."
    ],
    techBreakdown: {
      generation: "Procedural curve mesh generation through runtime mesh vertex updates with minimal garbage collection overhead."
    }
  },
  {
    id: "vfx-shader-toolkit",
    title: "NovaShader: Stylized VFX Suite",
    tagline: "Open-source stylized rendering toolkit for game artists & technical developers",
    category: "tool",
    tags: ["HLSL", "GLSL", "Shaders", "Open Source", "Unity / Unreal"],
    engine: "Cross-Engine (HLSL / Compute)",
    role: "Technical Artist / Author",
    year: "2024",
    status: "Open Source (1.2k Stars)",
    featured: false,
    thumbnail: "assets/images/project-novashader.svg",
    banner: "assets/images/project-novashader.svg",
    githubUrl: "https://github.com",
    quickStats: [
      { label: "Language", value: "HLSL / Compute" },
      { label: "Compatibility", value: "UE5 & Unity URP" },
      { label: "Stars", value: "1.2k+ GitHub" },
      { label: "License", value: "MIT" }
    ],
    summary: `A production-ready collection of high-performance stylized surface and screen-space shaders including anime water caustics, cel-shading with variable thickness outlines, holographic glimmers, and interactive grass displacement.`,
    highlights: [
      "Inverse hull & Sobel filter outline post-processing passes with zero depth artifacts.",
      "Interactive compute-shader driven foliage displacement responding to arbitrary point impulses.",
      "Over 1,200 GitHub stars and adopted by indie studios worldwide."
    ],
    techBreakdown: {
      shaders: "Single-pass forward-compatible HLSL shaders with LOD fallbacks for low-end mobile hardware."
    }
  }
];

export const skillsData = {
  engines: [
    { name: "Unreal Engine 5", level: "Advanced", icon: "ue", detail: "C++, Blueprints, Niagara, GAS, Nanite/Lumen, StateTree" },
    { name: "Unity", level: "Expert", icon: "unity", detail: "C#, URP/HDRP, Shader Graph, Addressables, DOTS/ECS" },
    { name: "Godot 4", level: "Proficient", icon: "godot", detail: "GDScript, C#, 2D/3D physics, lightweight web deployment" }
  ],
  languages: [
    { name: "C++", level: "90%", desc: "Memory management, multi-threading, custom engine systems, templates" },
    { name: "C#", level: "95%", desc: "Modern .NET, async/await, Unity architecture, clean code principles" },
    { name: "HLSL / GLSL", level: "85%", desc: "Surface shaders, post-processing, compute kernels, lighting models" },
    { name: "Python", level: "80%", desc: "Blender/Maya scripting, automated pipeline tools, asset verification" },
    { name: "GDScript", level: "85%", desc: "Rapid prototyping, custom node controllers" }
  ],
  disciplines: [
    {
      category: "Gameplay Systems",
      icon: "gamepad",
      skills: ["Character Controllers & State Machines", "Inventory & Ability Systems (GAS)", "Quest & Dialog Trees", "Camera & Cinemachine Controls"]
    },
    {
      category: "AI & NPC Systems",
      icon: "cpu",
      skills: ["Behavior Trees & Blackboard", "NavMesh & Dynamic Pathfinding", "Environment Query System (EQS)", "Perception & Sensory Audio/Sight"]
    },
    {
      category: "Tech Art & Shaders",
      icon: "sparkles",
      skills: ["Stylized & PBR Shaders (HLSL)", "VFX (Niagara & Unity VFX Graph)", "Blender Modeling & Rigging", "Substance 3D Procedural Textures"]
    },
    {
      category: "Performance & Tools",
      icon: "gauge",
      skills: ["Profiling (Unreal Insights, Unity Profiler)", "Memory & Draw Call Optimization", "Perforce & Git LFS Pipelines", "Continuous Integration / Automated Builds"]
    }
  ]
};

export const bioData = {
  name: "Mateusz Szwarc",
  title: "Game Developer & Systems Architect",
  tagline: "Forging visceral game mechanics, robust engine systems, and immersive audiovisual worlds.",
  status: "Available for Full-time Roles & Select Indie Contracts",
  location: "Remote / Worldwide",
  experienceYears: "5+",
  shippedGames: "7+",
  gameJams: "12",
  bio: `I am an avid game developer with a deep passion for tight gameplay mechanics, responsive character feel, and rich technical art. With over 5 years of hands-on experience in Unreal Engine and Unity, I bridge the critical gap between imaginative game design and rock-solid system architecture. Whether developing time-rewind physics in C++, authoring custom HLSL compute shaders, or orchestrating complex AI behavior trees, I thrive on solving demanding technical challenges that make games truly memorable to play.`,
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "Itch.io", url: "https://itch.io", icon: "itch" },
    { name: "Steam", url: "https://store.steampowered.com", icon: "steam" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "ArtStation", url: "https://artstation.com", icon: "artstation" },
    { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
    { name: "Discord", url: "https://discord.com", icon: "discord" }
  ],
  email: "developer@example.com"
};
