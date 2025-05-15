import React, { useState } from 'react';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

const containerStyle = {
  maxWidth: 900,
  margin: '2em auto',
  padding: '2em 1em',
  background: '#f7faff',
  borderRadius: 12,
  boxShadow: '0 2px 16px rgba(25,118,210,0.08)'
};

const headerStyle = {
  textAlign: 'center',
  color: '#1976d2',
  fontWeight: 700,
  marginBottom: 28,
  letterSpacing: 1
};

const AdminDashboard = () => {
  const [refresh, setRefresh] = useState(false);

  // Toggle refresh to trigger re-fetch in CategoryList
  const handleCategoryAdded = () => setRefresh(r => !r);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Salon Service Admin Panel</h1>
      <CategoryForm onCategoryAdded={handleCategoryAdded} />
      {/* Pass refresh as prop instead of key to avoid unmounting */}
      <CategoryList refresh={refresh} />
    </div>
  );
};

export default AdminDashboard;
