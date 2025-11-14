# Commercy

A modern e-commerce platform built with Next.js 16, featuring product management and a clean dashboard interface.

## Features

-  🛍️ **Product Catalog**: Browse and view detailed product information
-  📊 **Dashboard**: Admin interface for managing products (create, edit, delete)
-  🌍 **Internationalization**: Multi-language support with next-intl
-  🎨 **Modern UI**: Built with Tailwind CSS 4
-  📱 **Responsive Design**: Optimized for all device sizes
-  ✅ **Type-Safe**: Full TypeScript support with Zod validation
-  🗄️ **MongoDB Integration**: Mongoose ODM for database operations

## Tech Stack

-  **Framework**: Next.js 16 with App Router
-  **Frontend**: React 19
-  **Styling**: Tailwind CSS 4
-  **Database**: MongoDB with Mongoose
-  **Validation**: Zod
-  **Internationalization**: next-intl
-  **Language**: TypeScript

## Project Structure

```
commercy/
├── app/
│   ├── (main)/              # Main storefront routes
│   │   ├── products/        # Product listing and details
│   │   └── page.tsx         # Home page
│   ├── api/                 # API routes
│   │   └── products/        # Product CRUD endpoints
│   └── dashboard/           # Admin dashboard
│       ├── new/             # Create new product
│       └── [id]/            # Edit/delete product
├── components/              # React components
│   ├── dashboard/           # Dashboard-specific components
│   ├── products/            # Product display components
│   └── users/               # User-related components
├── lib/
│   ├── models/              # Mongoose schemas
│   ├── types/               # TypeScript type definitions
│   ├── validation/          # Zod validation schemas
│   └── mongodb.ts           # Database connection
└── utils/                   # Utility functions
```

## Getting Started

### Prerequisites

-  Node.js 20 or higher
-  MongoDB database
-  npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd commercy
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

-  `npm run dev` - Start development server
-  `npm run build` - Build for production
-  `npm start` - Start production server
-  `npm run lint` - Run ESLint

## Key Features

### Product Management

-  Create new products with detailed information
-  Edit existing product details
-  Delete products with confirmation
-  View product catalog with card-based layout

### Dashboard

-  Dedicated admin interface at `/dashboard`
-  Form-based product creation and editing
-  Type-safe form validation with Zod
-  Styled with custom CSS for dashboard-specific elements

### API Routes

RESTful API endpoints for product operations:

-  `GET /api/products` - List all products
-  `POST /api/products` - Create new product
-  `GET /api/products/[id]` - Get product by ID
-  `PUT /api/products/[id]` - Update product
-  `DELETE /api/products/[id]` - Delete product

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.
