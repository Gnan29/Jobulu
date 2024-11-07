import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from the backend
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Job Listings</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map(job => (
          <div key={job._id} className="border p-4 mb-4">
            <h2 className="text-2xl">{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
