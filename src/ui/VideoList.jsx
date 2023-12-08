import React from "react";
import Video from "./Video";

const _list = [
    {
        id: 1,
        title : 'Gato e cachorro brincando',
        duration: 10,
        url : 'https://media.istockphoto.com/id/1363304711/pt/v%C3%ADdeo/little-dog-and-siamese-cat-playing-together-outdoors-close-up.mp4?s=mp4-640x640-is&k=20&c=dWOYW9-_af7T7gAAbh2SHMK1Vh_zyu4gu1tUY33ufUI=',
        cover: 'https://media.istockphoto.com/id/1349349263/pt/foto/cute-fluffy-friends-a-cat-and-a-dog-catch-a-flying-butterfly-in-a-sunny-summer.jpg?s=2048x2048&w=is&k=20&c=i7bYEorfnj6fk4hMCRTlk7sbb-jzZ2yoZTivo_ZUA_o='

    },
    {
        id: 2,
        title : 'Gato tomando banho',
        duration: 46,
        url : 'https://media.istockphoto.com/id/656023344/pt/v%C3%ADdeo/siamese-cat-licking-herself-close-up-side-shot.mp4?s=mp4-640x640-is&k=20&c=NOUTPNAEMVbxU3Mo1RIiU65hNBbK7CjQWQS7FvKLUQs=',
        cover: 'https://media.istockphoto.com/id/1366284705/pt/foto/siamese-cat-sitting-on-a-rock.jpg?s=2048x2048&w=is&k=20&c=zLE81DxHIYMnA-d_ldH_0gRmLvSSTsdlNbz3wSwSlMM='

    },
    {
        id: 3,
        title : 'Guaxinim comendo',
        duration: 103,
        url : 'https://media.istockphoto.com/id/1326162052/pt/v%C3%ADdeo/raccoon.mp4?s=mp4-640x640-is&k=20&c=6kMpyciXcwE_R7oXtg4pdMerAFjwJuOVxrKQhE9lqm0=',
        cover: 'https://media.istockphoto.com/id/531693869/pt/foto/beb%C3%AA-guaxinim-comer.jpg?s=2048x2048&w=is&k=20&c=n-GSWa50DsTyQ4PAJ8jgZgTse7Q2dCcmS63cu_HeQ88='

    }
]

export default function VideoList() {

    function onClick(video) {
        console.log(video)
    }

    return(
        <ul className="list">
            { 
                _list.map((item) => { 
                    return <Video video={item} key={item.id} onClick={onClick} /> 
                } ) 
            }
        </ul>
    )
}