import React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTop: {
    marginBottom: "40px",
    marginTop: "40px",
  },
  header: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.3em",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    fontSize: "1.3em",
  },
  listItem: {
    marginBottom: "10px",
  },
};

const Content = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sectionTop}>
        <p style={styles.text}>
          Techstitch Pvt. Ltd. is India's premier provider of CCTV and security
          solutions, dedicated to safeguarding businesses and homes across the
          nation with the latest in security technology and expert service.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.header}>Our Mission</div>
        <p style={styles.text}>
          Our mission is to enhance safety and protect assets by offering
          innovative, reliable, and customized security solutions tailored to
          meet each client's unique needs. We are committed to providing the
          highest level of security and peace of mind through our comprehensive
          range of products and services.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.header}>Our Expertise</div>
        <div style={styles.subHeader}>State-of-the-Art CCTV Systems</div>
        <p style={styles.text}>
          Our advanced CCTV systems are designed to provide superior
          surveillance, ensuring comprehensive coverage and high-resolution
          monitoring.
        </p>

        <div style={styles.subHeader}>Access Control Solutions</div>
        <p style={styles.text}>
          We offer robust access control systems that regulate and monitor entry
          to your premises, ensuring only authorized personnel have access.
        </p>

        <div style={styles.subHeader}>Intrusion Detection</div>
        <p style={styles.text}>
          Our intrusion detection systems are engineered to detect unauthorized
          access and potential security breaches, offering an added layer of
          protection.
        </p>

        <div style={styles.subHeader}>Remote Monitoring Services</div>
        <p style={styles.text}>
          With our remote monitoring solutions, you can keep an eye on your
          property from anywhere, at any time, through secure and reliable
          remote access.
        </p>

        <div style={styles.subHeader}>Security Consulting</div>
        <p style={styles.text}>
          Our team of experts provides tailored security consulting services to
          assess vulnerabilities and recommend effective security strategies.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.header}>Cutting-Edge Technology</div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Real-Time Threat Detection: Automatically identifies potential
            threats, enabling swift response and mitigation.
          </li>
          <li style={styles.listItem}>
            Facial Recognition: Enhances identification processes and improves
            security accuracy.
          </li>
          <li style={styles.listItem}>
            Behavioral Analysis: Monitors and analyzes behaviors to detect
            suspicious activities and prevent incidents before they occur.
          </li>
          <li style={styles.listItem}>
            Automated Alerts: Provides instant notifications of any security
            breaches, ensuring prompt action and response.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.header}>Why Choose Techstitch?</div>
        <p style={styles.text}>
          Choosing Techstitch means opting for unparalleled security that
          protects what matters most to you. Our commitment to your safety
          drives us to deliver:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Innovative Solutions: We leverage the latest technologies to offer
            cutting-edge security solutions.
          </li>
          <li style={styles.listItem}>
            Reliable Service: Our team of experts is dedicated to providing
            dependable and efficient service.
          </li>
          <li style={styles.listItem}>
            Customized Security: We tailor our solutions to meet the specific
            needs of each client, ensuring optimal protection.
          </li>
          <li style={styles.listItem}>
            Peace of Mind: With Techstitch, you can rest assured that your
            safety is our top priority.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.header}>Get in Touch</div>
        <p style={styles.text}>
          Protect what matters most with Techstitch Pvt. Ltd. Contact us today
          to learn more about our comprehensive security solutions and how we
          can help safeguard your assets and ensure your peace of mind.
        </p>
      </div>
    </div>
  );
};

export default Content;
