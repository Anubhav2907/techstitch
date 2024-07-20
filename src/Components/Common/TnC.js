import { Typography } from "@mui/material";
import React from "react";

const TnC = () => {
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
        Techstitch Pvt. Ltd. Terms and Conditions
      </Typography>
      <Typography variant="h6" style={styles.heading}>
        Introduction
      </Typography>
      <p style={styles.paragraph}>
        Welcome to Techstitch Pvt. Ltd. By accessing and using our website and
        services, you agree to comply with and be bound by the following terms
        and conditions. Please review these terms carefully. If you do not agree
        with these terms, you should not use our website or services.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Definitions
      </Typography>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Company</span> refers to
          Techstitch Pvt. Ltd.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Services</span> refers to the
          security services provided by the Company, including CCTV surveillance
          and physical bouncers.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Website</span> refers to the
          Company's website.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>User</span> refers to any
          individual or entity accessing or using the Website or Services.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Use of Services
      </Typography>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Eligibility:</span> By using our
          Services, you represent and warrant that you are at least 18 years of
          age and have the legal capacity to enter into a binding agreement.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Service Agreement:</span> Detailed
          terms of service will be provided in the contract signed with the
          client. These terms include scope, duration, fees, and specific
          obligations of both parties.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Compliance:</span> Users must
          comply with all applicable laws and regulations when using our
          Services. Any illegal or unauthorized use of our Services is
          prohibited.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Intellectual Property
      </Typography>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Ownership:</span> All content,
          design, text, graphics, and other materials on the Website are the
          property of Techstitch Pvt. Ltd. or its licensors. Unauthorized use of
          these materials is prohibited.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>License:</span> Users are granted
          a limited, non-exclusive, non-transferable license to access and use
          the Website for personal or business purposes as intended by the
          Company.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Limitation of Liability
      </Typography>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Service Reliability:</span> While
          we strive to provide reliable and uninterrupted Services, we do not
          guarantee that our Services will be available at all times or that
          they will be free from errors, interruptions, or security breaches.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Indemnity:</span> Users agree to
          indemnify and hold harmless Techstitch Pvt. Ltd., its officers,
          directors, employees, and agents from any claims, damages, losses, or
          expenses arising from the use of our Services.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Liability Cap:</span> To the
          maximum extent permitted by law, the total liability of Techstitch
          Pvt. Ltd. for any claims under these terms shall not exceed the amount
          paid by the User for the Services in the preceding 12 months.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Privacy Policy
      </Typography>
      <p style={styles.paragraph}>
        Your use of our Services is also governed by our Privacy Policy, which
        can be found on our Website. The Privacy Policy explains how we collect,
        use, and disclose information that pertains to your privacy.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Termination
      </Typography>
      <ul style={styles.bulletPoints}>
        <li>
          <span style={{ fontWeight: "600" }}>Termination by User: </span>
          Users may terminate their use of our Services at any time by notifying
          us in writing.
        </li>
        <li>
          <span style={{ fontWeight: "600" }}>Termination by Company: </span>
          We reserve the right to terminate or suspend access to our Services
          immediately, without prior notice or liability, for any reason,
          including but not limited to a breach of these Terms.
        </li>
      </ul>
      <Typography variant="h6" style={styles.heading}>
        Changes to Terms
      </Typography>
      <p style={styles.paragraph}>
        Techstitch Pvt. Ltd. reserves the right to modify these terms at any
        time. Changes will be effective immediately upon posting on the Website.
        Your continued use of the Services after any such changes constitutes
        your acceptance of the new terms.
      </p>
      <Typography variant="h6" style={styles.heading}>
        Governing Law
      </Typography>
      <p style={styles.paragraph}>
        These terms shall be governed and construed in accordance with the laws
        of [Your Jurisdiction], without regard to its conflict of law
        provisions. Any disputes arising under these terms shall be subject to
        the exclusive jurisdiction of the courts located in [Your Jurisdiction].
      </p>
      <Typography variant="h6" style={styles.heading}>
        Contact Information
      </Typography>
      <p style={styles.paragraphLast}>
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <p style={styles.paragraphLast}>Techstitch Pvt. Ltd.</p>
      <p style={styles.paragraphLast}>[Address]</p>
      <p style={styles.paragraphLast}>[City, State, ZIP Code]</p>
      <p style={styles.paragraphLast}>[Email Address]</p>
      <p style={styles.paragraphLast}>[Phone Number]</p>
    </div>
  );
};

export default TnC;
