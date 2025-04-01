import nnidImage from "../assets/images/nnid.png";
import masiImage from "../assets/images/masi.png";
import evsrImage from "../assets/images/evsr.png";
import ehrdImage from "../assets/images/ehrd.png";

export interface Testimonial {
    id: number;
    title: string;
    description: string;
    author: {
        name: string;
        title: string;
    };
    technologies: string[];
    imageUrl?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "Nationwide Network Infrastructure Deployment",
        description:
            "Team WMC led a comprehensive staffing initiative to support a nationwide network infrastructure upgrade. Our engineers were deployed to multiple client locations to install, configure, and validate high-performance networking hardware. The project improved network redundancy, increased bandwidth capacity, and ensured scalable connectivity across the organization.",
        author: {
            name: "Undisclosed",
            title: "Field Engineering Support - Nationwide Rollout",
        },
        technologies: [
            "Network Engineering",
            "Switching & Routing",
            "Firewall Configuration",
            "LAN/WAN Optimization",
            "Rack & Cabling Design",
            "Network Monitoring Tools",
        ],
        imageUrl: nnidImage,
    },
    {
        id: 2,
        title: "Enterprise VOIP System Rollout",
        description:
            "Team WMC provided specialized staffing for the end-to-end deployment of a VOIP communications system across the client's enterprise. Our engineers handled hardware setup, PBX system configuration, and integration with collaboration platforms. The outcome was a seamless, secure voice communication network that supported remote and on-site teams alike.",
        author: {
            name: "Undisclosed",
            title: "Telecom Infrastructure & Deployment",
        },
        technologies: [
            "VOIP Engineering",
            "Cisco Unified Communications",
            "PBX & SIP Trunking",
            "Network QoS & Security",
        ],
        imageUrl: masiImage,
    },
    {
        id: 3,
        title: "Multisite Audiovisual System Integration",
        description:
            "Team WMC staffed experienced AV engineers to design and deploy audiovisual systems across a network of client sites. The project included integration of conferencing hardware, digital signage, and AV-over-IP systems to support hybrid collaboration environments and dynamic content delivery.",
        author: {
            name: "Undisclosed",
            title: "AV System Design & Integration Services",
        },
        technologies: [
            "AV Engineering",
            "AV-over-IP Systems",
            "Conferencing & Control Integration",
            "Digital Signage",
            "Structured Cabling",
        ],
        imageUrl: evsrImage,
    },
    {
        id: 4,
        title: "Enterprise Hardware Refresh & Deployment",
        description:
            "Team WMC managed a large-scale hardware upgrade for an enterprise client, focusing on the deployment of Cisco networking equipment. Our team was responsible for configuring, testing, and installing next-generation routers, switches, and wireless infrastructure. The project significantly boosted system reliability, improved network speed, and laid the groundwork for future cloud integrations.",
        author: {
            name: "Undisclosed",
            title: "Infrastructure Modernization Initiative",
        },
        technologies: [
            "Cisco Networking Hardware",
            "Provisioning & Firmware Management",
            "On-Site Deployment Logistics",
            "Performance Tuning",
        ],
        imageUrl: ehrdImage,
    },
];
