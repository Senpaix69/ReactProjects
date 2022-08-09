import React from "react";
import html2canvas from 'html2canvas';

export default function PostComponent(props){

    function handleDownload(){
        const target = document.getElementById("quote-pic");
        html2canvas(target).then((canvas) => {
            const image = canvas.toDataURL("image/jpg", 0.9);
            var anchor = document.createElement('a');
            anchor.setAttribute("href", image);
            anchor.setAttribute("download", "quote-pic.jpg");
            anchor.click();
            anchor.remove();
        })
    }

    return (
        <div className="post-component">
            <div className="post-main mt-md-5" id="quote-pic">
                <div className="post-main-heading">
                    <h3>{props.heading}</h3>
                    <p>{props.subHeading}</p>
                </div>
                <img src={props.img} alt="Test"/>
                <div className="post-quote">
                    <h6>{props.quote.length <= 270 ? props.quote : "Nothing..."}</h6>
                    <p>{props.author}</p>
                </div>
            </div>
            <div>
                <button onClick={props.handleClick} className="post-button">Generate</button>
                <button className="post-download" onClick={handleDownload}><img src="./download-icon.png" alt="" />Download</button>
            </div>
        </div>
    );
}