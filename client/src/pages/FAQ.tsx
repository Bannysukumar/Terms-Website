import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQCategory = "all" | "general" | "membership" | "donations" | "volunteering" | "partnerships";

const faqData = [
  {
    id: "1",
    category: "general",
    question: "What is ecological restoration?",
    answer: "Ecological restoration is the process of assisting the recovery of an ecosystem that has been degraded, damaged, or destroyed. It involves restoring native vegetation, improving soil health, managing water resources, and reestablishing biodiversity to return the ecosystem to a healthy, sustainable state."
  },
  {
    id: "2",
    category: "general",
    question: "What areas does TERM cover in Tamil Nadu?",
    answer: "TERM works across all districts of Tamil Nadu, with major projects in Chennai, Madurai, Coimbatore, Kancheepuram, Kodaikanal, and coastal regions. We collaborate with local communities, government agencies, and partners to implement restoration projects tailored to each region's unique ecological needs."
  },
  {
    id: "3",
    category: "volunteering",
    question: "How can I volunteer with TERM?",
    answer: "You can sign up through our 'Get Involved' page. We offer various volunteering opportunities including field work, tree plantation drives, awareness campaigns, research assistance, and administrative support. Volunteers can choose activities based on their interests, skills, and availability."
  },
  {
    id: "4",
    category: "volunteering",
    question: "Do I need prior experience to volunteer?",
    answer: "No prior experience is necessary! We provide training and guidance for all volunteer activities. Whether you're a student, professional, or retiree, we welcome anyone passionate about environmental conservation. We match volunteers with activities suitable to their skill level."
  },
  {
    id: "5",
    category: "donations",
    question: "How are donations used?",
    answer: "90% of all donations go directly to field work including tree saplings, restoration equipment, community training programs, and project implementation. The remaining 10% covers operational costs. We publish detailed annual reports showing exactly how funds are allocated across our projects."
  },
  {
    id: "6",
    category: "donations",
    question: "Can I sponsor a specific project?",
    answer: "Yes! We offer project-specific sponsorship opportunities. You can sponsor an entire restoration project, fund a specific initiative like wetland restoration or afforestation, or even sponsor individual elements like tree saplings or water quality testing. Contact us at partnerships@termcouncil.org for details."
  },
  {
    id: "7",
    category: "membership",
    question: "Is there a membership program?",
    answer: "Currently, TERM operates through volunteer participation and partnerships rather than formal membership. However, regular volunteers and donors receive updates about our projects, invitations to events, and opportunities to participate in decision-making through community forums."
  },
  {
    id: "8",
    category: "partnerships",
    question: "How can my organization partner with TERM?",
    answer: "We welcome partnerships with corporations, academic institutions, NGOs, and government agencies. Partnership opportunities include CSR projects, joint research initiatives, resource sharing, capacity building, and co-funding restoration projects. Contact us at partnerships@termcouncil.org to discuss collaboration."
  },
  {
    id: "9",
    category: "partnerships",
    question: "What are the benefits of corporate partnerships?",
    answer: "Corporate partners gain CSR fulfillment, positive environmental impact, community engagement opportunities, employee volunteer programs, brand visibility through our channels, and detailed impact reports for stakeholder communication. All partnerships align with sustainable development goals."
  },
  {
    id: "10",
    category: "general",
    question: "How do I stay updated on TERM's activities?",
    answer: "Follow us on social media (Facebook, Twitter, LinkedIn, YouTube), subscribe to our newsletter through the Resources page, check our News & Events section regularly, or visit our gallery to see recent project photos. We also publish quarterly updates and annual reports."
  },
];

export default function FAQ() {
  const [categoryFilter, setCategoryFilter] = useState<FAQCategory>("all");

  const filteredFAQs = categoryFilter === "all"
    ? faqData
    : faqData.filter(faq => faq.category === categoryFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1
            data-testid="text-faq-title"
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our work, volunteering, and partnerships
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center overflow-x-auto">
          <Tabs value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as FAQCategory)}>
            <TabsList>
              <TabsTrigger value="all" data-testid="filter-category-all">All</TabsTrigger>
              <TabsTrigger value="general" data-testid="filter-category-general">General</TabsTrigger>
              <TabsTrigger value="volunteering" data-testid="filter-category-volunteering">Volunteering</TabsTrigger>
              <TabsTrigger value="donations" data-testid="filter-category-donations">Donations</TabsTrigger>
              <TabsTrigger value="membership" data-testid="filter-category-membership">Membership</TabsTrigger>
              <TabsTrigger value="partnerships" data-testid="filter-category-partnerships">Partnerships</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No FAQs found in this category.
              </p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  data-testid={`faq-item-${faq.id}`}
                  className="bg-card border border-card-border rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-heading font-semibold text-left text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Can't find the answer you're looking for? Feel free to reach out to our team.
          </p>
          <a href="/contact">
            <button
              data-testid="button-contact-us"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2"
            >
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
