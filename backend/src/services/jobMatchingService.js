export class JobMatchingService {
  // Mock job database
  jobDatabase = [
    {
      id: 1,
      title: 'Frontend Developer',
      requiredSkills: ['React', 'JavaScript', 'CSS', 'HTML'],
      minExperience: 2,
      salary: { min: 50000, max: 80000 },
      demand: 'High'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      requiredSkills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      minExperience: 3,
      salary: { min: 70000, max: 120000 },
      demand: 'Very High'
    },
    {
      id: 3,
      title: 'Backend Developer',
      requiredSkills: ['Node.js', 'Python', 'Database Design', 'API Design'],
      minExperience: 3,
      salary: { min: 65000, max: 110000 },
      demand: 'High'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      requiredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
      minExperience: 4,
      salary: { min: 80000, max: 130000 },
      demand: 'Very High'
    },
    {
      id: 5,
      title: 'Data Scientist',
      requiredSkills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL'],
      minExperience: 2,
      salary: { min: 75000, max: 130000 },
      demand: 'Very High'
    }
  ];

  matchJobs(userSkills, userExperience) {
    const matches = this.jobDatabase.map(job => {
      const matchedSkills = userSkills.filter(skill =>
        job.requiredSkills.some(req => req.toLowerCase().includes(skill.toLowerCase()))
      );

      const matchPercentage = (matchedSkills.length / job.requiredSkills.length) * 100;
      const experienceSufficient = userExperience >= job.minExperience;

      return {
        ...job,
        matchPercentage: Math.round(matchPercentage),
        matchedSkills,
        experienceSufficient,
        missingSkills: job.requiredSkills.filter(
          skill => !userSkills.some(us => skill.toLowerCase().includes(us.toLowerCase()))
        ),
        score: (matchPercentage + (experienceSufficient ? 20 : 0)) / 1.2
      };
    });

    return matches.sort((a, b) => b.score - a.score);
  }

  getTopMatches(userSkills, userExperience, limit = 5) {
    return this.matchJobs(userSkills, userExperience).slice(0, limit);
  }
}

export default new JobMatchingService();
