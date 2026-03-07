# Saad Yaldram's Portfolio

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://resume.saadyaldram.com)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)](https://github.com/syaldram/portfolio/actions)
[![AWS](https://img.shields.io/badge/Hosted%20on-AWS-orange)](https://aws.amazon.com)

A personal portfolio website showcasing my skills, experience, and projects as a **DevOps Engineer**. Built with modern web technologies and deployed on AWS infrastructure.

🔗 **Live Site:** [resume.saadyaldram.com](https://resume.saadyaldram.com)

---

## ✨ Features

- **Hero Section** – Animated introduction with typed.js effect
- **About Me** – Background, certifications, and contact information
- **Certifications** – AWS and other professional certifications
- **Skills** – Technical skills and tools expertise
- **Resume** – Education and work experience timeline
- **Projects** – Showcase of completed projects and work
- **Blog** – Technical articles and insights

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Framework** | Bootstrap 5 |
| **Fonts** | Google Fonts (Inter, Poppins) |
| **Animation** | Typed.js |
| **Hosting** | AWS (S3, CloudFront, Route 53) |
| **CI/CD** | GitHub Actions |

## 📁 Project Structure

```
portfolio/
├── index.html          # Main entry point
├── index.js            # JavaScript functionality
├── css/
│   └── style.css       # Main stylesheet
├── assets/
│   ├── images/         # Image assets
│   └── svg/            # SVG icons
└── blogs/
    ├── blog.html       # Blog page
    ├── blog.css        # Blog styles
    └── blog.js         # Blog functionality
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- (Optional) A local web server for development

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/syaldram/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or simply open index.html in your browser
   open index.html
   ```

3. **View the site**
   Navigate to `http://localhost:8000` in your browser.

## ☁️ Infrastructure

The website is hosted on **Amazon Web Services (AWS)** using a serverless architecture:

- **S3** – Static website hosting
- **CloudFront** – CDN for global distribution
- **Route 53** – DNS management
- **ACM** – SSL/TLS certificates

📐 **Infrastructure as Code:** The backend architecture and Terraform configurations are available in the [cloud-resume-challenge](https://github.com/syaldram/cloud-resume-challenge) repository.

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment:

- Automatically builds and deploys on push to `main` branch
- Invalidates CloudFront cache for instant updates
- Ensures consistent deployments across environments

## 📬 Contact

- **Email:** syaldram@gmail.com
- **Location:** Richmond, VA
- **Website:** [resume.saadyaldram.com](https://resume.saadyaldram.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).