import React from "react"
import { TimerService } from "../data/services/TimerService";

export default function Video(props) {

    const video = props.video || {};
    const onClick = props.onClick || {};

    return(
        <li onClick={() => onClick(video)}>
            <img src={video.cover} alt={video.title} />
            <span>{TimerService.formatTime(video.duration)}</span>
            <h2>{video.title}</h2>
        </li>
    )
}