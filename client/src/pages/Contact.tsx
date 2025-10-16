import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 2-3 business days.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-contact-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our work or explore partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        data-testid="input-contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        data-testid="input-contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        data-testid="input-contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g., Partnership Inquiry, Volunteer Question"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        data-testid="textarea-contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      data-testid="button-submit-contact"
                      className="w-full font-semibold"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Office Address
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            No.6B, Rajam Pettai Street<br />
                            Kancheepuram, Tamil Nadu<br />
                            India - 631501
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Email
                          </h3>
                          <a
                            href="mailto:info@termcouncil.org"
                            data-testid="link-contact-email"
                            className="text-primary hover:underline"
                          >
                            info@termcouncil.org
                          </a>
                          <br />
                          <a
                            href="mailto:partnerships@termcouncil.org"
                            data-testid="link-partnerships-email"
                            className="text-primary hover:underline"
                          >
                            partnerships@termcouncil.org
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Phone
                          </h3>
                          <a
                            href="tel:+914427220000"
                            data-testid="link-contact-phone"
                            className="text-primary hover:underline"
                          >
                            +91 44 2722 0000
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Office Hours
                          </h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                            Saturday: 9:00 AM - 1:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Google Map */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Find Us on Map
                </h3>
                <div className="rounded-lg overflow-hidden border border-border h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9407919642854!2d79.70171631482143!3d12.984254990856997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d1f5555555%3A0x1234567890abcdef!2sKancheepuram%2C%20Tamil%20Nadu%20631501!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TERM Office Location - Kancheepuram"
                    data-testid="map-office-location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
