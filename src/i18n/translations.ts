export type Locale = "pt" | "en" | "it";

export const locales: Locale[] = ["pt", "en", "it"];

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  it: "IT",
};

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  it: "Italiano",
};

export const contactInfo = {
  name: "Caroline Vantim",
  email: "cvantim@gmail.com",
  phone: "+55 19 99044-3862",
  linkedin: "https://www.linkedin.com/in/caroline-vantim",
  github: "https://github.com/CarolineVantim",
  city: "Araras, São Paulo",
};

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    sobre: string;
    habilidades: string;
    experiencia: string;
    projetos: string;
    formacao: string;
    contato: string;
  };
  hero: {
    greeting: string;
    headline: string;
    country: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  skills: {
    title: string;
    categories: { name: string; items: string[] }[];
    certificationsTitle: string;
    certifications: string[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  experience: {
    title: string;
    promotedLabel: string;
    jobs: {
      company: string;
      role: string;
      period: string;
      location: string;
      highlights: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  education: {
    title: string;
    items: { school: string; degree: string; period: string; description: string }[];
  };
  contact: {
    title: string;
    heading: string;
    subtitle: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: { rights: string };
}

const pt: Dictionary = {
  meta: {
    title: "Caroline Vantim — QA Engineer",
    description:
      "Portfólio de Caroline Vantim, QA Analyst especializada em automação de testes, API testing e Shift Left.",
  },
  nav: {
    sobre: "Sobre",
    habilidades: "Habilidades",
    experiencia: "Experiência",
    projetos: "Projetos",
    formacao: "Formação",
    contato: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou a ",
    headline: "QA Analyst | Quality Assurance Engineer | Test Automation | API Testing | PHP & Go",
    country: "Brasil",
    ctaPrimary: "Ver trajetória",
    ctaSecondary: "Falar comigo",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Sou a Caroline, QA Engineer com foco em garantir software de alta qualidade através de estratégias eficientes de testes manuais, automatizados e integração contínua. Tenho experiência prática em testes de aplicações Web, Mobile e APIs REST, além de atuação direta na definição de fluxos de teste e melhoria de processos de qualidade em times ágeis.",
      "Minha bagagem prévia como desenvolvedora (PHP e Golang) me dá um perfil técnico e analítico apurado: entendo a arquitetura, analiso o código e sei exatamente onde o software tende a falhar, o que facilita a comunicação com os times de engenharia.",
      "Atualmente, aplico e aprimoro continuamente práticas de BDD (Behavior-Driven Development) para aproximar as regras de negócio da automação de testes, além de consolidar esteiras de CI/CD para acelerar entregas, aumentar a cobertura de testes e reduzir o tempo de feedback nos ciclos de desenvolvimento.",
    ],
    stats: [
      { value: "6+", label: "anos de mercado de TI" },
      { value: "Suporte → Dev → QA", label: "trajetória de carreira" },
      { value: "API & Automação", label: "foco atual" },
    ],
  },
  skills: {
    title: "Habilidades técnicas",
    categories: [
      {
        name: "Qualidade & Testes",
        items: [
          "API Testing",
          "Testes Estáticos",
          "Shift Left",
          "Teste Manual (Web e Mobile)",
          "Automação de Testes",
          "Análise e Reporte de Bugs",
          "CI/CD",
        ],
      },
      { name: "Desenvolvimento", items: ["PHP", "Golang", "Laravel", "HTML & CSS"] },
      { name: "Dados & Infra", items: ["PostgreSQL", "MongoDB", "Docker", "WSL", "Git"] },
      { name: "Processos", items: ["Jira", "Metodologias Ágeis", "Documentação Técnica/Funcional"] },
    ],
    certificationsTitle: "Certificações",
    certifications: ["Computação em Nuvem Básico", "Inteligência Artificial Básico"],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário" },
      { name: "Italiano", level: "Básico" },
    ],
  },
  experience: {
    title: "Experiência profissional",
    promotedLabel: "Promoção",
    jobs: [
      {
        company: "Syonet",
        role: "Analista de Teste Junior",
        period: "maio de 2025 — atual",
        location: "Rio Grande do Sul, Brasil",
        highlights: [
          "Atuação focada em Quality Assurance, promovendo a cultura de Shift Left e a prevenção de falhas desde as fases iniciais do ciclo de desenvolvimento.",
          "Desenvolvimento e manutenção de testes automatizados na camada de API, garantindo maior cobertura e confiabilidade nas entregas.",
          "Mapeamento de regras de negócio e criação de documentação técnica/funcional de sistemas para apoio aos times de produto e engenharia.",
        ],
      },
      {
        company: "Picolotec Tecnologia",
        role: "Desenvolvedora Júnior",
        period: "agosto de 2022 — janeiro de 2025",
        location: "São Paulo, Brasil",
        highlights: [
          "Desenvolvimento e manutenção de aplicações backend utilizando PHP, Golang e Laravel.",
          "Construção e implementação de novas funcionalidades para otimização da experiência do usuário e evolução do produto.",
          "Atuação na resolução de incidentes e sustentação em N2, realizando diagnóstico de código e correção de bugs.",
          "Modelagem e manipulação de bancos de dados relacionais (PostgreSQL) e não relacionais (MongoDB).",
          "Gestão de fluxos de trabalho e chamados em metodologia ágil através do Jira.",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Analista de Desenvolvimento",
        period: "fevereiro de 2022 — agosto de 2022",
        location: "Araras, São Paulo, Brasil",
        highlights: [
          "Teste manual em sistemas web e mobile.",
          "Teste de API e análise de bugs.",
          "Sugestões de melhorias de produto.",
          "Customização de impressões (HTML e CSS).",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Analista de Sistema",
        period: "setembro de 2019 — agosto de 2022",
        location: "Araras e Região, Brasil",
        highlights: [
          "Atendimento ao cliente e suporte técnico.",
          "Treinamento de usuários no uso do sistema.",
          "Reporte de bugs para o time de desenvolvimento.",
        ],
      },
      {
        company: "Unimed",
        role: "Secretária",
        period: "janeiro de 2018 — abril de 2019",
        location: "Araras e Região, Brasil",
        highlights: [],
      },
    ],
  },
  projects: {
    title: "Projetos & cases",
    subtitle:
      "Destaques da minha atuação em qualidade. Cases mais detalhados (planos de teste, evidências, métricas) podem ser adicionados aqui conforme forem documentados.",
    items: [
      {
        title: "Automação de testes de API",
        description:
          "Desenvolvimento e manutenção de suítes de testes automatizados na camada de API na Syonet, ampliando a cobertura de regressão e reduzindo o tempo de validação manual a cada entrega.",
        tags: ["API Testing", "Automação", "CI/CD"],
      },
      {
        title: "Cultura de Shift Left",
        description:
          "Introdução de práticas de teste nas fases iniciais do ciclo de desenvolvimento, junto ao time de produto e engenharia, prevenindo falhas antes que cheguem a produção.",
        tags: ["Shift Left", "Processos", "Qualidade"],
      },
      {
        title: "Da sustentação ao teste estruturado",
        description:
          "Experiência prática combinando testes manuais e de API em sistemas web e mobile na ESL Sistemas, unindo conhecimento de suporte N2 com análise crítica de bugs.",
        tags: ["Teste Manual", "Teste de API", "Bug Analysis"],
      },
    ],
  },
  education: {
    title: "Formação acadêmica",
    items: [
      {
        school: "Fatec Araras — Antonio Brambilla",
        degree: "Curso Superior de Tecnologia (CST), Desenvolvimento de Software para Multiplataforma",
        period: "2021 — 2025",
        description:
          "Graduação tecnológica com foco no desenvolvimento de aplicações web, mobile e em nuvem, passando por engenharia de software, banco de dados e qualidade de software.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Técnico em Desenvolvimento de Sistemas",
        period: "2019 — 2020",
        description:
          "Curso técnico em lógica de programação, desenvolvimento de sistemas, modelagem de banco de dados e análise de requisitos.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Técnico em Informática para Internet",
        period: "2018 — 2019",
        description:
          "Meu primeiro contato com a área de TI: desenvolvimento web (HTML, CSS e JavaScript), design de interfaces e fundamentos de programação.",
      },
      {
        school: "AEHDA",
        degree: "Profissionalizante, Gestão de Qualidade",
        period: "2016",
        description:
          "Fundamentos de gestão da qualidade, como melhoria contínua (PDCA), padronização de processos e controle de qualidade, base que hoje aplico em QA de software.",
      },
    ],
  },
  contact: {
    title: "Contato",
    heading: "Vamos conversar sobre qualidade de software?",
    subtitle:
      "Estou aberta a oportunidades em QA, automação de testes e times de engenharia que valorizam qualidade desde o início do ciclo.",
    linkedinLabel: "LinkedIn",
    githubLabel: "Github",
  },
  footer: { rights: "Todos os direitos reservados." },
};

const en: Dictionary = {
  meta: {
    title: "Caroline Vantim — QA Engineer",
    description:
      "Portfolio of Caroline Vantim, QA Analyst specialized in test automation, API testing and Shift Left.",
  },
  nav: {
    sobre: "About",
    habilidades: "Skills",
    experiencia: "Experience",
    projetos: "Projects",
    formacao: "Education",
    contato: "Contact",
  },
  hero: {
    greeting: "Hi, I'm ",
    headline: "QA Analyst | Quality Assurance Engineer | Test Automation | API Testing | PHP & Go",
    country: "Brazil",
    ctaPrimary: "See my journey",
    ctaSecondary: "Get in touch",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I'm Caroline, a QA Engineer focused on ensuring high-quality software through efficient manual testing, automation, and continuous integration strategies. I have hands-on experience testing Web, Mobile, and REST API applications, as well as direct involvement in defining test flows and improving quality processes within agile teams.",
      "My previous background as a developer (PHP and Golang) gives me a sharp technical and analytical mindset: I understand the architecture, analyze the code, and know exactly where software tends to fail — which makes communication with engineering teams much easier.",
      "I currently apply and continuously refine BDD (Behavior-Driven Development) practices to bring business rules closer to test automation, alongside consolidating CI/CD pipelines to speed up delivery, increase test coverage, and reduce feedback time across development cycles.",
    ],
    stats: [
      { value: "6+", label: "years in the IT industry" },
      { value: "Support → Dev → QA", label: "career journey" },
      { value: "API & Automation", label: "current focus" },
    ],
  },
  skills: {
    title: "Technical skills",
    categories: [
      {
        name: "Quality & Testing",
        items: [
          "API Testing",
          "Static Testing",
          "Shift Left",
          "Manual Testing (Web & Mobile)",
          "Test Automation",
          "Bug Analysis & Reporting",
          "CI/CD",
        ],
      },
      { name: "Development", items: ["PHP", "Golang", "Laravel", "HTML & CSS"] },
      { name: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Docker", "WSL", "Git"] },
      { name: "Process", items: ["Jira", "Agile Methodologies", "Technical/Functional Documentation"] },
    ],
    certificationsTitle: "Certifications",
    certifications: ["Cloud Computing Basics", "Basic Artificial Intelligence"],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate" },
      { name: "Italian", level: "Basic" },
    ],
  },
  experience: {
    title: "Professional experience",
    promotedLabel: "Promoted",
    jobs: [
      {
        company: "Syonet",
        role: "Junior Test Analyst",
        period: "May 2025 — Present",
        location: "Rio Grande do Sul, Brazil",
        highlights: [
          "Focused on Quality Assurance, promoting a Shift Left culture and preventing failures from the earliest stages of the development cycle.",
          "Development and maintenance of automated API-layer tests, ensuring greater coverage and reliability in releases.",
          "Mapping business rules and creating technical/functional documentation to support product and engineering teams.",
        ],
      },
      {
        company: "Picolotec Tecnologia",
        role: "Junior Developer",
        period: "August 2022 — January 2025",
        location: "São Paulo, Brazil",
        highlights: [
          "Development and maintenance of backend applications using PHP, Golang and Laravel.",
          "Built and shipped new features to improve user experience and evolve the product.",
          "Handled N2 incident resolution and support, diagnosing code issues and fixing bugs.",
          "Modeled and managed relational (PostgreSQL) and non-relational (MongoDB) databases.",
          "Managed agile workflows and tickets through Jira.",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Development Analyst",
        period: "February 2022 — August 2022",
        location: "Araras, São Paulo, Brazil",
        highlights: [
          "Manual testing of web and mobile systems.",
          "API testing and bug analysis.",
          "Suggested product improvements.",
          "Customized print layouts (HTML and CSS).",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Systems Analyst",
        period: "September 2019 — August 2022",
        location: "Araras and Region, Brazil",
        highlights: [
          "Customer service and technical support.",
          "Trained users on the system.",
          "Reported bugs to the development team.",
        ],
      },
      {
        company: "Unimed",
        role: "Secretary",
        period: "January 2018 — April 2019",
        location: "Araras and Region, Brazil",
        highlights: [],
      },
    ],
  },
  projects: {
    title: "Projects & cases",
    subtitle:
      "Highlights from my work in quality. More detailed cases (test plans, evidence, metrics) can be added here as they get documented.",
    items: [
      {
        title: "API test automation",
        description:
          "Development and maintenance of automated test suites at the API layer at Syonet, expanding regression coverage and reducing manual validation time on every release.",
        tags: ["API Testing", "Automation", "CI/CD"],
      },
      {
        title: "Shift Left culture",
        description:
          "Introduced testing practices in the early stages of the development cycle alongside product and engineering teams, preventing failures before they reach production.",
        tags: ["Shift Left", "Process", "Quality"],
      },
      {
        title: "From support to structured testing",
        description:
          "Hands-on experience combining manual and API testing on web and mobile systems at ESL Sistemas, pairing N2 support knowledge with critical bug analysis.",
        tags: ["Manual Testing", "API Testing", "Bug Analysis"],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        school: "Fatec Araras — Antonio Brambilla",
        degree: "Associate Degree in Technology (CST), Multiplatform Software Development",
        period: "2021 — 2025",
        description:
          "Technology degree focused on building web, mobile and cloud applications, covering software engineering, databases and software quality.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Technical Degree in Systems Development",
        period: "2019 — 2020",
        description:
          "Technical program covering programming logic, systems development, database modeling and requirements analysis.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Technical Degree in Internet Computing",
        period: "2018 — 2019",
        description:
          "My first step into IT: web development (HTML, CSS and JavaScript), interface design and programming fundamentals.",
      },
      {
        school: "AEHDA",
        degree: "Vocational Training, Quality Management",
        period: "2016",
        description:
          "Quality management fundamentals such as continuous improvement (PDCA), process standardization and quality control, a foundation I now apply to software QA.",
      },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Let's talk about software quality?",
    subtitle:
      "I'm open to opportunities in QA, test automation and engineering teams that value quality from the very start of the cycle.",
    linkedinLabel: "LinkedIn",
    githubLabel: "Github",
  },
  footer: { rights: "All rights reserved." },
};

const it: Dictionary = {
  meta: {
    title: "Caroline Vantim — QA Engineer",
    description:
      "Portfolio di Caroline Vantim, QA Analyst specializzata in automazione dei test, API testing e Shift Left.",
  },
  nav: {
    sobre: "Chi sono",
    habilidades: "Competenze",
    experiencia: "Esperienza",
    projetos: "Progetti",
    formacao: "Formazione",
    contato: "Contatti",
  },
  hero: {
    greeting: "Ciao, sono ",
    headline: "QA Analyst | Quality Assurance Engineer | Test Automation | API Testing | PHP & Go",
    country: "Brasile",
    ctaPrimary: "Vedi il mio percorso",
    ctaSecondary: "Contattami",
  },
  about: {
    title: "Chi sono",
    paragraphs: [
      "Sono Caroline, una QA Engineer concentrata nel garantire software di alta qualità attraverso strategie efficienti di test manuali, automatizzati e integrazione continua. Ho esperienza pratica nei test di applicazioni Web, Mobile e API REST, oltre a un coinvolgimento diretto nella definizione dei flussi di test e nel miglioramento dei processi di qualità in team agili.",
      "La mia precedente esperienza come sviluppatrice (PHP e Golang) mi offre un profilo tecnico e analitico solido: comprendo l'architettura, analizzo il codice e so esattamente dove il software tende a fallire, il che facilita la comunicazione con i team di ingegneria.",
      "Attualmente applico e perfeziono continuamente pratiche di BDD (Behavior-Driven Development) per avvicinare le regole di business all'automazione dei test, oltre a consolidare pipeline CI/CD per velocizzare le consegne, aumentare la copertura dei test e ridurre i tempi di feedback nei cicli di sviluppo.",
    ],
    stats: [
      { value: "6+", label: "anni nel settore IT" },
      { value: "Supporto → Sviluppo → QA", label: "percorso di carriera" },
      { value: "API & Automazione", label: "focus attuale" },
    ],
  },
  skills: {
    title: "Competenze tecniche",
    categories: [
      {
        name: "Qualità & Test",
        items: [
          "API Testing",
          "Test Statici",
          "Shift Left",
          "Test Manuale (Web e Mobile)",
          "Automazione dei Test",
          "Analisi e Segnalazione Bug",
          "CI/CD",
        ],
      },
      { name: "Sviluppo", items: ["PHP", "Golang", "Laravel", "HTML & CSS"] },
      { name: "Dati & Infra", items: ["PostgreSQL", "MongoDB", "Docker", "WSL", "Git"] },
      { name: "Processi", items: ["Jira", "Metodologie Agili", "Documentazione Tecnica/Funzionale"] },
    ],
    certificationsTitle: "Certificazioni",
    certifications: ["Cloud Computing di Base", "Intelligenza Artificiale di Base"],
    languagesTitle: "Lingue",
    languages: [
      { name: "Portoghese", level: "Madrelingua" },
      { name: "Inglese", level: "Intermedio" },
      { name: "Italiano", level: "Base" },
    ],
  },
  experience: {
    title: "Esperienza professionale",
    promotedLabel: "Promozione",
    jobs: [
      {
        company: "Syonet",
        role: "Test Analyst Junior",
        period: "maggio 2025 — presente",
        location: "Rio Grande do Sul, Brasile",
        highlights: [
          "Focalizzata sulla Quality Assurance, promuovendo la cultura Shift Left e la prevenzione dei difetti fin dalle prime fasi del ciclo di sviluppo.",
          "Sviluppo e manutenzione di test automatizzati a livello di API, garantendo maggiore copertura e affidabilità nei rilasci.",
          "Mappatura delle regole di business e creazione di documentazione tecnica/funzionale a supporto dei team di prodotto e ingegneria.",
        ],
      },
      {
        company: "Picolotec Tecnologia",
        role: "Sviluppatrice Junior",
        period: "agosto 2022 — gennaio 2025",
        location: "San Paolo, Brasile",
        highlights: [
          "Sviluppo e manutenzione di applicazioni backend con PHP, Golang e Laravel.",
          "Realizzazione e implementazione di nuove funzionalità per migliorare l'esperienza utente e far evolvere il prodotto.",
          "Gestione della risoluzione di incidenti e supporto N2, con diagnosi del codice e correzione dei bug.",
          "Modellazione e gestione di database relazionali (PostgreSQL) e non relazionali (MongoDB).",
          "Gestione dei flussi di lavoro e dei ticket in metodologia agile tramite Jira.",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Analista di Sviluppo",
        period: "febbraio 2022 — agosto 2022",
        location: "Araras, San Paolo, Brasile",
        highlights: [
          "Test manuale su sistemi web e mobile.",
          "Test di API e analisi dei bug.",
          "Suggerimenti per il miglioramento del prodotto.",
          "Personalizzazione delle stampe (HTML e CSS).",
        ],
      },
      {
        company: "ESL Sistemas",
        role: "Analista di Sistema",
        period: "settembre 2019 — agosto 2022",
        location: "Araras e Regione, Brasile",
        highlights: [
          "Assistenza clienti e supporto tecnico.",
          "Formazione degli utenti all'uso del sistema.",
          "Segnalazione di bug al team di sviluppo.",
        ],
      },
      {
        company: "Unimed",
        role: "Segretaria",
        period: "gennaio 2018 — aprile 2019",
        location: "Araras e Regione, Brasile",
        highlights: [],
      },
    ],
  },
  projects: {
    title: "Progetti & case study",
    subtitle:
      "Punti salienti del mio lavoro nella qualità. Case study più dettagliati (piani di test, evidenze, metriche) potranno essere aggiunti qui man mano che verranno documentati.",
    items: [
      {
        title: "Automazione dei test API",
        description:
          "Sviluppo e manutenzione di suite di test automatizzati a livello di API presso Syonet, ampliando la copertura di regressione e riducendo i tempi di validazione manuale a ogni rilascio.",
        tags: ["API Testing", "Automazione", "CI/CD"],
      },
      {
        title: "Cultura Shift Left",
        description:
          "Introduzione di pratiche di test nelle prime fasi del ciclo di sviluppo, insieme ai team di prodotto e ingegneria, prevenendo difetti prima che raggiungano la produzione.",
        tags: ["Shift Left", "Processi", "Qualità"],
      },
      {
        title: "Dal supporto al test strutturato",
        description:
          "Esperienza pratica che unisce test manuali e di API su sistemi web e mobile presso ESL Sistemas, combinando la conoscenza del supporto N2 con l'analisi critica dei bug.",
        tags: ["Test Manuale", "Test API", "Analisi Bug"],
      },
    ],
  },
  education: {
    title: "Formazione accademica",
    items: [
      {
        school: "Fatec Araras — Antonio Brambilla",
        degree: "Laurea Tecnologica (CST), Sviluppo Software Multipiattaforma",
        period: "2021 — 2025",
        description:
          "Laurea tecnologica incentrata sullo sviluppo di applicazioni web, mobile e cloud, con ingegneria del software, database e qualità del software.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Diploma Tecnico in Sviluppo di Sistemi",
        period: "2019 — 2020",
        description:
          "Corso tecnico su logica di programmazione, sviluppo di sistemi, modellazione di database e analisi dei requisiti.",
      },
      {
        school: "Etec Prefeito Alberto Feres",
        degree: "Diploma Tecnico in Informatica per Internet",
        period: "2018 — 2019",
        description:
          "Il mio primo passo nell'IT: sviluppo web (HTML, CSS e JavaScript), design di interfacce e fondamenti di programmazione.",
      },
      {
        school: "AEHDA",
        degree: "Corso Professionalizzante, Gestione della Qualità",
        period: "2016",
        description:
          "Fondamenti di gestione della qualità, come miglioramento continuo (PDCA), standardizzazione dei processi e controllo qualità, una base che oggi applico al QA del software.",
      },
    ],
  },
  contact: {
    title: "Contatti",
    heading: "Parliamo di qualità del software?",
    subtitle:
      "Sono aperta a opportunità in QA, automazione dei test e team di ingegneria che valorizzano la qualità fin dall'inizio del ciclo.",
    linkedinLabel: "LinkedIn",
    githubLabel: "Github",
  },
  footer: { rights: "Tutti i diritti riservati." },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en, it };
