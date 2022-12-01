import React from 'react'
import "./header.css";

export default function header() {
  return (
    <div>
      <div class="head">
        <div class="left">
          <h1>
            <span>E</span>ZIO
          </h1>
        </div>

        <div class="right">
          <span>Classes</span>
          <span>Personal worrkout</span>
          <span>Schedule</span>
          <span>SIGN UP</span>
        </div>

        <div class="tick">
          &#10004; <span>No credit card required</span>{" "}
          <a href="https://manishpudasaini.github.io/FirstSite/">
            <button className="contentButton">BECOME A MEMBER</button>
          </a>
        </div>
      </div>
    </div>
  );
}
