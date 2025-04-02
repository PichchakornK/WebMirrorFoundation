import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { db } from "../firebase"; // Firebase import
import { collection, getDocs } from "firebase/firestore";

const mapContainerStyle = { width: "100%", height: "500px" };
const defaultCenter = { lat: 13.736717, lng: 100.523186 }; // กรุงเทพฯ

function ActivityMap() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const querySnapshot = await getDocs(collection(db, "activities"));
      const activitiesData = querySnapshot.docs.map(doc => doc.data());
      setActivities(activitiesData);
    };

    fetchActivities();
  }, []);

  const parseDate = (date) => {
    // หาก date เป็น Timestamp ของ Firestore ให้แปลงเป็น Date
    if (date && date.seconds) {
      return new Date(date.seconds * 1000).toLocaleDateString();
    }
    // หาก date เป็นสตริงหรือวันที่ที่สามารถแปลงได้
    const parsedDate = new Date(date);
    return isNaN(parsedDate) ? "ไม่ทราบวันที่" : parsedDate.toLocaleDateString();
  };

  return (
    <div>
      <h2>กิจกรรมทั้งหมดบนแผนที่</h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={6}>
          {activities.map((act, index) => (
            <Marker 
              key={index} 
              position={{ lat: parseFloat(act.latitude), lng: parseFloat(act.longtitude) }} 
              title={act.name}
              onClick={() => setSelectedActivity(act)}
            />
          ))}

          {selectedActivity && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedActivity.latitude),
                lng: parseFloat(selectedActivity.longtitude),
              }}
              onCloseClick={() => setSelectedActivity(null)}
            >
              <div>
                <h3>{selectedActivity.name}</h3>
                <p>{selectedActivity.description}</p>
                <p><strong>วันที่:</strong> {parseDate(selectedActivity.date)}</p>
                <p><strong>ที่อยู่:</strong> {selectedActivity.location}</p>
                <p><strong>ละติจูด:</strong> {selectedActivity.latitude}</p>
                <p><strong>ลองจิจูด:</strong> {selectedActivity.longtitude}</p>
                {selectedActivity.imgURL && (
                  <img 
                    src={selectedActivity.imgURL} 
                    alt={selectedActivity.name} 
                    style={{ width: "150px", height: "100px", objectFit: "cover", borderRadius: "8px" }} 
                  />)}

              </div>
            </InfoWindow>
          )}

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default ActivityMap;
