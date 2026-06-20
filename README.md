# AI-Powered Career Guidance & Resume Analyzer ⭐⭐⭐⭐⭐

## Overview

An intelligent platform that helps students analyze their resumes, identify skill gaps, and receive personalized career guidance using AI. This application leverages OpenAI/Gemini API to provide comprehensive career insights and interview preparation.

## Problem Statement

Students struggle to:
- Know which skills they are missing
- Determine if their resume is ATS-friendly
- Identify which jobs they are suitable for
- Prepare effectively for interviews
- Understand their career path

## Key Features

### Core Features
- ✅ **Resume Upload & Parsing** - Upload PDF resumes for analysis
- ✅ **AI Resume Analysis** - Comprehensive resume evaluation
- ✅ **Skill Gap Detection** - Identify missing skills for target roles
- ✅ **Career Recommendations** - Personalized job role suggestions
- ✅ **Resume Score** - ATS-friendliness rating (0-100)
- ✅ **Interview Question Generation** - Role-specific interview prep
- ✅ **Learning Roadmap** - Personalized skill development plan

### AI Capabilities
- Resume summarization and extraction
- Skill identification and categorization
- Job matching based on profile
- Interview preparation materials
- Career path recommendations

## Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Router** - Routing
- **pdfjs-dist** - PDF parsing

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Multer** - File upload handling
- **pdf-parse** - PDF parsing
- **OpenAI API / Gemini API** - AI capabilities (free tier supported)

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- OpenAI API key or Gemini API key

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/prajwalhrofficial-glitch/resume.git
cd resume
```

**2. Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your API keys and MongoDB URI
npm run dev
```

**3. Setup Frontend**
```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Career Guidance
```

## Features

### 1. Resume Upload & Parsing
- PDF file validation and upload
- Automatic text extraction
- Data structuring (name, email, skills, experience, education)

### 2. AI Resume Analysis
- ATS score calculation (0-100)
- Issue detection
- Formatting suggestions
- Keyword optimization

### 3. Skill Gap Analysis
- Current vs. required skills comparison
- Missing skills identification
- Learning priority ranking

### 4. Career Recommendations
- Job matching algorithm
- Salary range estimation
- Market demand analysis
- Experience level consideration

### 5. Interview Preparation
- Role-specific questions generation
- STAR method guidance
- Behavioral and technical questions

### 6. Learning Roadmap
- Phased learning approach
- Course recommendations
- Project assignments
- Timeline estimation

## Project Structure

```
resume/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   └── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── docs/
    ├── SETUP_GUIDE.md
    ├── API_DOCUMENTATION.md
    └── FEATURES.md
```

## API Endpoints

### Resume Management
- `POST /api/resume/upload` - Upload resume
- `GET /api/resume/:id` - Get resume details
- `DELETE /api/resume/:id` - Delete resume

### Analysis
- `POST /api/analysis/parse` - Parse and analyze resume
- `GET /api/analysis/:id` - Get analysis results
- `POST /api/analysis/skill-gap` - Skill gap analysis

### Career
- `POST /api/career/recommendations` - Get job recommendations
- `POST /api/career/interview-questions` - Generate interview questions
- `POST /api/career/learning-roadmap` - Generate learning roadmap

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please open an issue on GitHub.

## Roadmap

- [ ] LinkedIn integration
- [ ] Video interview practice
- [ ] Community job board
- [ ] Mentorship matching
- [ ] Mobile app

## Authors

- **Prajwal HR** - Initial work

## Acknowledgments

- OpenAI for GPT models
- Google for Gemini API
- MongoDB for database
- React and Node.js communities