// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This is a brief overview of my CV, if you would like to see my full CV please click the CV button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1984/";
            },},{id: "books-letters-to-a-young-contrarian",
          title: 'letters to a young contrarian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/letter_to_a_young_contrarian/";
            },},{id: "news-started-my-undergradute-in-psychology-with-a-year-abroad-at-the-university-of-birmingham",
          title: 'Started my undergradute in psychology with a year abroad at the University of...',
          description: "",
          section: "News",},{id: "news-started-my-year-abroad-in-seoul-south-korea-at-korea-university-studying-neuroscience-data-science-neural-engineering-and-korean",
          title: 'Started my year abroad in Seoul, South Korea at Korea University. Studying Neuroscience,...',
          description: "",
          section: "News",},{id: "news-graduated-the-university-of-birmingham-in-psychology-with-a-2-1-i-completed-training-in-seoul-south-korea-on-my-year-abroad-i-was-also-employeed-at-the-university-in-various-role-in-my-time-including-tech-services-at-the-student-union-and-student-ambassador-representing-the-university",
          title: 'Graduated the University of Birmingham in Psychology with a 2:1. I completed training...',
          description: "",
          section: "News",},{id: "news-project-investigating-the-motor-theory-of-inner-speech-using-squid-meg-this-study-will-compare-a-model-trained-on-pre-speech-data-localised-to-motor-regions-and-compared-to-a-model-trained-on-perception-data-in-health-individuals",
          title: 'Project investigating the motor theory of inner speech using SQUID-MEG. This study will...',
          description: "",
          section: "News",},{id: "news-started-my-master-s-of-science-in-cognitive-neuroimaging-and-data-science-computational-neuroscience-tract-at-the-university-of-birmingham",
          title: 'Started my master’s of science in Cognitive Neuroimaging and Data Science (Computational Neuroscience...',
          description: "",
          section: "News",},{id: "news-started-as-a-teaching-fellow-on-the-module-data-science-for-brain-and-behaviour-module-lead-by-dr-andrew-olson",
          title: 'Started as a teaching fellow on the module Data Science for Brain and...',
          description: "",
          section: "News",},{id: "news-submitted-my-phd-funding-application-to-the-esrc-i-devised-a-project-and-experiment-using-opm-meg-to-record-gamma-oscillations-from-the-motor-cortex-this-is-to-improve-non-invasive-speech-decoding-for-those-who-have-lost-their-ability-to-speak-such-as-with-due-to-a-condition-such-as-als",
          title: 'Submitted my PhD funding application to the ESRC. I devised a project and...',
          description: "",
          section: "News",},{id: "news-i-was-given-an-unconditional-offer-for-a-phd-at-the-university-of-birmingham-to-conduct-my-study-in-real-time-speech-decoding-using-non-invasive-opm-meg",
          title: 'I was given an unconditional offer for a PhD at the University of...',
          description: "",
          section: "News",},{id: "news-joined-the-the-british-neuroscience-association-and-will-be-attending-the-2026-british-neuroscience-association-meeting",
          title: 'Joined the the British Neuroscience Association and will be attending the 2026 British...',
          description: "",
          section: "News",},{id: "news-delievered-multiple-psychology-seminars-on-research-methods-and-essay-writing-at-the-university-of-birmingham-to-2nd-year-psychology-undergraduate-students",
          title: 'Delievered multiple psychology seminars on research methods and essay writing at The University...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-chbh-neuroscience-hackathon-on-the-theme-of-reproducability-on-the-first-day-i-contributed-to-the-neuroimagers-handbook-for-the-chbh-this-involved-testing-meg-related-code-on-the-hpc-bluebear-on-the-second-day-i-began-to-move-my-cancellation-task-project-over-to-python-to-enable-better-open-source-capabilities",
          title: 'I participated in the CHBH Neuroscience Hackathon on the theme of reproducability. On...',
          description: "",
          section: "News",},{id: "news-completed-meg-operator-training-at-the-university-of-birmingham-s-chbh-with-jonathan-winter-to-be-able-to-operate-an-meg-machine-and-collect-neuroimaging-data",
          title: 'Completed MEG Operator training at the University of Birmingham’s CHBH with Jonathan Winter...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
