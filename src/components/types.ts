export interface CardSection {
  heading?: string;
  paragraphs: string[];
}

export interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  sections: CardSection[];
}

export interface Skill {
    id: number;
    name: string;
    icon: string;
    color: string;
    description: string;
    targetProgress: number;
    progress?: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  movieLink: string;
}

export interface News {
  id: number;
  date: string;
  category: string[];
  description: string;
  link?: string;
}