import React from "react";
import { ArrowUpRight, SquareCheckBig } from "lucide-react";
import Tag from "./ui/Tag";
import Accordion from "./ui/Accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We provide a comprehensive suite of digital marketing services including SEO, paid advertising (PPC), social media marketing, content marketing, email marketing, and analytics. Our team specializes in creating integrated marketing strategies that leverage multiple channels to maximize your ROI. We can handle everything from strategy development to implementation and optimization.",
    },
    {
      question: "How do you measure and report campaign success?",
      answer:
        "We believe in complete transparency and data-driven decisions. You'll receive detailed monthly reports showing key metrics such as traffic growth, conversion rates, engagement metrics, and ROI. We use advanced analytics tools to track all relevant KPIs and provide custom dashboards for real-time performance monitoring. Every quarter, we conduct an in-depth analysis to adjust strategies based on the data.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "While we work across various sectors, we have particular expertise in B2B software, e-commerce, professional services, and technology companies. Our team has successfully managed campaigns for both startups and enterprise-level businesses. We take time to understand your industry's specific challenges and opportunities to create tailored marketing strategies that deliver results.",
    },
    {
      question: "What's your approach to SEO and content strategy?",
      answer:
        "We take a holistic approach to SEO and content marketing. This includes technical SEO optimization, strategic keyword research, high-quality content creation, and authoritative link building. Our content strategy focuses on creating valuable, relevant content that addresses your target audience's needs while improving your search rankings. We also ensure your content strategy aligns with your overall business goals.",
    },
    {
      question: "How long until we see results from digital marketing efforts?",
      answer:
        "While some channels like PPC can show immediate results, others like SEO and content marketing typically take 3-6 months to show significant impact. We set realistic expectations and provide monthly progress updates. Our focus is on building sustainable, long-term growth rather than quick fixes. During the initial phases, we'll prioritize quick wins while building toward longer-term strategies.",
    },
    {
      question: "What makes your agency different from others?",
      answer:
        "We differentiate ourselves through data-driven strategy, transparent reporting, and strategic innovation. Unlike agencies that use a one-size-fits-all approach, we create custom strategies based on your specific goals and market position. Our team stays ahead of digital marketing trends and regularly implements new technologies and approaches. We also maintain a limited client roster to ensure each client receives dedicated attention from our senior team.",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
          <div className="sm:w-1/4 flex flex-col justify-between">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-br from-[#FA9214] via-[#F90200] to-[#F90200] text-transparent bg-clip-text">
                Questions
              </span>
            </h1>

            <div className="text-zinc-500">
              Got more questions? We're just a message away.{" "}
              <a
                href="#"
                className="text-[#FF0012] inline-flex items-center group"
              >
                Reach Out to Us
                <span className="relative w-5 h-5 overflow-hidden ml-1 flex items-center">
                  <span className="transition-transform duration-300 absolute inset-0 translate-y-full group-hover:translate-y-0 flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </span>
                  <span className="transition-transform duration-300 absolute inset-0 group-hover:-translate-y-full flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="sm:w-3/4">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
