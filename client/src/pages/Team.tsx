import { Mail, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teamMemberImage from "@assets/generated_images/Environmental_team_member_portrait_f301e506.png";

const teamMembers = [
  {
    id: "1",
    name: "Dr. Priya Sundaram",
    designation: "Executive Director",
    role: "executive",
    bio: "Environmental scientist with 20+ years of experience in ecological restoration and sustainable development.",
    image: teamMemberImage,
    email: "priya@termcouncil.org",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    designation: "Field Coordinator - Chennai",
    role: "coordinator",
    bio: "Leading restoration efforts in Chennai region with focus on urban wetlands and river systems.",
    image: teamMemberImage,
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Lakshmi Narayanan",
    designation: "Biodiversity Specialist",
    role: "executive",
    bio: "Expert in native species conservation and habitat restoration with Ph.D. in Ecology.",
    image: teamMemberImage,
    email: "lakshmi@termcouncil.org",
  },
  {
    id: "4",
    name: "Arun Krishnan",
    designation: "Community Engagement Lead",
    role: "coordinator",
    bio: "Facilitating partnerships with local communities and organizing awareness programs across Tamil Nadu.",
    image: teamMemberImage,
  },
  {
    id: "5",
    name: "Dr. Meena Iyer",
    designation: "Research Director",
    role: "advisory",
    bio: "Leading research initiatives on climate change adaptation and ecosystem resilience.",
    image: teamMemberImage,
    linkedin: "https://linkedin.com",
  },
  {
    id: "6",
    name: "Vikram Shankar",
    designation: "Volunteer Coordinator",
    role: "volunteer",
    bio: "Managing volunteer programs and organizing tree plantation drives statewide.",
    image: teamMemberImage,
  },
  {
    id: "7",
    name: "Kavitha Ramesh",
    designation: "Water Resources Specialist",
    role: "executive",
    bio: "Hydrologist specializing in river restoration and water quality management.",
    image: teamMemberImage,
    email: "kavitha@termcouncil.org",
  },
  {
    id: "8",
    name: "Suresh Babu",
    designation: "Field Coordinator - Madurai",
    role: "coordinator",
    bio: "Overseeing restoration projects in southern Tamil Nadu with emphasis on afforestation.",
    image: teamMemberImage,
  },
];

const roleCategories = [
  { key: "executive", label: "Executive Committee", members: teamMembers.filter(m => m.role === "executive") },
  { key: "coordinator", label: "Field Coordinators", members: teamMembers.filter(m => m.role === "coordinator") },
  { key: "advisory", label: "Advisory Board", members: teamMembers.filter(m => m.role === "advisory") },
  { key: "volunteer", label: "Volunteer Leaders", members: teamMembers.filter(m => m.role === "volunteer") },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-team-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals and volunteers driving ecological restoration across Tamil Nadu
          </p>
        </div>
      </section>

      {/* Team Members by Role */}
      {roleCategories.map((category) => (
        category.members.length > 0 && (
          <section key={category.key} className="py-12 md:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
                {category.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {category.members.map((member) => (
                  <Card
                    key={member.id}
                    data-testid={`card-team-${member.id}`}
                    className="group hover-elevate transition-all"
                  >
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-heading text-2xl">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {member.designation}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {member.bio}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            data-testid={`link-email-${member.id}`}
                            className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-linkedin-${member.id}`}
                            className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-twitter-${member.id}`}
                            className="p-2 rounded-lg bg-muted hover-elevate active-elevate-2 transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      ))}

      {/* Join Our Team CTA */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We're always looking for passionate individuals to join our mission. Whether as staff,
            volunteers, or partners, there's a place for you at TERM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/get-involved">
              <button
                data-testid="button-volunteer-cta"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2"
              >
                Become a Volunteer
              </button>
            </a>
            <a href="/contact">
              <button
                data-testid="button-contact-cta"
                className="px-6 py-3 bg-background border border-border text-foreground rounded-lg font-semibold hover-elevate active-elevate-2"
              >
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
