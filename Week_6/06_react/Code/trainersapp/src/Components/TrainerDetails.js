import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './TrainerMock.js';

const TrainerDetails = () => {
  const { id } = useParams();
  const trainer = trainersMock.find(t => t.id === id);

  return (
    <div>
      <h2>Trainers Details</h2>
      <p><b>{trainer.name} ({trainer.primarySkill})</b></p>
      <p>{trainer.email}</p>
      <p>{trainer.mobile}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerDetails;