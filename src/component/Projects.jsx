import React from "react";
import ProjectCard from './ProjectsCard' 

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-30">
      
        <ProjectCard
          title="Eccomerce website"
          main="this is a eccomerce  website which show the collections of clothes and this website is created by using core language HTML, CSS & Javascript"
        />
        <ProjectCard
          title="Airbnb website"
          main="this is a Airbnb website where we can upload our hotel for the customer and this website is created by using MERN STACK"
        />
        <ProjectCard
          title="Food delivery website"
          main="this is a food delivery website which is fully functional and this website is created by using MERN stack"
        />
         <ProjectCard
          title="Weather App for jemmi"
          main="this is weather app website made on demanded . you can see weather of different city . the link of that website is https://weather-app-h1ws.onrender.com"
        />
      </div>
    </div>
  );
};

export default Projects;