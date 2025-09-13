# Overview

This is a full-stack café website application for "Qahwah" - a Saudi coffee shop that blends traditional Arabic coffee culture with modern café experiences. The application showcases the café's menu, gallery, story, and contact information through a sophisticated single-page application with a REST API backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a warm coffee-inspired color palette
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Structure**: Single-page application with component-based sections (Hero, Menu, Gallery, About, Contact, Footer)

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful API with endpoints for menu items and categories
- **Data Storage**: Currently using in-memory storage with interfaces designed for easy database integration
- **Development**: Vite middleware integration for seamless development experience
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Database Schema Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defines menu items and categories tables with proper relationships
- **Validation**: Zod schemas for runtime validation integrated with Drizzle
- **Structure**: 
  - Menu items with id, name, description, price, category, and availability
  - Categories with id, name, description, icon, and ordering

## Development Tooling
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Build System**: ESBuild for server bundling, Vite for client bundling
- **Code Quality**: Structured project with shared types between client and server
- **Hot Reload**: Vite HMR for development with Express middleware integration

## Application Features
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Internationalization**: Arabic and English text integration with Arabic font support
- **Performance**: Optimized images, lazy loading, and efficient state management
- **Accessibility**: Radix UI primitives ensure WCAG compliance

# External Dependencies

## Core Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript support
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing solution

## UI and Styling
- **Shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography

## Backend Dependencies
- **Express.js**: Web framework for REST API
- **Drizzle ORM**: Type-safe database ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database service
- **Zod**: Runtime schema validation

## Build and Development Tools
- **Vite**: Frontend build tool with development server
- **ESBuild**: Fast JavaScript bundler for server code
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Tailwind CSS

## Utility Libraries
- **class-variance-authority**: Type-safe variant management for components
- **clsx**: Conditional CSS class management
- **date-fns**: Date manipulation utilities
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

The application is designed for easy deployment on Replit with automatic database provisioning and build processes.