// src/ActivityMap.js
import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "500px" };

function ActivityMap() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const activitiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(activitiesData);
    };

    fetchActivities();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={6} center={{ lat: 13.736717, lng: 100.523186 }}>
        {activities.map(activity => (
          <Marker
            key={activity.id}
            position={{
              lat: activity.location.latitude,
              lng: activity.location.longitude,
            }}
            title={activity.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default ActivityMap;
