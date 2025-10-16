import type { VercelRequest, VercelResponse } from "@vercel/node";
import { randomUUID } from "crypto";
import { volunteerFormSchema } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const validated = volunteerFormSchema.parse(req.body);
    const submissionId = randomUUID();
    return res.status(200).json({
      success: true,
      message:
        "Thank you for your interest in volunteering! We'll contact you soon with opportunities.",
      submissionId,
      name: validated.name,
      email: validated.email,
      location: validated.location,
      interests: validated.interests,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid form data. Please check your inputs and try again.",
    });
  }
}


