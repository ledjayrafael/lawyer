
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  position: string;
}
