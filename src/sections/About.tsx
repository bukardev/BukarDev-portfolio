import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import { TechIcon } from "@/components/TechIcon";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReacIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReacIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
  },
  {
    title: "Photography",
  },
  {
    title: "Gaming",
  },
  {
    title: "Hiking",
  },
  {
    title: "Music",
  },
  {
    title: "Fitness",
  },
  {
    title: "Reading",
  },
];

export const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me!"
        />
        <div>
          <Card>
            <div>
              <div>
                <StarIcon />
                <h2>My Reads</h2>
              </div>
              <p>Explore the book shaping my perspective</p>
            </div>
            <div>
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card>
            <div>
              <div>
                <StarIcon />
                <h2>My Toolbox</h2>
              </div>
              <p>
                Explore the technologies and tools I use to craft exeptional
                digitar experieces
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <div>
                <StarIcon />
                <h2>Beyond the Code</h2>
              </div>
              <p>Exolore my interests and hobbies beyond the digital realm</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling image" />
          </Card>
        </div>
      </div>
    </section>
  );
};
