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

const useStyles = makeStyles(theme => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    marginLeft: "5px",
    marginTop: 0,
    color: "white",
    opacity: 0.8,
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
        variant={props.buttonType === "header" ? null : "contained"}
        color="primary"
        onClick={handleClickOpen}
        className={props.buttonType === "header" ? classes.tab : null}
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
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  console.log(values);
                  setSubmitionCompleted(true);
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required("Email address required"),
                  name: Yup.string().required("Name required"),
                  message: Yup.string().required("Message required"),
                  subject: Yup.string().required("Subject required")
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
