import React from "react";

const Players = (props) => {
  return (
    <div className="item">
      <div>
        <img
          className="ui small image"
          src={props.imageUrl}
          alt={props.name}
        />
      </div>

      <div className="middle aligned content">
        <div className="description">
          <button alt="Votre Candidat préferé">
            <i
              onClick={props.votePlayer.bind(this, props.id)}
              className="large caret up icon"
            />
            {props.votes}
          </button>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Players;
