import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

const ContactForm = ({ onAddContact }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onAddContact({ id: nanoid(), ...values });
      resetForm();
    }}
  >
    {() => (
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;