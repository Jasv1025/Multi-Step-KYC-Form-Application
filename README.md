# Multi-Step KYC Form Application

A responsive, multi-step Know Your Customer (KYC) form built with **React**, **Vite**, **Tailwind CSS**, and **React Hook Form**, containerized using **Docker**.

## Features

- Multi-step form with progress indicator
- Form validation with Zod and React Hook Form
- File upload handling
- Review step before submission
- Styled using Tailwind CSS
- Packaged and served with Docker and Vite preview

## Technologies

- React 19 (with TypeScript)
- Vite 4
- Tailwind CSS 3
- React Hook Form + Zod
- Docker (Node 18 base)

## Directory Structure

```
code/
├── app/                  # Form logic and pages
├── components/           # Reusable UI components
├── src/                  # App entry point (main.tsx, App.tsx)
├── lib/                  # Utility modules if needed
├── public/               # Static assets (if any)
├── Dockerfile
├── docker-compose.yml
├── index.html
├── tailwind.config.js
├── postcss.config.cjs
└── package.json
```

## Getting Started

### Prerequisites

- Docker + Docker Compose
- Node.js (for local testing outside Docker)

### Running with Docker

1. Build the container:

   ```bash
   docker-compose build --no-cache
   ```

2. Start the app:

   ```bash
   docker-compose up
   ```

3. Access the app at:

   ```
   http://localhost:4173/
   ```

### Running Locally (Dev Mode)

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Form Steps

1. **Step 1** - Full Name, DOB, Country
2. **Step 2** - Email, Phone, Address
3. **Step 3** - SSN, File Upload, Employment Status
4. **Review** - View and confirm submitted values

## Validation Schema (Zod)

Each step’s input is validated using a centralized Zod schema located in:

```
app/utils/validation.ts
```

## License

This project is licensed under the MIT License.