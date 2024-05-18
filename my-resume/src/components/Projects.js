import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <h3>Network18 Onprem to GCP Migration</h3>
      <ul>
        <li>Led the migration project from Network18's on-premises infrastructure to Google Cloud Platform (GCP)...</li>
        <li>Employed Docker, Jenkins, and GitLab with webhooks...</li>
        <li>Utilized GKE for scalable application hosting...</li>
        <li>Implemented SonarQube for code quality assurance...</li>
        <li>Leveraged Istio to enhance service mesh capabilities...</li>
      </ul>
      <h3>Multi-Application Deployment on GKE</h3>
      <ul>
        <li>Orchestrated deployment of three node applications...</li>
        <li>Utilized Helm for efficient deployment...</li>
        <li>Two applications share the same domain...</li>
        <li>Implemented strategic URI path mapping...</li>
      </ul>
    </section>
  );
};

export default Projects;

