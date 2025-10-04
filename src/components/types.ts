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