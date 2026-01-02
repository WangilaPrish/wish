# Birthday Wish Website 🎉

A modern and attractive birthday wish website built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design** - Beautiful gradient backgrounds and smooth animations
🎁 **Three Main Sections** - Gift, Dedication, and Interactive Pop-up
💝 **Interactive Pop-up** - Engaging birthday questions with falling heart animations
🎊 **Responsive** - Works great on desktop, tablet, and mobile devices
⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── Landing.tsx      # Main landing page with 3 buttons
│   ├── Gift.tsx         # Gift page
│   └── Dedication.tsx   # Dedication page
├── components/
│   └── BirthdayPopup.tsx # Interactive pop-up component
├── App.tsx              # Main app routing
├── main.tsx             # Entry point
└── index.css            # Global styles

```

## Features Details

### Landing Page
- Three beautiful gradient buttons
- Gift button - navigates to gift page
- Dedication button - navigates to dedication page
- Pop-up button - opens interactive birthday questions modal

### Pop-up Questions
1. **"Did you like your birthday?"**
   - Yes: Drops red hearts for 2 seconds, then shows next question
   - No: Shows "I thought you gonna love it"

2. **"Was this the best ever?"**
   - Yes: Drops red hearts for 2 seconds, then shows final message
   - No: Shows "My bad"

3. **Final Message**: "I love you Marcel" with celebration emoji

## Technologies Used

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

## Customization

Feel free to customize colors, messages, and animations to make it even more personal!

---
