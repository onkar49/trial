import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PostJob = () => {
  const initialValues = {
    title: '',
    description: '',
    salary: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Job Title is required'),
    description: Yup.string().required('Job Description is required'),
    salary: Yup.number().required('Salary is required'),
  });

  const onSubmit = async (values) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Job posted successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label>Job Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Description</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <div>
            <label>Salary</label>
            <Field type="number" name="salary" />
            <ErrorMessage name="salary" component="div" />
          </div>
          <button type="submit">Post Job</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostJob;
