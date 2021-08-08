import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import PopupCard from "./PopupCard";


const Map = ({results}) => {
    const mapCenter = getCenter(results.map(item => ({
        latitude : item.lat,
        longitude: item.long,
    })));

    const [selectedLocation, setSelectedLocation] = useState()
    const [viewport, setViewport] = useState({
        ...mapCenter,
        width : '100%',
        height: '100%',
        zoom  : 11
    });

    return (
        <ReactMapGL
            mapStyle={process.env.mapbox_style}
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            {results.map(item => (
                <div key={item.long}>
                    <Marker longitude={item.long} latitude={item.lat} offsetLeft={-15} offsetTop={-15}>
                        <button
                            className="cursor-pointer"
                            type="button"
                            onClick={() => setSelectedLocation(item)}
                            aria-label="push-pin"
                            role="img"
                        >
                            <LocationMarkerIcon className="h-8 text-red-400"/>
                        </button>
                    </Marker>

                    {selectedLocation?.long === item.long && (
                        <Popup
                            className="z-10"
                            longitude={item.long}
                            latitude={item.lat}
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                        >
                            <PopupCard
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                price={item.price}
                                star={item.star}
                                description={item.description}
                                total={item.total}
                            />
                        </Popup>
                    ) }
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map