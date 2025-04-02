import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ActivityMap = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const activitiesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setActivities(activitiesData);
    };
    fetchActivities();
  }, []);

  return (
    <div className="container">
      <h2>แผนที่กิจกรรม</h2>
      <MapContainer center={[13.736717, 100.523186]} zoom={6} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {activities.map(activity => (
          <Marker key={activity.id} position={[parseFloat(activity.latitude), parseFloat(activity.longitude)]}>
            <Popup>
              <b>{activity.name}</b><br />
              {activity.description}<br />
              วันที่: {activity.date}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ActivityMap;
