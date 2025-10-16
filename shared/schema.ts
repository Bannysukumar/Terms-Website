import { z } from "zod";

// Project schemas
export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  category: z.enum(["river", "afforestation", "biodiversity", "waste"]),
  status: z.enum(["ongoing", "completed"]),
  year: z.number(),
  description: z.string(),
  problem: z.string(),
  solution: z.string(),
  outcomes: z.array(z.string()),
  partners: z.array(z.string()),
  beforeImage: z.string(),
  afterImage: z.string().optional(),
  galleryImages: z.array(z.string()),
  communityQuotes: z.array(z.object({
    name: z.string(),
    quote: z.string(),
    role: z.string(),
  })),
  metrics: z.object({
    treesPlanted: z.number().optional(),
    areaRestored: z.number().optional(),
    biodiversityIncrease: z.number().optional(),
    waterQuality: z.string().optional(),
  }).optional(),
});

export type Project = z.infer<typeof projectSchema>;

// Team member schemas
export const teamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  designation: z.string(),
  role: z.enum(["executive", "coordinator", "volunteer", "advisory"]),
  bio: z.string(),
  image: z.string(),
  email: z.string().email().optional(),
  linkedin: z.string().url().optional(),
  twitter: z.string().url().optional(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;

// News & Events schemas
export const newsItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  category: z.enum(["news", "event", "press"]),
  description: z.string(),
  image: z.string(),
  content: z.string(),
  isUpcoming: z.boolean().optional(),
});

export type NewsItem = z.infer<typeof newsItemSchema>;

// Resource schemas
export const resourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum(["annual-report", "research", "guideline", "policy", "educational"]),
  year: z.number().optional(),
  description: z.string(),
  fileUrl: z.string(),
  thumbnail: z.string().optional(),
  category: z.string().optional(),
});

export type Resource = z.infer<typeof resourceSchema>;

// Gallery schemas
export const galleryItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(["events", "plantation", "workshops", "awareness"]),
  image: z.string(),
  caption: z.string(),
  date: z.string().optional(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;

// FAQ schemas
export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.enum(["general", "membership", "donations", "volunteering", "partnerships"]),
});

export type FAQItem = z.infer<typeof faqItemSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Volunteer form schema
export const volunteerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  interests: z.array(z.string()).min(1, "Select at least one interest area"),
  availability: z.string().min(1, "Please specify your availability"),
  message: z.string().optional(),
});

export type VolunteerForm = z.infer<typeof volunteerFormSchema>;

// Impact statistics
export interface ImpactStats {
  treesPlanted: number;
  volunteersJoined: number;
  projectsCompleted: number;
  waterBodiesRestored: number;
}
