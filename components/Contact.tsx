import React, { useState } from 'react';
import { MailIcon, InstagramIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    // Placeholder for API call
    console.log('Form submitted:', formData);
    setStatus('Your message has been sent. Thank you!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text transition-shadow">Get In Touch</h2>
        <p className="text-center text-lg text-dark-text/80 dark:text-light-text/80 mb-12">Have a project in mind or just want to say hello? Let's connect.</p>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-dark/50 border border-white/20 focus:ring-2 focus:ring-accent-blue focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-dark/50 border border-white/20 focus:ring-2 focus:ring-accent-blue focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-dark/50 border border-white/20 focus:ring-2 focus:ring-accent-blue focus:outline-none transition"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 rounded-full font-bold text-white bg-accent-blue hover:bg-accent-blue-glow glow-shadow-hover transition-all duration-300">
                Send Message
              </button>
              {status && <p className="text-center mt-4 text-accent-blue">{status}</p>}
            </form>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a href="mailto:azambachrul02@gmail.com" className="flex items-center p-4 rounded-lg bg-white/10 dark:bg-dark/50 hover:bg-accent-blue/10 transition-colors group">
                <MailIcon />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-accent-blue group-hover:underline">azambachrul02@gmail.com</p>
                </div>
              </a>
              <a href="https://www.instagram.com/abczamm" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-lg bg-white/10 dark:bg-dark/50 hover:bg-accent-blue/10 transition-colors group">
                <InstagramIcon />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-accent-blue group-hover:underline">@abczamm</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;