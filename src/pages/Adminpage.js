// src/AdminPage.js
import AddActivity from "./AddActivity";
import ActivityMap from "./ActivityMap";

function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddActivity />
      <ActivityMap />
    </div>
  );
}

export default AdminPage;
