import React from "react";
import Layout from "../components/Layout";
import { Col, Form, Input, Row, DatePicker, Space, TimePicker } from "antd";

const ApplyForm = () => {
  const { RangePicker } = DatePicker;
  const handleFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      <h1 className="text-center">Apply here</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4>Personal Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Full Name"
              name=" fullName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your FullName" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="Number" placeholder="your Phone No" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Age"
              name="age"
              required
              rules={[{ required: true }]}
            >
              <Input type="Number" placeholder="your age" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Enter you'r Birthdate"
              name="birth"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your Birthday" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="registration no"
              name="registration"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="registration no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="sex"
              name="sex"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="sex" />
            </Form.Item>
          </Col>
        </Row>
        {/* railway details */}
        <h4> Railway Form Details </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="from"
              name="from"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="From" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="to"
              name="to"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="To" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Caste"
              name="caste"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your caste" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Season Ticket No"
              name="seasonticketNo"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Season Ticket no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="reason for applying "
              name="reason"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Internship purpose" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Timings"
              name="timings"
              required
              rules={[{ required: true }]}
            >
              <RangePicker />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>

          <Col xs={24} md={24} lg={8}>
            <div className="d-flex justify-content-end ">
              <button className="btn btn-primary form-btn">Submit</button>
            </div>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyForm;
