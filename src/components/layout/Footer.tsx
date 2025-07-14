import { Link } from "react-router-dom";
import { Mail, Link as LinkIcon, Calendar, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-5">
              <div className="rounded bg-white p-1.5 mr-3">
                <div className="text-aws-blue font-bold text-lg">AWS</div>
              </div>
              <span className="font-bold text-xl">Cloud Club</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Empowering future cloud innovators at IIT Madras through hands-on learning and community building.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/awscloudclub_iitm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-aws-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/aws-cloud-club-iitm/ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-aws-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.meetup.com/aws-cloud-club-at-indian-institute-of-technology-madras/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-aws-orange transition-colors flex items-center justify-center w-5 h-5"
                aria-label="Meetup"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19.24 13.991c-.531.261-1.134.391-1.749.391-1.869 0-3.389-1.42-3.389-3.189 0-.33.061-.66.161-.96-.6-.18-1.23-.27-1.891-.27-3.45 0-6.27 2.82-6.27 6.27 0 3.45 2.82 6.27 6.27 6.27 3.45 0 6.27-2.82 6.27-6.27 0-.33-.03-.66-.09-.96.48-.3.87-.72 1.14-1.23.33.03.66.06.99.06 2.61 0 4.74-2.13 4.74-4.74 0-2.61-2.13-4.74-4.74-4.74-2.61 0-4.74 2.13-4.74 4.74 0 .33.03.66.09.96-.48.3-.87.72-1.14 1.23-.33-.03-.66-.06-.99-.06-1.869 0-3.389 1.42-3.389 3.189 0 1.77 1.52 3.19 3.389 3.19.615 0 1.218-.13 1.749-.391-1.14 2.13-.36 4.83 1.77 5.97 2.13 1.14 4.83.36 5.97-1.77 1.14-2.13.36-4.83-1.77-5.97z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5 text-gray-100">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-aws-orange transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-aws-orange transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-aws-orange transition-colors text-sm">Events</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-aws-orange transition-colors text-sm">Our Team</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-aws-orange transition-colors text-sm">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5 text-gray-100">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-aws-orange transition-colors flex items-center text-sm"
                >
                  <LinkIcon size={14} className="mr-2" /> AWS Official
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/certification/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-aws-orange transition-colors flex items-center text-sm"
                >
                  <LinkIcon size={14} className="mr-2" /> Certifications
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/training/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-aws-orange transition-colors flex items-center text-sm"
                >
                  <LinkIcon size={14} className="mr-2" /> Training
                </a>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-aws-orange transition-colors flex items-center text-sm"
                >
                  <Calendar size={14} className="mr-2" /> Events Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5 text-gray-100">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email us at</p>
                  <a
                    href="mailto:awscloud@iitm.ac.in"
                    className="text-gray-300 hover:text-aws-orange transition-colors text-sm font-medium"
                  >
                    cloudcoders@study.iitm.ac.in
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <Calendar size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Join our next event</p>
                  <Link
                    to="/events"
                    className="text-gray-300 hover:text-aws-orange transition-colors text-sm font-medium"
                  >
                    View upcoming events
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} AWS Cloud Club – IIT Madras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;