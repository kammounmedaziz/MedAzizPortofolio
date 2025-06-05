import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { db } from '../firebase'; // or wherever your firebase.js is
import { getDocs, collection } from "firebase/firestore";
import PropTypes from 'prop-types';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => (
  <div className="group relative w-full">
      
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-red-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
  
      <div className="relative p-5 z-10">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="mt-4 space-y-3">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-red-200 to-pink-200 bg-clip-text text-transparent">
            {Title}
          </h3>
          
          <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
            {Description}
          </p>
          
          <div className="pt-4 flex items-center justify-between">
            {ProjectLink ? (
              <a
              href={ProjectLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span className="text-sm font-medium">Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-gray-500 text-sm">Demo Not Available</span>
            )}
            
            {id ? (
              <Link
                to={`/project/${id}`}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50"
              >
                <span className="text-sm font-medium">Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-gray-500 text-sm">Details Not Available</span>
            )}
          </div>
        </div>
        
        <div className="absolute inset-0 border border-white/0 group-hover:border-red-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </div>
  </div>
);

CardProject.propTypes = {
  Img: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Link: PropTypes.string,
  id: PropTypes.string
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, "projects");
      const projectSnapshot = await getDocs(projectCollection);
      const projectData = projectSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        TechStack: doc.data().TechStack || [],
      }));
      setProjects(projectData);
      console.log("Fetched projects:", projectData); // <-- Add this
    };

    fetchProjects();
  }, []);

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <CardProject
              key={project.id}
              id={project.id}
              Img={project.Img}
              Title={project.Title}
              Description={project.Description}
              Link={project.Link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;