import React from "react";
import PlaceList from "../components/PlaceList";

const dummy_places = [
    {
        id: "1",
        title: "Elevador Lacerda",
        description: "description place 1",
        image: "https://images.pexels.com/photos/13891370/pexels-photo-13891370.jpeg",
        address: "Praça Tomé de Souza, S/N - Centro, Salvador - BA",
        location: {
            lat: -12.9745321,
            lng: -38.5131251
        },
        creator: "user1"
    },
    {
        id: "2",
        title: "Elevador Lacerda",
        description: "description place 1",
        image: "https://images.pexels.com/photos/13891370/pexels-photo-13891370.jpeg",
        address: "Praça Tomé de Souza, S/N - Centro, Salvador - BA",
        location: {
            lat: -12.9745321,
            lng: -38.5131251
        },
        creator: "user2"
    }
]

const UserPlaces = props => {
    return <PlaceList items={dummy_places} />
};

export default UserPlaces;