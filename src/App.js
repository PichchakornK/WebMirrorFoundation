import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "500px" };
const center = { lat: 13.736717, lng: 100.523186 }; // กรุงเทพฯ

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/activities")
            .then((res) => res.json())
            .then((data) => setActivities(data));
    }, []);

    return (
        <div>
            <h1>กิจกรรมศูนย์แบ่งต่อ</h1>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={6}>
                    {activities.map((act) => (
                        <Marker key={act._id} position={{ lat: act.lat, lng: act.lng }} title={act.name} />
                    ))}
                </GoogleMap>
            </LoadScript>

            <div>
                {activities.map((act) => (
                    <p key={act._id}>{act.name} ({act.type})</p>
                ))}
            </div>
        </div>
    );
}

export default App;
