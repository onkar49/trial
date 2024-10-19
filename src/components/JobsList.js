import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../layout/Header';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Header/>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Salary: {job.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
