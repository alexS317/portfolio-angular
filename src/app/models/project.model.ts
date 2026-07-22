export interface Project {
  id: string;
  title: string;
  category: 'university' | 'personal';
  studyProgramme?: string;
  semester?: string;
  year?: string;
  media: string[];
  tools: string[];
  description: string;
  link?: { text: string; url: string };
  githubLink?: string;
}
