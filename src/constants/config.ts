type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    social: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Barış B — 3D Portfolio",
    fullName: "Barış Bağcı",
    email: "mail@barisbagci.com",
  },
  hero: {
    name: "Barış Bağcı",
    p: ["I develop games with Unity and Unreal Engine, Creating virtual environments where brands can show their products. I am looking forward to developing new technologies.cations"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled Unity developer with experience in WebGL and games, 
      I used technologies like augmented reality and Three.js. 
      I'm a quick learner and collaborate closely with clients to create efficient, 
      scalable, and user-friendly solutions that solve real-world problems. 
      Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    social: {
      p: "Other social accounts",
      h2: "Socials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through real-world examples of my work. 
      Each project is briefly described with links to code repositories and live demos in it. 
      It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
    },
  },
};
