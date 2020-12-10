import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🚫": "Prohibited",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair Symbol",
  "🚻": "Restroom"
};
var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  // enter and see part
  var [emojiVar, emojiFun] = useState("");
  function onChangeHandeler(event) {
    var emojiEntered = event.target.value;
    emojiVar = emojiDictionary[emojiEntered];
    if (emojiVar === undefined) {
      emojiVar = "We don't have this in our database";
    }
    emojiFun(emojiVar);
  }
  // click and see part
  function onClickHandeler(emoji) {
    var emojiVar = emojiDictionary[emoji];
    emojiFun(emojiVar);
  }

  return (
    <div className="App">
      <h1>inside edge </h1>
      {/* enter and see part */}
      <input onChange={onChangeHandeler}></input>
      <h3>=> {emojiVar}</h3>
      {/* click and ssee part */}
      <h3>Symbols in our Databse </h3>
      {emojiArray.map((emoji) => {
        return (
          <span
            className="emojiDisplay"
            onClick={() => onClickHandeler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
