import { useState } from "react";
import { Heart, Users, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import volunteerImage from "@assets/generated_images/Volunteers_planting_trees_together_4daa1704.png";

export default function GetInvolved() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: [] as string[],
    availability: "",
    message: "",
  });

  const interestOptions = [
    "Tree Plantation",
    "River Cleanup",
    "Awareness Campaigns",
    "Workshop Facilitation",
    "Research & Documentation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/volunteer", formData);
      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you soon with volunteer opportunities.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        interests: [],
        availability: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${volunteerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-get-involved-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Get Involved
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Join us in making a difference for Tamil Nadu's environment
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Ways to Contribute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Volunteer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Join our field activities, tree plantation drives, and awareness campaigns
                  across Tamil Nadu.
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Weekend plantation drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Community workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Research assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" id="donate">
              <CardContent className="p-8 text-center">
                <div className="bg-chart-2/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Donate
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Support our restoration projects. Every contribution directly funds environmental
                  conservation.
                </p>
                <div className="text-left space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">₹500</span>
                    <span className="text-foreground">Funds 10 saplings</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">₹2,000</span>
                    <span className="text-foreground">Restores 100 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">₹10,000</span>
                    <span className="text-foreground">Sponsors a project</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  90% of donations go directly to field work
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-8 text-center">
                <div className="bg-chart-3/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-chart-3" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  Partner
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Collaborate with TERM through CSR initiatives, institutional partnerships, or
                  resource sharing.
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Corporate CSR programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Academic collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Joint research projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Sign-up Form */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Volunteer Sign-Up
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll connect you with opportunities that match your
              interests and availability.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    data-testid="input-volunteer-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-volunteer-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-testid="input-volunteer-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (City/District) *</Label>
                  <Input
                    id="location"
                    data-testid="input-volunteer-location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Chennai, Madurai"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Interest Areas * (Select at least one)</Label>
                  <div className="space-y-3">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          data-testid={`checkbox-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => toggleInterest(interest)}
                        />
                        <label
                          htmlFor={interest}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Input
                    id="availability"
                    data-testid="input-volunteer-availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    placeholder="e.g., Weekends, Monthly, During holidays"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    data-testid="textarea-volunteer-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your experience, skills, or why you want to volunteer..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="button-submit-volunteer"
                  className="w-full font-semibold"
                  size="lg"
                  disabled={formData.interests.length === 0 || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
