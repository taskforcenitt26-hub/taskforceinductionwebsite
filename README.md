# Taskforce NIT Trichy - Run Club Website

A modern, responsive website for the Taskforce Run Club at NIT Trichy, built with React, Tailwind CSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean and modern interface with yellow and white color scheme
- **Multiple Pages**: 
  - Home page with hero section, stats, and features
  - About page with mission, vision, values, and timeline
  - Members page with leadership team, coaches, and active members
  - Events page with upcoming events, past events, and regular activities
  - Contact page with application form and contact information

## Tech Stack

- **React 18**: Modern React with functional components and hooks
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing for single-page application
- **Vite**: Fast build tool and development server
- **JavaScript**: Pure JavaScript without TypeScript

## Color Palette

- Primary Yellow: `#facc15` (yellow-400)
- Secondary Yellow: `#fef08a` (yellow-200)
- Dark Yellow: `#eab308` (yellow-500)
- White: `#ffffff`
- Gray shades for text and backgrounds

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Members.jsx         # Members page
│   ├── Events.jsx          # Events page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component with routing
├── main.jsx               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## Key Components

### Navbar
- Responsive navigation with mobile menu
- Active page highlighting
- Sticky header with shadow

### Footer
- Contact information
- Quick links
- Social media links
- Club information

### Pages

#### Home Page
- Hero section with call-to-action
- Statistics showcase
- Features grid
- Latest updates section

#### About Page
- Mission and vision
- Core values
- Training schedule
- Club timeline
- Achievements

#### Members Page
- Leadership team profiles
- Professional coaches
- Active members showcase
- Member benefits
- Tabbed interface

#### Events Page
- Upcoming events
- Past events
- Regular activities
- Event calendar
- Registration information
- Event guidelines

#### Contact Page
- Membership application form
- Contact information
- FAQ section
- Location and directions
- Social media links

## Styling

The website uses Tailwind CSS with custom utility classes:

- `.btn-primary`: Primary button styling (yellow background)
- `.btn-secondary`: Secondary button styling (white background, yellow border)
- `.section-padding`: Consistent section padding
- `.container-max`: Maximum width container with auto margins

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for Taskforce NIT Trichy Run Club.

## Contact

For any questions or suggestions, please contact the development team or the club leadership.

---

**Taskforce NIT Trichy** - Building a community of passionate runners! 🏃‍♂️🏃‍♀️