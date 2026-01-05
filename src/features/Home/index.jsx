"use client";
import { useEffect, useState } from "react";
import User from "./userInfo";

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const localData = localStorage.getItem("users");

    if (localData) {
      console.log("Found local data, using that instead of API.");
      setUsers(JSON.parse(localData));
    } else {
      const BASE_URL = "https://dummyjson.com/users";
      async function fetchData() {
        try {
          const response = await fetch(BASE_URL);
          const data = await response.json();
          const fetchedUsers = data?.users || [];
          setUsers(fetchedUsers);
          localStorage.setItem("users", JSON.stringify(fetchedUsers));
          console.log("Data arrived from API:", fetchedUsers);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
      fetchData();
    }
  }, []);
  return (
    <>
      <div className="bg-orb-layer" aria-hidden="true">
        <div className="orb floating-18" />
        <div className="orb floating-20" />
        <div className="orb floating-22" />
      </div>
      <div className="relative z-10">
        <User users={users} setUsers={setUsers} />
      </div>
    </>
  );
};
