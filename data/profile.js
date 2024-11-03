const profileData = {
  title: "Resume",
  name: "Alex Adzah",
  sub_title: "Systems Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am a versatile, tech-savvy, and proactive Systems Administrator with 5+ years of experience in IT systems engineering, focusing on infrastructure management such as server deployment, network configuration, and system monitoring. I am detail-oriented, passionate about learning and, thrive in fast-paced, dynamic teams where I can contribute and align my skills with the company's goals to ensure operational success and drive innovative solutions.`,
    contact: {
      email: "adzahalex@outlook.com",
      phone: "+44 774 107 3216",
      address: "United Kingdom",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/donatus-dziedzorm-d-64842941/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/mrchase2468",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux, Windows, iOS",
    },
    {
      title: "Languages",
      value: "Bash, JavaScript & Python Scripting",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana, Nagios and, Zabbix",
    },
    {
      title: "Cloud Computing",
      value: "AWS and Azure",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [
    {
      organization: "Jomacs",
      title: `<strong>Systems Administrator</strong> `,
      date: "December 2022 to Current",
      details: [
        `Installed, configured, and <strong>maintained Linux servers</strong> for high availability and reliability.`,
        `Administered user accounts, groups, and file system permissions.`,
        `Monitored system performance with <strong>Nagios, Zabbix, CheckMK, and Grafana,</strong> optimizing for high availability, security, and performance.`,
        `Implemented security measures, managed <strong>firewalls,</strong> and <strong>applied updates/patches</strong> to safeguard servers.`,
        `Developed and <strong>managed backups and disaster recovery plans</strong> using <strong>cron jobs.</strong>`,
        `Wrote and maintained <strong>shell script</strong> for <strong>task automation.</strong>`,
        `Configured network interfaces, <strong>DNS, DHCP, and VPN services.</strong>`,
        `Diagnosed and resolved connectivity issues; provided user support.`,
        `Managed <strong>system logs,</strong> analyzed issues, and performed <strong>root cause analysis.</strong>`,
        `Administered <strong>VMware virtual environments</strong> and managed <strong>AWS and Azure cloud infrastructure.</strong>

    },
    {
      ],
      organization: "ENI Ghana Ltd",
      title: "<strong>Senior Support Engineer</strong>",
      date: "Oct 2020 to November 2022",
      details: [
        `Administered core tools (Zoom, Slack, Confluence, Google Workspace, GCP, AWS, SaaS apps).`,
        `Managed <strong>virtual environments (VMware)</strong> and <strong>cloud infrastructure (AWS, Azure).</strong>`,
        `Created <strong>AD security groups</strong> and managed users.`,
        `Supported <strong>data center</strong> tasks (VMware, HPE, Qumulo).`,
        `Performed <strong>patch management</strong> and SSL certificate management.`,
        `Managed <strong>SSO certificates</strong> for enterprise apps in Azure.`,
        `Resolved incident tickets (HappyFox, ServiceNow) with set priorities.`,
        `Coordinated IT projects via Monday.com, ensuring timely delivery.`,
        `Managed <strong>directory services</strong> (AD, AAD, GPO, Intune, Workday).`,
        `<strong>Monitored systems, reviewed audit logs,</strong> and performed <strong>root cause analysis.</strong>`,
        `Deployed and configured <strong>Zoom Conference Rooms</strong> with <strong>Polycom systems.</strong>`,
        `Executed <strong>data migration</strong> on SaaS applications and servers.`,
        `Deployed and configured <strong>Linux client devices.</strong>`,
      ],
    },
    {
      organization: "National Health Insurance Scheme (Ghana)",
      title: `<strong>Assistance MIS Manager</strong>`,
      date: "Aug 2017 to Sep 2020",
      details: [
        `Provided required Technical Support both on-site and remotely as needed.`,
        `Networking administration and support of server Infrastructure.`,
        `Installed, configured, troubleshoot, and upgraded windows systems.`,
        `Deployed software and managed endpoints using <strong>EDR</strong> tools.`,
        `Registered new computers to the companys domain/network.`,
        `Properly handled unresolved queries through the IT ticketing system.`,
        `Monitored system performance and managed IT assets using Lansweeper.`,
      ],
    },
  ],
  projects: [
    {
      title: "Web Hosting and Load Balancing:",
      duration: "2024",
      link: "",
      desc: `Built and configured personal Linus servers to host a simple website using Nginx and Apache ensuring and achieving 99.9% uptime and 25% faster page loads.`,
    },
    {
      title: "Linux Server Administration:",
      duration: "2024",
      link: "",
      desc: `Setup and configured Linux servers (instances) on AWS to host and test personal projects, and undertake several administration tasks using the CLI and basic bash scripts`,
    },
    {
      title: "Set up Monitoring systems/Servers:",
      duration: "2024",
      link: "",
      desc: `Configured and set up monitoring tools such as Nagios, Zabbix, and CheckMK on a Linux server to monitor my servers and services (Grafana and Prometheus are next)`,
    },
    {
      title: "SSO Implementation (SAML and OIDC based) and SCIM User Provisioning configuration:",
      duration: "2022",
      link: "",
      desc: `Completed and implemented project by setting up SSO for about 40 Enterprise applications on Azure demonstrating proficiency in Azure and Enterprise application Administration.`,
    },
    {
      title: "Migration of users and Objects from one domain to another:",
      duration: "2023",
      link: "",
      desc: `Migrated users and other objects from domain A to domain B between SaaS Apps and Servers`,
    },
  ],
  education: [
    {
      alma: "UNIVERSITY OF GREENWICH UK",
      duration: "Oct 2023 to Sep 2024",
      std: "Postgraduate degree (Machinee Intelligence)",
      
    },
    {
      alma: "SWISS MANAGEMENT CENTRE",
      duration: "Aug 2018 to May 2020",
      std: "BSc Information Security",

    },

    {
      alma: "UNIVERSITY OF GREENWICH",
      duration: "Aug 2014 to May 2017",
      std: "BSc Business Information Technology",
        
    },

  ],
  certifications: [
    {
      desc: `<strong>AWS Knowledge: Cloud Essentials</strong>.`,
      date: "July 2024",
    },
    {
      desc: `<strong>AWS Cloud Practitioner</strong>.`,
      date: "August 2024",
    },
    {
      desc: `<strong>NGD Linux unhatched</strong>.`,
      date: "August 2024",
    },
  ],
  events: [],
};
