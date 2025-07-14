
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/ui/BlogCard";
import Footer from "@/components/layout/Footer";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample blog data
  const blogData = [
    {
      id: "getting-started-aws",
      title: "Getting Started with AWS: A Beginner's Guide",
      excerpt: "Learn the basics of AWS and how to set up your first cloud resources in this comprehensive guide for beginners.",
      date: "May 20, 2023",
      author: "Jane Doe",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      category: "tutorial",
    },
    {
      id: "serverless-architecture",
      title: "Embracing Serverless Architecture with AWS Lambda",
      excerpt: "Discover how serverless computing is changing application development and how to leverage AWS Lambda for your projects.",
      date: "April 15, 2023",
      author: "John Smith",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      category: "tutorial",
    },
    {
      id: "machine-learning-sagemaker",
      title: "Building ML Models with Amazon SageMaker",
      excerpt: "A step-by-step guide to creating, training, and deploying machine learning models using Amazon SageMaker.",
      date: "March 28, 2023",
      author: "Sarah Patel",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
      category: "tutorial",
    },
    {
      id: "event-recap-cloud-day",
      title: "Event Recap: AWS Cloud Day at IIT Madras",
      excerpt: "Highlights from our recent AWS Cloud Day event featuring workshops, guest speakers, and networking opportunities.",
      date: "May 5, 2023",
      author: "Emily Johnson",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
      category: "event",
    },
    {
      id: "cloud-certifications-guide",
      title: "The Ultimate Guide to AWS Certifications",
      excerpt: "Navigate the AWS certification path with our comprehensive guide to help you choose the right certification for your career goals.",
      date: "February 12, 2023",
      author: "David Kim",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "guide",
    },
    {
      id: "cloud-security-best-practices",
      title: "Cloud Security Best Practices for AWS",
      excerpt: "Essential security practices to protect your AWS infrastructure and applications from common vulnerabilities.",
      date: "January 30, 2023",
      author: "Michael Wang",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      category: "security",
    },
  ];

  // Filter blogs based on search term
  const filteredBlogs = searchTerm
    ? blogData.filter(
        blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-aws-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AWS Cloud Blog</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Articles, tutorials, and insights on cloud computing and AWS technologies
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aws-blue"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  author={blog.author}
                  image={blog.image}
                  className="animate-fade-in"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl text-aws-blue mb-4">No articles found</h3>
              <p className="text-aws-darkgrey mb-6">
                No articles match your search criteria. Try different keywords.
              </p>
              <Button 
                onClick={() => setSearchTerm("")}
                className="bg-aws-orange hover:bg-aws-lightorange"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-aws-blue mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-aws-darkgrey mb-8">
            Stay up-to-date with the latest articles, tutorials, and cloud computing insights.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aws-blue"
            />
            <Button className="bg-aws-blue hover:bg-aws-darkgrey whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
