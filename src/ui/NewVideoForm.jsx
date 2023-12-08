import React, { useState } from "react"

export default function NewVideoForm() {

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [cover, setCover] = useState('');
    const [url, setUrl] = useState('');

    function save() {
        const newVideo = {
            title,
            duration,
            url,
            cover
        }
        console.log(newVideo);
    }

    

    return(
        <div className="form">
            <label htmlFor="title">Título:</label>
            <input id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

            <label htmlFor="duration">duration:</label>
            <input id="duration" type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />

            <label htmlFor="cover">cover:</label>
            <input id="cover" type="text" value={cover} onChange={(event) => setCover(event.target.value)} />

            <label htmlFor="url">url:</label>
            <input id="url" type="text" value={url} onChange={(event) => setUrl(event.target.value)} />

            <button onClick={save}>Salvar</button>
        </div>
    )
}