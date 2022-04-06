import React from "react";

export default function Gallery(props) {
// optional destructuring props here:

    // let objectImg = props.objectImg;
    // let title = props.title;
    // let artist = props.artist;

    // // or ...

    // let {objectImg, title, artist} = props;

    // and below would just be example ---> {objectImg} instead of {props.objectImg}

    return (
        <div style={{ width: "100%" }}>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    );
} 