import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ModulePage } from './pages/ModulePage';
import { Sidebar } from './components/Sidebar';
import { useBusinesses } from './hooks/useBusinesses';

function App() {
  const {
    businesses,
    selectedBusinessId,
    setSelectedBusinessId,
    addBusiness,
    deleteBusiness,
    updateBusiness,
    selectedBusiness
  } = useBusinesses();

  // Force re-render of routes when business changes
  const key = selectedBusinessId || 'empty';

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar
          businesses={businesses}
          selectedBusinessId={selectedBusinessId}
          onSelectBusiness={setSelectedBusinessId}
          onAddBusiness={addBusiness}
          onDeleteBusiness={deleteBusiness}
          onUpdateBusiness={updateBusiness}
        />
        <div className="flex-1 ml-64">
          {selectedBusiness ? (
            <Routes key={key}>
              <Route path="/" element={<HomePage />} />
              <Route path="/module/:moduleId" element={<ModulePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Business Launch</h2>
                <p className="text-gray-600 mb-4">Get started by adding your first business</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
