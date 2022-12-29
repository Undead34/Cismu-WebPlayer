"use client";

import React from "react";

class Player extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="flex h-full w-full flex-row">
        <div className="flex flex-row">
          <div>back</div>
          <div>play/pause</div>
          <div>next</div>
        </div>
        <div className="flex flex-1 flex-col">
          <input type="range" />
          <div className="flex flex-row">
            <div className="flex-grow">image</div>
            <div className="felx-row flex flex-grow">
              <div className="flex-grow">
                <p>playing</p>
              </div>
              <div className="flex flex-row flex-grow">
                <p>artist</p>º<p>albun</p>
              </div>
            </div>
            <div className="flex-grow">
              <div>like</div>
              <div>options</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div>volume</div>
          <div>loop</div>
          <div>more</div>
        </div>
      </div>
    );
  }
}

export default Player;
