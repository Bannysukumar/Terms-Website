import { type ContactForm, type VolunteerForm } from "@shared/schema";
import { randomUUID } from "crypto";

export interface ContactSubmission extends ContactForm {
  id: string;
  submittedAt: Date;
}

export interface VolunteerSubmission extends VolunteerForm {
  id: string;
  submittedAt: Date;
}

export interface IStorage {
  createContactSubmission(data: ContactForm): Promise<ContactSubmission>;
  createVolunteerSubmission(data: VolunteerForm): Promise<VolunteerSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getAllVolunteerSubmissions(): Promise<VolunteerSubmission[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private volunteerSubmissions: Map<string, VolunteerSubmission>;

  constructor() {
    this.contactSubmissions = new Map();
    this.volunteerSubmissions = new Map();
  }

  async createContactSubmission(data: ContactForm): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { ...data, id, submittedAt: new Date() };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async createVolunteerSubmission(data: VolunteerForm): Promise<VolunteerSubmission> {
    const id = randomUUID();
    const submission: VolunteerSubmission = { ...data, id, submittedAt: new Date() };
    this.volunteerSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getAllVolunteerSubmissions(): Promise<VolunteerSubmission[]> {
    return Array.from(this.volunteerSubmissions.values());
  }
}

export const storage = new MemStorage();
