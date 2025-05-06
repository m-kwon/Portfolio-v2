import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
  SiLinux,
  SiJsonwebtokens,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiJunit5
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const skillList: {
  name: string;
  icon: any;
  color: string;
}[] = [
  { name: 'HTML', icon: <SiHtml5 color="#e34f26" />, color: '#e34f26' },
  { name: 'CSS', icon: <SiCss3 color="#264de4" />, color: '#264de4' },
  { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" />, color: '#f7df1e' },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" />, color: '#3178c6' },
  { name: 'Java', icon: <FaJava color="#007396" />, color: '#007396' },
  { name: 'Python', icon: <SiPython color="#4B8BBE" />, color: '#4B8BBE' },
  { name: 'React', icon: <SiReact color="#61dbfb" />, color: '#61dbfb' },
  { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" />, color: '#6DB33F' },
  { name: 'NodeJS', icon: <SiNodedotjs color="#3C873A" />, color: '#3C873A' },
  { name: 'Express', icon: <SiExpress color="#000000" />, color: '#000000' },
  { name: 'SQL', icon: <SiPostgresql color="#336791" />, color: '#336791' },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" />, color: '#4DB33D' },
  { name: 'Git', icon: <SiGit color="#f1502f" />, color: '#f1502f' },
  { name: 'GitHub', icon: <SiGithub color="#d5d4d4" />, color: '#d5d4d4' },
  { name: 'Jest', icon: <SiJest color="#18df16" />, color: '#18df16' },
  { name: 'JUnit', icon: <SiJunit5 color="#25A162" />, color: '#25A162' },
  { name: 'JWT', icon: <SiJsonwebtokens color="#d63aff" />, color: '#d63aff' },
  { name: 'Linux', icon: <SiLinux color="#d5d4d4" />, color: '#d5d4d4' },
];

export default skillList;