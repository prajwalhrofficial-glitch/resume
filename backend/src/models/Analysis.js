import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
  resumeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resume',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  atsScore: Number,
  atsAnalysis: {
    score: Number,
    issues: [String],
    suggestions: [String]
  },
  skillGapAnalysis: {
    targetJob: String,
    missingSkills: [String],
    haveSkills: [String],
    learningPriority: [String]
  },
  careerRecommendations: [{
    jobTitle: String,
    matchPercentage: Number,
    salary: { min: Number, max: Number },
    demand: String,
    missingSkills: [String]
  }],
  interviewQuestions: [String],
  learningRoadmap: {
    phases: [{
      phase: String,
      duration: String,
      topics: [String]
    }],
    courses: [{
      title: String,
      provider: String,
      duration: String
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Analysis', analysisSchema);
