import type { VercelRequest, VercelResponse } from "@vercel/node";
import { randomUUID } from "crypto";
import { contactFormSchema } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const validated = contactFormSchema.parse(req.body);
    // Note: In a serverless environment without a database, we can't persist across invocations.
    // Return a pseudo submission id to keep the client UX consistent.
    const submissionId = randomUUID();
    return res.status(200).json({
      success: true,
      message:
        "Thank you for contacting us! We'll get back to you within 2-3 business days.",
      submissionId,
      // echo minimal safe fields if needed by client
      name: validated.name,
      email: validated.email,
      subject: validated.subject,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid form data. Please check your inputs and try again.",
    });
  }
}


