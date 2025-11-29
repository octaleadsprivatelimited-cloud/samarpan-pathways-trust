import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AnnualReports = () => {
  const reports = [
    {
      year: "2023",
      title: "Annual Report 2023",
      description: "Comprehensive overview of our programs, achievements, and financial statements for the year 2023.",
      highlights: ["10,000+ Lives Impacted", "50+ Programs Launched", "25+ Villages Served"]
    },
    {
      year: "2022",
      title: "Annual Report 2022",
      description: "Detailed report covering our initiatives, impact stories, and organizational growth in 2022.",
      highlights: ["8,000+ Beneficiaries", "40+ Active Programs", "20+ Partner Organizations"]
    },
    {
      year: "2021",
      title: "Annual Report 2021",
      description: "Annual summary of activities, financial performance, and community impact during 2021.",
      highlights: ["6,000+ People Reached", "35+ Programs", "15+ New Partnerships"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="hero-gradient text-white py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Annual Reports</h1>
          <p className="text-xl opacity-95">Transparency and accountability in our work</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              We believe in complete transparency with our stakeholders. Our annual reports provide detailed information about our programs, impact, financial statements, and future plans.
            </p>
          </div>

          <div className="space-y-6">
            {reports.map((report, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-10 h-10 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-heading font-bold text-2xl text-primary">{report.year}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{report.title}</h3>
                      <p className="text-muted-foreground mb-4">{report.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {report.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-light-bg rounded-full text-sm text-muted-foreground">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button className="bg-primary hover:bg-primary/90 gap-2">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Financial Transparency</h3>
              <p className="text-muted-foreground mb-4">
                All our annual reports include detailed financial statements audited by certified chartered accountants, ensuring complete transparency in fund utilization.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Detailed income and expenditure statements</li>
                <li>• Program-wise fund allocation</li>
                <li>• Audited financial reports</li>
                <li>• Donor acknowledgments</li>
              </ul>
            </div>

            <div className="bg-light-bg p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-4">Impact Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Each report includes comprehensive documentation of our programs' impact, including success stories, statistics, and community feedback.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Beneficiary testimonials</li>
                <li>• Program impact metrics</li>
                <li>• Photo documentation</li>
                <li>• Future goals and plans</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center bg-primary/10 p-8 rounded-lg">
            <h3 className="font-heading font-bold text-2xl mb-4">Need More Information?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For detailed financial information, program reports, or specific queries about our work, please don't hesitate to reach out to us.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="mailto:info@ysvsb.org">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnnualReports;
