import "./styles/Career.css";

const experiences = [
  {
    period: "Jun 2024 — Present",
    title: "Head of Production",
    company: "Hypertech Verse",
    description:
      "Leading the development and production team, managing workflows, and shipping high-quality digital products for US and Canadian businesses.",
  },
  {
    period: "Jan 2021 — Present",
    title: "Freelance Web Developer",
    company: "Fiverr",
    description:
      "100+ projects delivered for global clients (USA & UK). 5-star rating, Level One Seller — WordPress, Shopify, custom builds, and ongoing support.",
  },
  {
    period: "Jan 2024 — Jul 2024",
    title: "Web Development Trainer",
    company: "Government Polytechnic Institute",
    description:
      "Delivered curriculum on UI/UX fundamentals and CMS development for students entering the industry.",
  },
  {
    period: "2022 — 2024",
    title: "Head of Production / Senior Web Developer",
    company: "Billstech",
    description:
      "Owned production pipelines, senior-level implementation, and cross-functional coordination for client deliverables.",
  },
  {
    period: "2021 — 2022",
    title: "Web Developer",
    company: "Marediasoft",
    description:
      "Built and maintained client websites with focus on performance, responsive layouts, and CMS customization.",
  },
  {
    period: "—",
    title: "Project Manager",
    company: "RIZ Technologies",
    description:
      "Coordinated timelines, stakeholder communication, and delivery across technology initiatives.",
  },
  {
    period: "—",
    title: "Internship",
    company: "Engitech Services",
    description:
      "Foundational experience across the web stack and professional development workflows.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((job) => (
            <div className="career-info-box" key={`${job.company}-${job.title}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.title}</h4>
                  <h5>{job.company}</h5>
                </div>
                <h3>{job.period}</h3>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
