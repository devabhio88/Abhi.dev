import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Abhishek Kumar Gupta (अbhi). I am a software developer
              with strong expertise in DSA, full-stack development, and scalable
              system design.
            </div>
            <div className="mt-2">
              I have experience building data-driven applications using React,
              APIs, and real-time systems. I'm a proven problem-solver with 400+
              DSA problems solved and selection in Quantiphi.
            </div>
            <div className="mt-2">
              I'm focused on developing reliable, high-performance software at scale.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Full-Stack Development | DSA | AI/LLMs | System Design | React | Tailwind CSS"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Open to opportunities in software development and AI engineering."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:harshabhio88@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                harshabhio88@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/devabhio88"
                target="_blank"
                rel="noreferrer"
              >
                @devabhio88
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/abhishek-kumar-gupta-88967b21a/"
                target="_blank"
                rel="noreferrer"
              >
                Abhishek Kumar Gupta
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                className="text-blue-300"
                href="https://x.com/Abhi_gupta1o1"
                target="_blank"
                rel="noreferrer"
              >
                @Abhi_gupta1o1
              </a>
            </li>
            <li>
              Resume:{" "}
              <a
                className="text-blue-300"
                href="https://drive.google.com/file/d/1iMPgGfqsQNdwnV1l3WVS-tBX0jcGgU2R/view"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
