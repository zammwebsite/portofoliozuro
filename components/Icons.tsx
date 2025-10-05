import React from 'react';

const iconProps = {
  className: "w-8 h-8 md:w-10 md:h-10 text-accent-blue-glow group-hover:scale-110 transition-transform",
};

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.63,2.37L10.37,6.88L14.75,12L10.37,17.12L12.63,21.63L21.5,12L12.63,2.37Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.13,2.37L2.5,6.88V17.12L5.13,21.63H9.5L12,17.12V6.88L9.5,2.37H5.13Z"
    />
  </svg>
);


export const ReactIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76l-2.12 2.12M12 2v2M4.93 4.93l1.41 1.41M2 12h2M17.66 17.66l-1.41-1.41M12 20v2M7.76 16.24l2.12-2.12"></path></svg>;
export const NextjsIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path></svg>;
export const TailwindIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6zM12 2C9 2 6 5 6 8s3 6 6 6 6-3 6-6-3-6-6-6z"></path></svg>;
export const NodejsIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9.5 16.5h-2l3-4.5-3-4.5h2l2 3 2-3h2l-3 4.5 3 4.5h-2l-2-3-2 3z"></path></svg>;
export const PythonIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm-1-5v-4H9v-2h2V7h2v4h2v2h-2v4h-2zm4.5-9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-8 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"></path></svg>;
export const PremiereProIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"></path></svg>;
export const AIIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4m0 16v-4m8-8h-4M4 12H8m10.5-6.5L18 10m-10.5 6.5L8 14M7.5 7.5L6 6m10.5 10.5L18 18"></path></svg>;
export const FigmaIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a3 3 0 116 0 3 3 0 01-6 0zm-3-3a3 3 0 100 6 3 3 0 000-6zm3-6a3 3 0 10-3 3 3 3 0 003-3zm0 12a3 3 0 103 3 3 3 0 00-3-3zm-3 3a3 3 0 100-6 3 3 0 000 6z"></path></svg>;
export const GitIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-6 6-6-6M12 18V6"></path></svg>;
export const MongoDBIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 1.79 5 4.5V12c0 2.76-2.24 4.5-5 4.5z"></path></svg>;
export const CreativityIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"></path><path d="M14 7h7v7"></path></svg>;
export const CommunicationIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg>;
export const ProblemSolvingIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-4M4 12H2m10-8V2m8 10h2M7 7l-2-2m14 0l-2 2m-5 5a3 3 0 100-6 3 3 0 000 6z"></path></svg>;
export const AdaptabilityIcon = () => <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9.5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7H2m13 4l-4-4 4-4"></path></svg>;
export const MailIcon = () => <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>;
export const InstagramIcon = () => <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.228 1.667-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.38 3.222-7.58 7.58-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.2 4.358 3.222 7.38 7.58 7.58 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 7.38-3.222 7.58-7.58.058-1.28.072-1.688-.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-3.222-7.38-7.58-7.58-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>;
