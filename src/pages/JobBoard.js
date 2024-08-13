import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const JobBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const JobBoardHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const JobCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const JobDetails = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://api.example.com/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <JobBoardContainer>
      <JobBoardHeader>Job Board</JobBoardHeader>
      <JobList>
        {jobs.map((job) => (
          <JobCard key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <JobDetails>{job.company}</JobDetails>
            <JobDetails>{job.location}</JobDetails>
            <JobDetails>{new Date(job.datePosted).toLocaleDateString()}</JobDetails>
          </JobCard>
        ))}
      </JobList>
    </JobBoardContainer>
  );
};

export default JobBoard;
