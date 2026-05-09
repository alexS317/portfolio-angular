export interface Project {
  id: string;
  title: string;
  studyProgramme?: string;
  semester?: string;
  images: string[];
  tools: string[];
  description: string;
  link?: { text: string; url: string };
}
