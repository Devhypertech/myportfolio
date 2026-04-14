import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="whatIDO-main">
        <div className="what-box">
          <h2 className="title">
            W<span className="hat-h2">HAT</span>
            <div>
              I<span className="do-h2"> DO</span>
            </div>
          </h2>
        </div>
        <div className="what-box">
          <div className="what-box-in">
            <div className="what-border2">
              <svg width="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="7,7"
                />
              </svg>
            </div>
            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, 0)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>Client Communication</h3>
                <p>
                  I translate technical decisions for non-technical stakeholders,
                  run discovery calls, and align scope, architecture, and
                  timelines.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Discovery</div>
                  <div className="what-tags">Scope alignment</div>
                  <div className="what-tags">Architecture planning</div>
                  <div className="what-tags">Stakeholder updates</div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, 1)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>Performance &amp; UX</h3>
                <p>
                  Obsessed with fast loads, clear UI hierarchy, and maintainable
                  codebases — whether on React, WordPress, or Shopify.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">React</div>
                  <div className="what-tags">WordPress</div>
                  <div className="what-tags">Shopify</div>
                  <div className="what-tags">Performance</div>
                  <div className="what-tags">UI hierarchy</div>
                  <div className="what-tags">Tailwind CSS</div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="core-skills" aria-labelledby="core-skills-heading">
        <h2 id="core-skills-heading" className="core-skills-title">
          C<span className="hat-h2">ORE</span>{" "}
          <span className="do-h2">SKILLS</span>
        </h2>
        <div className="core-skills-grid">
          <div className="core-skills-block">
            <h3 className="core-skills-label">FOR Frontend</h3>
            <ul className="core-skills-list">
              <li>React.js</li>
              <li>Modern UI</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML · CSS · Bootstrap</li>
            </ul>
          </div>
          <div className="core-skills-block">
            <h3 className="core-skills-label">FOR Backend</h3>
            <ul className="core-skills-list">
              <li>Backend</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="core-skills-block">
            <h3 className="core-skills-label">FOR CMS</h3>
            <ul className="core-skills-list">
              <li>WordPress</li>
              <li>Shopify</li>
              <li>Squarespace</li>
              <li>Wix</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
