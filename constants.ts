
import React from 'react';
import type { SkillCategory, Education, ExperienceItem, Project } from './types';
import { 
  ReactIcon, NextjsIcon, TailwindIcon, NodejsIcon, PythonIcon, PremiereProIcon, 
  AIIcon, FigmaIcon, GitIcon, MongoDBIcon, ProblemSolvingIcon, CommunicationIcon, 
  CreativityIcon, AdaptabilityIcon 
} from './components/Icons';

// FIX: Replaced JSX syntax (<Component />) with React.createElement(Component)
// This is necessary because this is a .ts file, not a .tsx file, and the TS compiler
// was interpreting the JSX as generic type syntax, causing errors.
export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: React.createElement(ReactIcon) },
      { name: 'Next.js', icon: React.createElement(NextjsIcon) },
      { name: 'Tailwind CSS', icon: React.createElement(TailwindIcon) },
      { name: 'Figma', icon: React.createElement(FigmaIcon) },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: React.createElement(NodejsIcon) },
      { name: 'Python', icon: React.createElement(PythonIcon) },
      { name: 'MongoDB', icon: React.createElement(MongoDBIcon) },
      { name: 'Git', icon: React.createElement(GitIcon) },
    ],
  },
  {
    title: 'Prompt Engineering & AI Tools',
    skills: [
      { name: 'AI Prompting', icon: React.createElement(AIIcon) },
      { name: 'Gemini', icon: React.createElement(AIIcon) },
      { name: 'Midjourney', icon: React.createElement(AIIcon) },
      { name: 'API Integration', icon: React.createElement(AIIcon) },
    ],
  },
   {
    title: 'Video Editing',
    skills: [
      { name: 'Premiere Pro', icon: React.createElement(PremiereProIcon) },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Creativity', icon: React.createElement(CreativityIcon) },
      { name: 'Communication', icon: React.createElement(CommunicationIcon) },
      { name: 'Problem Solving', icon: React.createElement(ProblemSolvingIcon) },
      { name: 'Adaptability', icon: React.createElement(AdaptabilityIcon) },
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    year: '2024–Sekarang',
    institution: 'STKIP PGRI Pacitan – Pendidikan Informatika',
    description: 'Studi lanjut bidang teknologi & pendidikan digital.',
  },
  {
    year: '2021–2024',
    institution: 'SMK Pembangunan Pacitan – RPL',
    description: 'Belajar pemrograman, aplikasi, dan magang komputer.',
  },
  {
    year: '2018–2021',
    institution: 'Mts Ma’arif Gembong',
    description: 'Dasar pengetahuan umum & ketertarikan teknologi.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Freelance Developer & Prompt Engineer',
    period: '2024–Sekarang',
    description: 'Membangun proyek AI & aplikasi web untuk klien.',
  },
  {
    title: 'Video Editor (TikTok @zamm4x)',
    period: '2023-Sekarang',
    description: 'Produksi video storytelling sinematik dengan engagement tinggi.',
  },
  {
    title: 'Magang Bidang Komputer',
    period: '2023',
    description: 'Mempelajari sistem komputer, jaringan, dan dasar-dasar proyek web.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Hai Zuro – Portfolio Website',
    description: 'Website portofolio pribadi yang interaktif dan futuristik dengan mode gelap/terang.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    image: 'https://picsum.photos/seed/portfolio/600/400',
  },
  {
    title: 'HI Pacitan – Wisata App',
    description: 'Aplikasi mobile untuk eksplorasi wisata di Pacitan, terintegrasi dengan Maps API.',
    tags: ['React Native', 'Maps API', 'Firebase'],
    image: 'https://picsum.photos/seed/pacitan/600/400',
  },
  {
    title: 'SmartStore – Web Toko Online',
    description: 'Platform e-commerce dengan fitur lengkap, dari manajemen produk hingga pembayaran online.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Midtrans API'],
    image: 'https://picsum.photos/seed/store/600/400',
  },
  {
    title: 'MCGG Predict – Magic Chess Predictor',
    description: 'Alat berbasis AI untuk memprediksi hasil pertandingan Magic Chess menggunakan data historis.',
    tags: ['Python', 'AI', 'Google Sheets API'],
    image: 'https://picsum.photos/seed/mcgg/600/400',
  },
];
