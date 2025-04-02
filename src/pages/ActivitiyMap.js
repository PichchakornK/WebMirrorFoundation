import React, { useEffect, useState } from "react";

import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Container } from "react-bootstrap";

function ActivityMap() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const activitiesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(activitiesData);
    };

    fetchActivities();
  }, []);

  return (
    <Container>
      <LoadScript googleMapsApiKey="your-google-maps-api-key">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "500px" }}
          zoom={10}
          center={{ lat: 13.736717, lng: 100.523186 }}
        >
          {activities.map((activity) => (
            <Marker
              key={activity.id}
              position={{
                lat: parseFloat(activity.latitude),
                lng: parseFloat(activity.longitude),
              }}
            >
              <InfoWindow>
                <div>
                  <h5>{activity.name}</h5>
                  <p>{activity.activity}</p>
                  <p>{activity.location}</p>
                </div>
              </InfoWindow>
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
}

export default ActivityMap;
