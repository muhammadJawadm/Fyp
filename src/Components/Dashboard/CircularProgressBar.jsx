import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const CircularProgressBar = ({ percentage ,Name}) => {
  const circleStyle = {
    strokeDasharray: `${percentage} 100`,
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.scoreBox}>{Name} <FontAwesomeIcon icon={faInfoCircle}/> </div>
      <div style={styles.circularProgressBar}>
        <svg width="60" height="120" viewBox="0 0 36 36" style={styles.circularChart}>
          <path
            style={styles.circleBg}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            style={{ ...styles.circle, ...circleStyle }}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" style={styles.percentage}>{percentage}%</text>
        </svg>
      </div>
      <button style={styles.button}>See All analysis</button>
    </div>
  );
};

const styles = {
  container: {
    width: '200px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreBox: {
    marginBottom: '10px',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  circularProgressBar: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  circularChart: {
    transform: 'rotate(0)',
  },
  circleBg: {
    fill: 'none',
    strokeWidth: '3.8',
  },
  circle: {
    fill: 'none',
    strokeWidth: '2.8',
    stroke: '#4caf50',
    strokeLinecap: 'round',
    transition: 'stroke-dasharray 0.6s ease 0s',
  },
  percentage: {
    fill: '#666',
    fontSize: '0.6em',
    textAnchor: 'middle',
    dominantBaseline: 'middle',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CircularProgressBar;
