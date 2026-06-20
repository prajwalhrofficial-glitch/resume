import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export class AIService {
  // Parse resume and extract information
  async parseResume(resumeText) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert resume parser. Extract and analyze resume information in JSON format.'
          },
          {
            role: 'user',
            content: `Parse this resume and extract: name, email, phone, summary, skills, experience, education. Format as JSON. Resume: ${resumeText}`
          }
        ],
        temperature: 0.3
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error parsing resume:', error);
      throw error;
    }
  }

  // Analyze resume for ATS compatibility
  async analyzeATSCompatibility(resumeText) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an ATS (Applicant Tracking System) expert. Analyze resume for ATS compatibility.'
          },
          {
            role: 'user',
            content: `Analyze this resume for ATS compatibility and provide: score (0-100), issues, suggestions. Format as JSON. Resume: ${resumeText}`
          }
        ],
        temperature: 0.3
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error analyzing ATS:', error);
      throw error;
    }
  }

  // Generate skill gap analysis
  async generateSkillGapAnalysis(userSkills, targetJobDescription) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a career counselor specializing in skill gap analysis.'
          },
          {
            role: 'user',
            content: `User has these skills: ${userSkills.join(', ')}. Target job: ${targetJobDescription}. Analyze skill gaps and provide: missing_skills, have_skills, learning_priority. Format as JSON.`
          }
        ],
        temperature: 0.4
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error generating skill gap analysis:', error);
      throw error;
    }
  }

  // Generate interview questions
  async generateInterviewQuestions(jobTitle, skills, experience) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an interview preparation expert. Generate relevant interview questions.'
          },
          {
            role: 'user',
            content: `Generate 10 interview questions for ${jobTitle} role. Skills: ${skills.join(', ')}. Experience: ${experience} years. Include technical and behavioral questions. Format as JSON with questions array.`
          }
        ],
        temperature: 0.6
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error generating interview questions:', error);
      throw error;
    }
  }

  // Generate learning roadmap
  async generateLearningRoadmap(skills, targetRole) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a learning roadmap expert. Create structured learning paths.'
          },
          {
            role: 'user',
            content: `Create a learning roadmap for someone with skills: ${skills.join(', ')} to reach ${targetRole}. Include phases, courses, projects, timeline. Format as JSON.`
          }
        ],
        temperature: 0.5
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error generating learning roadmap:', error);
      throw error;
    }
  }

  // Get career recommendations
  async getCareerRecommendations(profile) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a career counselor. Recommend suitable job roles based on profile.'
          },
          {
            role: 'user',
            content: `Based on this profile - Skills: ${profile.skills.join(', ')}, Experience: ${profile.experience} years, Education: ${profile.education}, Interests: ${profile.interests.join(', ')}. Recommend 5 suitable job roles with salary ranges and market demand. Format as JSON.`
          }
        ],
        temperature: 0.5
      });
      return JSON.parse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error getting career recommendations:', error);
      throw error;
    }
  }
}

export default new AIService();
