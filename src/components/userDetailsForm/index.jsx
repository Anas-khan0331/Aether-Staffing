const UserDetailsForm = ({ userInfo }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-2">
        <div className="col-span-12 sm:col-span-8">
          <p className="text-sm text-gray-500 uppercase">Email</p>
          <p className="text-gray-800">{userInfo.email}</p>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <p className="text-sm text-gray-500 uppercase">Phone</p>
          <p className="text-gray-800">{userInfo.phone}</p>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <p className="text-sm text-gray-500 uppercase">Department</p>
          <p className="text-gray-800">
            {userInfo.address?.address}, {userInfo.address?.city}
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <p className="text-sm text-gray-500 uppercase">Address</p>
          <p className="text-gray-800">{userInfo.company?.department}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetailsForm;
