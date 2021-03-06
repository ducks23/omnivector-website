import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const service_id = "OSL-web-contact-gmail";
const template_id = "website_contact_us";
const user_id = "user_eFv8N0h2MvWBHK9jEX2SB";

const useStyles = makeStyles(theme => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    marginLeft: "5px",
    marginTop: 0,
    color: "white",
    opacity: 0.7,
    position: "relative",
    top: "-8px"
  }
}));

function Contact(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setSubmitionCompleted(false);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <Button
        variant={props.buttonType === "text" ? null : "contained"}
        color="primary"
        onClick={handleClickOpen}
        className={props.buttonType === "text" ? classes.tab : null}
      >
        {props.buttonPrefix}
        {props.buttonContext}
        {props.buttonSuffix}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{ zIndex: 1303 }}
      >
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">
              Contact Omnivector Solutions
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out your contact details along with a message to let
                us know what we can help you with. We can usually respond to
                requests withing 24 hours. Thanks!
              </DialogContentText>
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  message: "",
                  subject:
                    props.subjectPrefix +
                    props.subjectContext +
                    props.subjectSuffix
                }}
                onSubmit={(
                  values: IFormValues,
                  actions: FormikHelpers<IFormValues>
                ) => {
                  actions.setSubmitting(true);
                  setTimeout(() => {
                    emailjs
                      .send(
                        service_id,
                        template_id,
                        {
                          from_name: values.name,
                          from_email: values.email,
                          message_subject: values.subject,
                          message_body: values.message
                        },
                        user_id
                      )
                      .then(res => {
                        setSubmitionCompleted(true);
                      })
                      .catch(() => {
                        actions.setSubmitting(false);
                        alert("Error sending email...");
                      });
                  }, 1000);
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required("Email address is required."),
                  name: Yup.string().required("Name is required."),
                  message: Yup.string().required("Message is required."),
                  subject: Yup.string().required("Subject is required.")
                })}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        error={errors.name && touched.name}
                        label="name"
                        name="name"
                        variant="outlined"
                        required
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.name && touched.name && errors.name}
                        margin="normal"
                      />

                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        required
                        variant="outlined"
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                        margin="normal"
                      />

                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        variant="outlined"
                        required
                        label="subject"
                        name="subject"
                        defaultValue={props.subject}
                        className={classes.textField}
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.subject && touched.subject}
                        helperText={
                          errors.subject && touched.subject && errors.subject
                        }
                        margin="normal"
                      />
                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        variant="outlined"
                        error={errors.message && touched.message}
                        label="message"
                        name="message"
                        required
                        className={classes.textField}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        multiline
                        rows="8"
                        helperText={
                          errors.message && touched.message && errors.message
                        }
                        margin="normal"
                      />
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">
              Thanks for contacting us!
            </DialogTitle>
            <DialogContent>
              <DialogContentText>We will get back you soon.</DialogContentText>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
}

export default Contact;
