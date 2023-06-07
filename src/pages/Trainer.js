import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';

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
    <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <Space align="center" direction="vertical" style={{ marginBottom: 16 }}>
          <h3 className='mt-4'>Search Trainer</h3>
          <Input
            style={{ width: "40rem", height: "3rem", marginTop: "1rem", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
             // Adjust the width, height, and margin as desired
            placeholder="Search by name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Space>
        {searchTerm && (
          <Table
            style={{ width: "40rem", height: "3rem", marginTop: "1rem" }}
            title={() => 'Trainer List'} // Set the custom name here
            columns={columns}
            dataSource={filteredData}
            locale={{
              emptyText: 'No Trainer Name',
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  navigate(`/my-collection/${record.key}`);
                },
              };
            }}
          />
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Grow>

  );
}

export default Trainer;
