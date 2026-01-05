import React, { useState } from "react";
import Modal from "../userInfoModal"; // Adjust the path as needed

const EditUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User Profile Details"
        onConfirm={() => console.log("Saved!")}
      >
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john@example.com
          </p>
          <div className="p-4 bg-blue-50 rounded-lg text-sm text-blue-700">
            This user is currently active and has professional status.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditUser;
