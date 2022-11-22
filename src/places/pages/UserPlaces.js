import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from 'react-router-dom';

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
        creator: "1"
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
        creator: "2"
    }
]

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = dummy_places.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;