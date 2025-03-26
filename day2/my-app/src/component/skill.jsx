import React from 'react';

export default function Skill({name, percentage}) {
    return (
      <>
        <div className="skill mb-3">
          <p>{name}</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
          </div>

          

        </div>
      </>
    );
  }