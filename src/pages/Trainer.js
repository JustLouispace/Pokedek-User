import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Trainer = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/all-user');
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
  ];

  const data = users.map((user, index) => ({
    key: user._id,  // Assuming _id is the unique identifier of each user
    Name: user.Name,
  }));

  const filteredData = data.filter((item) =>
    item.Name ? item.Name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  return (
    <div>
      <Space align="center" style={{ marginBottom: 16 }}>
        <h1>Trainer</h1>
        <Input placeholder="Search by name" onChange={(e) => setSearchTerm(e.target.value)} />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              navigate(`/my-collection/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}

export default Trainer;
