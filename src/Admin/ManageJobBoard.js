import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ManageJobBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JobForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const JobCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
`;

const JobDetails = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const ManageJobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    datePosted: '',
    description: '',
  });
  const [editJob, setEditJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://api.example.com/jobs'); // Replace with actual API
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editJob) {
        await axios.put(`https://api.example.com/jobs/${editJob.id}`, newJob); // Replace with actual API
        setJobs((prevJobs) =>
          prevJobs.map((job) =>
            job.id === editJob.id ? { ...job, ...newJob } : job
          )
        );
      } else {
        const response = await axios.post('https://api.example.com/jobs', newJob); // Replace with actual API
        setJobs((prevJobs) => [...prevJobs, response.data]);
      }
      setNewJob({
        title: '',
        company: '',
        location: '',
        datePosted: '',
        description: '',
      });
      setEditJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const handleEdit = (job) => {
    setNewJob(job);
    setEditJob(job);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.example.com/jobs/${id}`); // Replace with actual API
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <ManageJobBoardContainer>
      <JobForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={newJob.title}
          onChange={handleInputChange}
          placeholder="Job Title"
          required
        />
        <Input
          type="text"
          name="company"
          value={newJob.company}
          onChange={handleInputChange}
          placeholder="Company"
          required
        />
        <Input
          type="text"
          name="location"
          value={newJob.location}
          onChange={handleInputChange}
          placeholder="Location"
          required
        />
        <Input
          type="date"
          name="datePosted"
          value={newJob.datePosted}
          onChange={handleInputChange}
          placeholder="Date Posted"
          required
        />
        <TextArea
          name="description"
          value={newJob.description}
          onChange={handleInputChange}
          placeholder="Job Description"
          rows="4"
          required
        />
        <Button type="submit">{editJob ? 'Update Job' : 'Add Job'}</Button>
      </JobForm>
      <JobList>
        {jobs.map((job) => (
          <JobCard key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <JobDetails>Company: {job.company}</JobDetails>
            <JobDetails>Location: {job.location}</JobDetails>
            <JobDetails>Date Posted: {new Date(job.datePosted).toLocaleDateString()}</JobDetails>
            <JobDetails>Description: {job.description}</JobDetails>
            <Button onClick={() => handleEdit(job)}>Edit</Button>
            <Button onClick={() => handleDelete(job.id)}>Delete</Button>
          </JobCard>
        ))}
      </JobList>
    </ManageJobBoardContainer>
  );
};

export default ManageJobBoard;
