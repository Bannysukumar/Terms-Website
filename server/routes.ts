import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, volunteerFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      console.log("Contact form submitted:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
      });

      res.json({
        success: true,
        message: "Thank you for contacting us! We'll get back to you within 2-3 business days.",
        submissionId: submission.id,
      });
    } catch (error) {
      console.error("Contact form validation error:", error);
      res.status(400).json({
        success: false,
        message: "Invalid form data. Please check your inputs and try again.",
      });
    }
  });

  // Volunteer form submission
  app.post("/api/volunteer", async (req, res) => {
    try {
      const validatedData = volunteerFormSchema.parse(req.body);
      const submission = await storage.createVolunteerSubmission(validatedData);
      
      console.log("Volunteer form submitted:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        location: submission.location,
        interests: submission.interests,
      });

      res.json({
        success: true,
        message: "Thank you for your interest in volunteering! We'll contact you soon with opportunities.",
        submissionId: submission.id,
      });
    } catch (error) {
      console.error("Volunteer form validation error:", error);
      res.status(400).json({
        success: false,
        message: "Invalid form data. Please check your inputs and try again.",
      });
    }
  });

  // Get all contact submissions (for admin/debugging)
  app.get("/api/contact", async (req, res) => {
    const submissions = await storage.getAllContactSubmissions();
    res.json({
      count: submissions.length,
      submissions: submissions.map(s => ({
        id: s.id,
        name: s.name,
        email: s.email,
        subject: s.subject,
        submittedAt: s.submittedAt,
      })),
    });
  });

  // Get all volunteer submissions (for admin/debugging)
  app.get("/api/volunteer", async (req, res) => {
    const submissions = await storage.getAllVolunteerSubmissions();
    res.json({
      count: submissions.length,
      submissions: submissions.map(s => ({
        id: s.id,
        name: s.name,
        email: s.email,
        location: s.location,
        interests: s.interests,
        submittedAt: s.submittedAt,
      })),
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
