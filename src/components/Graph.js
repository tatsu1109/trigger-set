import React from 'react';
// import PropTypes from 'prop-types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default function Graph({ data }) {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

// Task.propTypes = {
//   /** Composition of the task */
//   task: PropTypes.shape({
//     /** Id of the task */
//     id: PropTypes.string.isRequired,
//     /** Title of the task */
//     title: PropTypes.string.isRequired,
//     /** Current state of the task */
//     state: PropTypes.string.isRequired,
//   }),
//   /** Event to change the task to archived */
//   onArchiveTask: PropTypes.func,
//   /** Event to change the task to pinned */
//   onPinTask: PropTypes.func,
// };