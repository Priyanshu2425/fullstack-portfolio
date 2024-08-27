import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SiGlobus } from "react-icons/si";

function App() {
  const [count, setCount] = useState(0);

  const projects = [
    {
      name: "konnect kitchen",
      description: "Konnect Kitchen is an eCommerce store for dinnerware, featuring a vast inventory of crockery. It uses React.js and Tailwind CSS for a sleek, responsive design. Secure payments are handled via Razorpay, and the backend is built with Node.js and Express.js. Inventory management and user authentication are integral features.",
      imgs: ["/kk.png", "/kk2.png", "/kk3.png"],
      link: "https://www.konnectkitchen.com/",
    },
    {
      name: "sniffit",
      description: "Sniffit is an ethical dog breeding app built with the MERN stack. It helps pet owners find suitable mates for their dogs, promotes healthy breeding practices, and facilitates puppy adoption. The app includes chat features for communication and ensures thorough checks for dog health and compatibility.",
      imgs: ["/sniffit1.png"],
      link: "https://sniffit-frontend.vercel.app/",
    },
    {
      name: "the funkyverse",
      description: "The Funky Verse is a modern clothing eCommerce startup that focuses on trendy and stylish apparel. As a freelance project, it features a contemporary design and user-friendly interface. The store is built with React.js for the frontend and includes secure payment integration and efficient inventory management, catering to fashion-forward customers.",
      imgs: ["/tf.png"],
      link: "https://www.thefunkyverse.com/",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 pt-[70px]">
        <div className="bg-[#030712] absolute top-0 left-0 h-[70px] w-full flex justify-between px-[20px]">
          <p className="text-4xl flex items-center">PS.</p>
          <div className="flex gap-4 text-3xl items-center">
            <a
              href="https://github.com/Priyanshu2425?tab=repositories"
              target="_blank"
            >
              {" "}
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/semwalpriyanshu/"
              target="_blank"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a href="#contactme" className="text-2xl">
              {" "}
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[4rem] leading-10">i am priyanshu semwal.</h1>
            <br />
            <br/>
            <h2 className="text-[1.5rem]">fullstack developer</h2>
            <img
              src={"/profilepic.jpg"}
              className="aspect-square w-[160px] rounded-full"
            />
          </div>

          <div className="flex flex-col gap-8 text-lg">
            <p>based in delhi</p>
            <p>
              b.tech in computer science and engineering (ggsipu, dwarka, delhi)
            </p>

            <div className="flex flex-col gap-4">
              <div>
              <a href="https://drive.google.com/file/d/1-uhBSOVlzA-giDSbPalbtBCw-je3OyAo/view" className="flex items-center justify-center hover:underline hover:scale-110">
              <span className="text-3xl"><GiAchievement /></span>
              <span>3rd Position Hackmatrix</span> 
              </a>
              <span>Indian Institue of
              Technology, Patna, Bihar</span>
              </div>

              <div>
              <a href="https://drive.google.com/file/d/1RuZaYwBLb_p-OoE_RCW4hfFf-JKhnbGV/view" className="flex items-center justify-center hover:underline hover:scale-110">
              <span className="text-3xl"><GiAchievement /></span>
                <span>1st Position BitBox 4.0 </span>
              </a>
              <span>Jaypee Institute of Technology, Noida,
              Uttar Pradesh</span>
              </div>

              <div>
              <a href="https://drive.google.com/file/d/18I4MaKZ_FEa2SPoSb4vDlbI-1DAv_JG6/view" className="flex justify-center hover:underline hover:scale-110">
              <span className="text-3xl"><GiAchievement /></span>
                <span>Top 10 Code4Cause</span>
              </a>
              <span>Maharaja Surajmal Institute of Technology,
              Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[2rem] w-min px-4 mt-10 self-center border border-white rounded-lg bg-white text-gray-800 hover:scale-110 ">
          <a href="https://drive.google.com/file/d/1IpMO_MpiN9H8fM6_C3KnXxy0g4gCBA8e/view" >
            Resume
          </a>
        </div>
        <div>
          <h1 className=" text-[2.5rem] leading-10 mt-10">projects</h1>
          <br />
          <div className="w-full flex flex-col gap-2">
            {projects.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col sm:gap-10 md:flex-row rounded-[14px] my-4 "
                >
                  <div className="md:w-1/2 flex flex-col justify-center items-center object-cover ">
                    <span>
                      <img src={item.imgs[0]} />
                    </span>
                  </div>

                  <div className="md:w-1/2 py-8 flex flex-col gap-2 justify-between text-justify">
                    <h1 className="text-2xl">{item.name}</h1>
                    <p> {item.description}</p>
                    <br />
                    <div className="text-2xl">
                      <a href={item.link} target="_blank">
                        <SlGlobe />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className=" text-[2.5rem] leading-10">skills</h1>
          <br />
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
                <p>Figma</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=react" alt="React" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=redux" alt="Redux" />
                <p>Redux</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="Tailwind CSS"
                />
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="Node.js"
                />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=prisma" alt="Prisma" />
                <p>Prisma</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=kafka" alt="Kafka" />
                <p>Kafka</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=elasticsearch"
                  alt="Elasticsearch"
                />
                <p>Elasticsearch</p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB"
                />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=postgres"
                  alt="PostgreSQL"
                />
                <p>PostgreSQL</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=redis" alt="Redis" />
                <p>Redis</p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
                <p>AWS</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img
                  src="https://skillicons.dev/icons?i=kubernetes"
                  alt="Kubernetes"
                />
                <p>Kubernetes</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
                <p>Docker</p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                <p>GitHub</p>
              </div>
            </div>

            <div className="flex justify-center flex-wrap">
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=java" alt="Java" />
                <p>Java</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=py" alt="Python" />
                <p>Python</p>
              </div>
              <div className="flex flex-col items-center m-2">
                <img src="https://skillicons.dev/icons?i=c" alt="C" />
                <p>C</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-10 justify-center items-center bg-[#030712] py-10"
          id="contactme"
        >
          <h1 className=" text-[2.5rem] leading-10">contact me</h1>

          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex gap-2 items-center hover:underline hover:scale-110">
              <IoMdCall />
              <span>+91 9315776817</span>
            </div>

            <div className="flex gap-2 items-center hover:underline hover:scale-110">
              <MdEmail />
              <span>
                <a href="mailto:priyanshu24nov@gmail.com">
                  priyanshu24nov@gmail.com
                </a>
              </span>
            </div>

            <div className="flex gap-2 items-center hover:underline hover:scale-110">
              <FaLocationDot />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
