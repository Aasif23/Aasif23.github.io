import React from 'react';
import { Twitter, Linkedin, Mail, FileText } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:example@email.com',
      label: 'Email',
    },
    {
      icon: FileText,
      href: '/resume.pdf',
      label: 'Resume',
      download: true,
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label, download }) => (
            <a
              key={label}
              href={href}
              download={download}
              target={download ? undefined : '_blank'}
              rel={download ? undefined : 'noopener noreferrer'}
              className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}