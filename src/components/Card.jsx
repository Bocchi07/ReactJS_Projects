import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="anime-card-wrapper">
      <div>
        <h1>h!anime</h1>
      </div>

      <div className="search-wrapper">
        <input type="text " placeholder="Search anime..." />
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/13/13267.png"
            alt="magnifying-glass-icon"
            className="search-icon-button"
          />
        </button>
      </div>

      <div className="anime-recommendation-text">
        <p>
          Top search:Wind BreakerSolo LevelingOne PieceKaiju No. 8Black
          CloverJujutsu Kaisen 2nd SeasonMy Hero Academia Season 7An Archdemon's
          Dilemma: How to Love Your Elf BrideOverflow (Uncensored)Ninja Kamui
          Share....
        </p>
      </div>

      <div className="watch-anime-btn-wrapper">
        <button>
          Watch anime{" "}
          <img src="https://static.vecteezy.com/system/resources/previews/015/337/678/original/right-arrow-icon-free-png.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
