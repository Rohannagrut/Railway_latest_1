import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Col } from "antd";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Layout>get all user details and printing option's here</Layout>
    </div>
  );
};

export default Users;
