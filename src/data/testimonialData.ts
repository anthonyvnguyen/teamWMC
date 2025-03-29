export interface Testimonial {
    id: number;
    title: string;
    quote: string;
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
        title: "Global Financial Institution Security Overhaul",
        quote: "Team WMC transformed our IT infrastructure, enhancing security and performance while reducing costs. Their expertise and support have been invaluable to our business.",
        author: {
            name: "John Smith",
            title: "CTO, ABC Corporation",
        },
        technologies: [
            "CLOUD MIGRATION",
            "CYBER SECURITY",
            "PENETRATION TESTING",
        ],
        imageUrl: "/images/testimonials/financial.jpg",
    },
    {
        id: 2,
        title: "Healthcare Provider Network Solutions",
        quote: "Working with Team WMC has been a game-changer for our organization. Their communication solutions delivered exactly what we needed, connecting our multiple locations seamlessly.",
        author: {
            name: "Sarah Johnson",
            title: "CEO, XYZ Healthcare",
        },
        technologies: ["VOIP", "CISCO", "WEBEX", "NETWORK SECURITY"],
        imageUrl: "/images/testimonials/healthcare.jpg",
    },
    {
        id: 3,
        title: "Retail Chain Cloud Transformation",
        quote: "Team WMC's expertise in cloud solutions helped migrate our entire infrastructure to AWS, resulting in 40% cost savings and significantly improved performance.",
        author: {
            name: "Michael Brown",
            title: "IT Director, RetailPlus Inc.",
        },
        technologies: ["AWS", "CLOUD MIGRATION", "DEVOPS"],
        imageUrl: "/images/testimonials/retail.jpg",
    },
    {
        id: 4,
        title: "Government Agency Security Implementation",
        quote: "The team at WMC understood our complex security needs and implemented a zero-trust architecture that met all our compliance requirements while improving operational efficiency.",
        author: {
            name: "Elizabeth Park",
            title: "Security Director, Gov Agency",
        },
        technologies: ["ZERO TRUST", "IDENTITY MANAGEMENT", "COMPLIANCE"],
        imageUrl: "/images/testimonials/government.jpg",
    },
    {
        id: 5,
        title: "Education Institution Network Upgrade",
        quote: "Team WMC modernized our entire campus network infrastructure, improving reliability, security, and performance for our students and faculty. The project was completed on time and within budget.",
        author: {
            name: "David Wilson",
            title: "CIO, State University",
        },
        technologies: ["SDN", "NETWORK INFRASTRUCTURE", "WIFI 6"],
        imageUrl: "/images/testimonials/education.jpg",
    },
    {
        id: 6,
        title: "Manufacturing Company Digital Transformation",
        quote: "The cloud migration and IoT implementation provided by Team WMC has revolutionized our production monitoring and supply chain management. We've seen a 30% increase in operational efficiency.",
        author: {
            name: "Jennifer Lee",
            title: "Operations Director, Global Manufacturing Inc.",
        },
        technologies: ["IOT", "CLOUD COMPUTING", "DATA ANALYTICS"],
        imageUrl: "/images/testimonials/manufacturing.jpg",
    },
];
