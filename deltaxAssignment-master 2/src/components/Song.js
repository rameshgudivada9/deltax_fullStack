import { React } from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const colors = {
  orange: "#FFA500",
  grey: "#808080",
};
function Song(props) {
  const stars = Array(5).fill(0);
  const [currentValue, setcurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  console.log(stars);
  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      <div id="songsname">
        <div id="imgcontrol">
          <img class="img12" src={props.Artwork}></img>
        </div>
        <div id="song-control">{props.song}</div>
        <div id="song-control">{props.dateOfRelease}</div>
        <div id="song-control">{props.Artist}</div>
        <div class="starstyle">
          {stars.map((_, index) => {
            return (
              <AiFillStar
                key={index}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
          {/* <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar /> */}
        </div>
      </div>
    </div>
  );
}
export default Song;
