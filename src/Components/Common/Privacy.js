import { Typography } from "@mui/material";
import React from "react";

const Privacy = () => {
  const styles = {
    container: {
      padding: "0em",
      maxWidth: "90%",
      margin: "auto",
      fontFamily: "Sans-Serif",
    },
    heading: {
      textAlign: "center",
      marginTop: "1em",
      marginBottom: "0.3em",
      fontSize: "1.8em",
    },
    paragraph: {
      textAlign: "left",
      marginBottom: "1em",
      fontSize: "1.2em",
      lineHeight: "30px",
    },
    paragraphInfo: {
      textAlign: "left",
      marginBottom: "0em",
      fontSize: "1.2em",
      lineHeight: "30px",
    },
    paragraphLeft: {
      textAlign: "left",
      marginTop: "1em",
      fontSize: "1.2em",
      lineHeight: "30px",
      fontWeight: "600",
    },
    paragraphLast: {
      textAlign: "left",
      marginBottom: "0em",
      fontSize: "1.2em",
      lineHeight: "30px",
    },
    bulletPoints: {
      textAlign: "left",
      marginLeft: "1.5em",
      fontSize: "1.2em",
      lineHeight: "30px",
    },
    companyHeading: {
      textAlign: "center",
      marginBottom: "1em",
      fontSize: "2.5em",
    },
  };

  return (
    <div style={styles.container}>
      <Typography variant="h5" style={styles.companyHeading}>
        Techstitch Pvt. Ltd. Privacy Policy
      </Typography>
      <Typography variant="h6" style={styles.heading}>
        Introduction
      </Typography>
      <p style={styles.paragraph}>
        Techstitch Pvt. Ltd. ("we," "us," or "our") is committed to protecting
        your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website and
        use our security services, including CCTV surveillance and physical
        bouncers.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Information We Collect
      </Typography>
      <Typography variant="h6" style={styles.paragraphLeft}>
        Personal Information
      </Typography>
      <p style={styles.paragraphInfo}>
        We may collect personal information that you provide to us directly,
        such as:
      </p>
      <ul style={styles.bulletPoints}>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Mailing Address</li>
        <li>Payment Information</li>
        <li>Other Identifiable Information</li>
      </ul>
      <Typography variant="h6" style={styles.paragraphLeft}>
        Non-Personal Information
      </Typography>
      <p style={styles.paragraphInfo}>
        We may also collect non-personal information about your use of our
        website and services, such as:
      </p>
      <ul style={styles.bulletPoints}>
        <li>IP Address</li>
        <li>Browser Type</li>
        <li>Operating System</li>
        <li>Referring URLs</li>
        <li>Pages Viewed</li>
        <li>Time and Date of Visits</li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        CCTV Footage
      </Typography>
      <p style={styles.paragraph}>
        As part of our security services, we collect and store video footage
        from CCTV cameras installed at our clients' premises. This footage may
        include images of individuals in and around the monitored areas.
      </p>
      <Typography variant="h6" style={styles.heading}>
        How We Use Your Information
      </Typography>
      <p style={styles.paragraph}>
        We use the information we collect for various purposes, including:
      </p>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>
            To Provide and Maintain Services:{" "}
          </span>
          To deliver and manage our security services, including monitoring and
          responding to security incidents.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>To Improve Our Services: </span>
          To enhance the quality and functionality of our services and website.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>To Communicate with You: </span>
          To respond to your inquiries, provide customer support, and send
          administrative information.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>To Process Transactions: </span>
          To process payments for our services.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>
            For Legal and Security Purposes:{" "}
          </span>
          To comply with legal obligations, enforce our terms and conditions,
          and protect our rights and interests.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Sharing Your Information
      </Typography>
      <p style={styles.paragraph}>
        We may share your information in the following circumstances:
      </p>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>With Service Providers:</span> We
          may share information with third-party service providers who assist us
          in operating our business and delivering our services.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>For Legal Reasons: </span> We may
          disclose your information if required by law, regulation, or legal
          process, or if we believe it is necessary to protect our rights,
          property, or safety.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>With Your Consent: </span> We may
          share your information with your consent or at your direction.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Data Security{" "}
      </Typography>
      <p style={styles.paragraph}>
        We implement appropriate technical and organizational measures to
        protect the information we collect against unauthorized access,
        alteration, disclosure, or destruction. However, no security measure is
        completely foolproof, and we cannot guarantee the absolute security of
        your information.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Data Retention{" "}
      </Typography>
      <p style={styles.paragraph}>
        We retain personal information for as long as necessary to fulfill the
        purposes for which it was collected, including to comply with legal
        obligations, resolve disputes, and enforce our agreements. CCTV footage
        is retained in accordance with the terms agreed upon with our clients
        and applicable legal requirements.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Your Rights
      </Typography>
      <p style={styles.paragraph}>
        Depending on your jurisdiction, you may have the following rights
        regarding your personal information:
      </p>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Access: </span>
          You may request access to the personal information we hold about you.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Correction: </span>
          You may request that we correct or update your personal information.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Deletion: </span>
          You may request that we delete your personal information, subject to
          certain exceptions.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Objection: </span>
          You may object to the processing of your personal information.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Restriction: </span>
          You may request that we restrict the processing of your personal
          information.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Portability: </span>
          You may request a copy of your personal information in a structured,
          commonly used, and machine-readable format.
        </li>
      </ul>
      <p style={styles.paragraph}>
        Depending on your jurisdiction, you may have the following rights
        regarding your personal information:
      </p>
    </div>
  );
};

export default Privacy;
