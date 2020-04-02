import React from "react";
import './HofList.css'

const HofList = ({listOfGameResponse}) => {
  return (
      <div className="container" id="hof-list">
          {listOfGameResponse.map((object) =>
              <div
                  className="offset-md-3 col-md-5"
                  key={object.id}>
                  {object.winner} won in {object.turnnumber} turns for a score of {object.forscore} pts ({object.score} pts).
              </div>
          )}
      </div>
  )
};

export default HofList