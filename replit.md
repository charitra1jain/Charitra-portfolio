# Overview

This is a personal portfolio website for Charitra Jain, an undergraduate student, graphic designer, and UI/UX freelancer. The application is a full-stack web application built with React on the frontend and Express.js on the backend, featuring a modern design system with shadcn/ui components and a custom gradient color scheme.

The portfolio showcases:
- Personal introduction and professional background
- Skills categorized by domain (Design, Marketing, Management, Technical, Software, Digital Media)
- Projects and education history
- An AI assistant chatbot interface for visitor interaction
- Contact form for inquiries
- Social media links (LinkedIn, Instagram, Figma, Pinterest)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System:**
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom configuration
- Design tokens using CSS variables for theming
- Custom color scheme: warm gradient backgrounds (#FFF7EA to #F0E6FF) with accent colors (#D84315, #3559E0, #FFD447)

**Component Structure:**
- Page-based organization with dedicated sections (HeroSection, ProfileSection, ExperienceSection, AiAssistantSection, ContactFormSection, SocialLinksSection)
- Reusable UI components from shadcn/ui library
- Custom hooks for mobile responsiveness and toast notifications

## Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server setup for both API and static file serving
- Middleware for JSON parsing, URL encoding, and request logging

**Development Environment:**
- Vite integration in development mode with HMR (Hot Module Replacement)
- Custom error overlay and development banners for Replit environment
- Separate production and development build processes

**Data Storage:**
- In-memory storage implementation (MemStorage class) as the current data layer
- Abstract storage interface (IStorage) for future database integration
- User model with basic CRUD operations (getUser, getUserByUsername, createUser)

**Database Schema (Prepared for PostgreSQL):**
- Users table with id (UUID), username (unique), and password fields
- Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- Schema validation using Zod and drizzle-zod integration

**Rationale:** The in-memory storage allows rapid prototyping while the database schema is prepared for production deployment with PostgreSQL. The abstract interface ensures easy migration without code changes.

## Session Management

**Approach:**
- connect-pg-simple for PostgreSQL session store (when database is connected)
- Express session middleware prepared for authentication flows

**Alternatives Considered:**
- JWT tokens: Rejected in favor of session-based auth for better security and session management
- In-memory sessions: Not suitable for production due to lack of persistence

## External Dependencies

**UI & Component Libraries:**
- Radix UI primitives for accessible component foundation
- shadcn/ui for pre-built, customizable components
- Lucide React for consistent iconography
- class-variance-authority and clsx for dynamic styling

**Data & State Management:**
- TanStack Query for server state caching and synchronization
- React Hook Form with Zod resolvers for form validation

**Database & ORM:**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- drizzle-kit for migrations and schema management

**Styling:**
- Tailwind CSS with PostCSS for utility-first styling
- Custom fonts: Inter, Futura PT, DM Sans, Fira Code, Geist Mono, Architects Daughter

**Development Tools:**
- TypeScript for type safety across the stack
- ESBuild for server bundling
- Replit-specific plugins for development experience (cartographer, dev-banner, runtime-error-modal)

**Third-party Services:**
- Google Fonts API for web fonts
- Social media platforms (LinkedIn, Instagram, Figma, Pinterest) for external linking