import React from 'react'
import "./content.css";

export default function content() {
    let firstSentence = "WORK HARDER, GET STRONGER";
  return (
    <div class="content">
      <div class="firstContent">
        <h1>{firstSentence}</h1>
        <h1 class="secondContent">
          EASY WITH OUR <span>GYM</span>
        </h1>
      </div>
      
      
    </div>
  );
}
