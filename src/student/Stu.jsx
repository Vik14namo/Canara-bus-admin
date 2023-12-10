// src/components/Table.js

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
i//mport { collection, getDocs } from "firebase/firestore"; 
const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Doe', status: 'Accepted' },
    // Add more data as needed
  ]);

  const [confirmDelete, setConfirmDelete] = useState(null);
  const getStudents=async()=>{
    const querySnapshot = await getDocs(collection(db, "user"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

useEffect(() =>{
    getStudents
},[]);

  }
  const handleView = (id) => {
    alert(`Viewing item with ID: ${id}`);
  };

  const handleAccept = (id) => {
    alert(`Accepting item with ID: ${id}`);
  };

  const handleReject = (id) => {
    setConfirmDelete(id);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter(item => item.id !== confirmDelete);
    setData(updatedData);
    setConfirmDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(null);
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
              <td className="py-2 px-4 border-b">
                <button className="mr-2 text-blue-500" onClick={() => handleView(item.id)}>View</button>
                <button className="mr-2 text-green-500" onClick={() => handleAccept(item.id)}>Accept</button>
                <button className="text-red-500" onClick={() => handleReject(item.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {confirmDelete && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <button className="mr-2 text-red-500" onClick={handleConfirmDelete}>Delete</button>
            <button className="text-gray-500" onClick={handleCancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
