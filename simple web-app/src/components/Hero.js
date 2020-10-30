import React from "react";
import { Button } from "./Button.js";
import "./Hero.css";

export function Hero() {
    return (
        <div className="container__hero">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="hero__btns">
                <Button buttonSize="btn__large" buttonStyle="btn__outline">
                    Get started
                </Button>
                <Button buttonSize="btn__large" buttonStyle="btn__primary">
                    Watch trailer <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    );
}
