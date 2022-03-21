import React from "react";

function extArea() {
  return (
      <textarea autofocus id="vision" rows=3 cols=50 maxlength=100> </textarea>
  );
}

function Text() {
  return (
      <input type="text" id="reason1" autofocus autofocus size=100 maxlength=100>
  );
}

function Select() {
  return (
    <select>
      <option>Adventure</option>
      <option>Comfort</option>
      <option>Freedom</option>
      <option>Health</option>
      <option>Intimacy</option>
      <option>Love</option>
      <option>Passion</option>
      <option>Power</option>
      <option>Security</option>
      <option>Success</option>
    </select>
  );
}

export default TextArea, Text, Select;