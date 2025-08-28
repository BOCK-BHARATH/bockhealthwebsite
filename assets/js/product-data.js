// Comprehensive Health Product Data Configuration
const productData = {
  'healthcare-nano': {
    // ============= BASIC METADATA =============
    metadata: {
      name: 'Healthcare NanoBot Network',
      subtitle: 'Autonomous Medical Care System',
      description: 'Revolutionary micro-robotics platform designed for precision healthcare delivery, autonomous medical procedures, and advanced therapeutic interventions. Our nano-scale robots combine AI, medical sensors, and targeted drug delivery.',
      icon: 'ri-robot-line',
      category: 'Medical Robotics',
      price: 'Starting at ₹5,00,00,000',
      rating: 4.9,
      availability: 'Available for clinical deployment 2025'
    },

    // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
    contentSections: [
      {
        title: 'Advanced Medical Nano Technology',
        content: 'Our Healthcare NanoBot Network represents breakthrough medical nanorobotics, featuring autonomous navigation through the human body for precision drug delivery and microsurgical procedures. With FDA-approved biocompatible materials and AI-guided navigation, these micro-robots provide unprecedented levels of medical intervention.',
        type: 'content-image',
        image: 'assets/img/bock_health_img1.jpg'
      },
      {
        title: 'Nanomedical Intervention Procedures',
        content: 'Discover how our nanobot surgical procedures enable minimally invasive operations through AI-guided autonomous microsurgery. This advanced system provides precision drug delivery, cancer cell targeting, and tissue regeneration capabilities at the cellular level.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Medical Nanobot Testing & Validation',
        content: 'Watch comprehensive nanorobotics clinical testing procedures and medical device validation for Healthcare NanoBot Network. This detailed video demonstrates our rigorous FDA compliance protocols, biocompatibility testing, and performance validation for human medical applications.',
        type: 'content-video',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
      },
      {
        title: 'Nanorobotics Medical Specifications',
        content: 'Comprehensive technical specifications and medical guidelines for Healthcare NanoBot Network. Access detailed documentation covering nanorobotics architecture, biocompatible materials, navigation systems, and clinical integration procedures.',
        type: 'content-document',
        document: 'assets/documents/nanobot-medical-specs.pdf'
      },
      {
        title: 'Clinical Treatment Planning',
        content: 'Complete medical treatment planning documentation for nanobot therapy including patient preparation, dosage calculations, treatment trajectories, emergency protocols, and post-procedure monitoring requirements.',
        type: 'content-document',
        document: 'assets/documents/nanobot-treatment-planning.pdf'
      },
      {
        title: 'Medical Safety & Compliance',
        content: 'Comprehensive safety protocols and regulatory compliance documentation for nanobot medical procedures. Includes FDA guidelines, ISO 13485 compliance, patient risk assessments, and emergency intervention protocols.',
        type: 'content-document',
        document: 'assets/documents/nanobot-safety-compliance.pdf'
      },
      {
        title: 'Precision Medicine Revolution',
        content: 'Healthcare NanoBot Network is transforming medical treatment through precision microsurgery and targeted drug delivery. Our nanorobotics platform enables ultra-precise medical interventions, reducing patient trauma while increasing treatment effectiveness and recovery rates.',
        type: 'content-only'
      }
    ],

    // ============= TECHNICAL SPECIFICATIONS =============
    specifications: {
      'Medical Robotics': {
        'Size': '10-100 micrometer scale robots',
        'Count': 'Millions of cooperative nanobots',
        'Navigation': 'AI-guided magnetic field control',
        'Power': 'Biodegradable fuel cells'
      },
      'Clinical Performance': {
        'Procedure Time': '1-30 minutes per treatment',
        'Precision': 'Single cell level accuracy',
        'Drug Delivery': 'Targeted molecule delivery',
        'Recovery Time': 'Outpatient procedures'
      },
      'Medical Standards': {
        'Safety': 'FDA Class III medical device',
        'Materials': 'Biocompatible nanotechnology',
        'Radiation': 'MRI-compatible navigation',
        'Sterilization': 'Autoclave validated'
      }
    },

    // ============= FEATURES =============
    features: [
      {
        icon: 'ri-robot-line',
        title: 'Autonomous Surgery',
        description: 'AI-guided autonomous machine learning for precision medical procedures',
        benefits: ['Autonomous procedures', 'AI decision support', 'Surgical precision']
      },
      {
        icon: 'ri-microscope-line',
        title: 'Microsurgical Capability',
        description: 'Sub-millimeter surgical precision for targeted medical intervention',
        benefits: ['Cellular accuracy', 'Minimally invasive', 'Precision microsurgery']
      },
      {
        icon: 'ri-heart-pulse-line',
        title: 'Real-Time Monitoring',
        description: 'Continuous vital signs and treatment progress monitoring',
        benefits: ['Real-time feedback', 'Patient monitoring', 'Treatment adjustment']
      },
      {
        icon: 'ri-stethoscope-line',
        title: 'Medical Diagnostics',
        description: 'Integrated diagnostic systems for real-time health assessment',
        benefits: ['On-site diagnostics', 'AI-powered analysis', 'Treatment guidance']
      },
      {
        icon: 'ri-shield-line',
        title: 'Medical Safety Systems',
        description: 'Advanced safety protocols and emergency intervention capabilities',
        benefits: ['Patient safety', 'Emergency protocols', 'Regulatory compliance']
      }
    ],

    // ============= APPLICATIONS =============
    applications: [
      {
        title: 'Cancer Treatment',
        description: 'Targeted drug delivery and microsurgical tumor removal',
        icon: 'ri-microscope-line',
        benefits: ['Precise targeting', 'Reduced side effects', 'Enhanced effectiveness']
      },
      {
        title: 'Cardiovascular Procedures',
        description: 'Minimally invasive cardiac interventions and diagnostics',
        icon: 'ri-heart-line',
        benefits: ['Heart surgery', 'Artery cleaning', 'Blood clot removal']
      },
      {
        title: 'Neurological Treatment',
        description: 'Brain surgery and nervous system therapy capabilities',
        icon: 'ri-brain-line',
        benefits: ['Brain surgery', 'Nerve repair', 'Neurological treatment']
      },
      {
        title: 'Wound Healing',
        description: 'Accelerated tissue regeneration and wound closure',
        icon: 'ri-surgical-mask-line',
        benefits: ['Rapid healing', 'Scarring reduction', 'Infection prevention']
      }
    ],

    // ============= PRICING PACKAGES =============
    packages: [
      {
        name: 'Clinical Research',
        price: '₹5,00,00,000',
        duration: '12-month development',
        coverage: 'Single procedure platform',
        features: [
          'Custom medical payload integration',
          'Clinical trial design and execution',
          'Regulatory approval support',
          'Training and certification',
          '12-month operational support'
        ],
        recommended: false
      },
      {
        name: 'Hospital Integration',
        price: '₹25,00,00,000',
        duration: '18-month integration',
        coverage: 'Multi-specialty hospital deployment',
        features: [
          'Complete surgical suite integration',
          'Multiple procedure platforms',
          'Staff training and certification',
          'Data analytics and reporting',
          '24/7 technical support',
          'Maintenance and upgrades'
        ],
        recommended: true
      },
      {
        name: 'Healthcare Network',
        price: 'Custom Pricing',
        duration: '24-month rollout',
        coverage: 'Regional healthcare system',
        features: [
          'Regional deployment architecture',
          'Centralized control center',
          'Telemedicine integration',
          'Remote monitoring systems',
          'Advanced analytics dashboard',
          'Emergency response coordination'
        ],
        recommended: false
      }
    ]
  },

  'healthcare-robotics': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'Healthcare Robotics Platform',
     subtitle: 'Autonomous Patient Care Systems',
     description: 'Advanced robotic healthcare delivery platform featuring autonomous patient care, surgical assistance, and hospital logistics management with precision AI-driven operations.',
     icon: 'ri-robot-line',
     category: 'Robotic Healthcare',
     price: 'Starting at ₹15,00,00,000',
     rating: 4.9,
     availability: 'Available for clinical deployment 2025'
   },

   // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
   contentSections: [
     {
       title: 'Advanced Healthcare Robotics',
       content: 'Our Healthcare Robotics Platform represents breakthrough autonomous healthcare systems, featuring precision robotics for patient care, surgical assistance, and hospital logistics. With AI-powered navigation and medical device integration, these robots provide unprecedented healthcare efficiency.',
       type: 'content-image',
       image: 'assets/img/bock_health_img2.png'
     },
     {
       title: 'Robotic Patient Care Operations',
       content: 'Discover how our healthcare robotics enable autonomous patient monitoring and treatment delivery through AI-guided robotic systems. This comprehensive platform provides precision medication delivery, vital signs monitoring, and emergency response capabilities.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
     }
   ],

   // ============= TECHNICAL SPECIFICATIONS =============
   specifications: {
     'Robotic Systems': {
       'Precision': 'Sub-millimeter accuracy',
       'Autonomy': 'AI-guided decision making',
       'Mobility': 'Omni-directional navigation',
       'Payload': 'Up to 100kg medical supplies'
     },
     'Healthcare Performance': {
       'Response Time': 'Real-time patient monitoring',
       'Precision': 'Surgical-grade accuracy',
       'Reliability': '99.9% uptime guarantee',
       'Integration': 'HL7 FHIR compliant'
     },
     'Safety Standards': {
       'Compliance': 'ISO 13485 healthcare certification',
       'Sterilization': 'Autoclave-compatible design',
       'Emergency': 'Automated safety protocols',
       'Accessibility': 'ADA-compliant design'
     }
   },

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-robot-line',
       title: 'Autonomous Navigation',
       description: 'AI-powered navigation through complex hospital environments',
       benefits: ['Hospital mapping', 'Obstacle avoidance', 'Multi-floor operation']
     },
     {
       icon: 'ri-heart-pulse-line',
       title: 'Patient Monitoring',
       description: 'Continuous vital signs monitoring and health analytics',
       benefits: ['Real-time tracking', 'Emergency detection', 'Trend analysis']
     },
     {
       icon: 'ri-medicine-bottle-line',
       title: 'Medication Management',
       description: 'Automated medication dispensing and administration',
       benefits: ['Error reduction', 'Compliance tracking', 'Inventory management']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Patient Care',
       description: 'Autonomous patient monitoring and assistance',
       icon: 'ri-user-heart-line',
       benefits: ['24/7 care', 'Medication delivery', 'Vital monitoring']
     },
     {
       title: 'Surgical Assistance',
       description: 'Robotic surgical support and instrumentation',
       icon: 'ri-surgical-mask-line',
       benefits: ['Precision assistance', 'Instrument delivery', 'Sterile handling']
     }
   ],

   // ============= PRICING PACKAGES =============
   packages: [
     {
       name: 'Robotics Suite',
       price: '₹15,00,00,000',
       duration: '12-month integration',
       coverage: 'Complete robotic healthcare system',
       features: ['Full robotics platform', 'Integration support', 'Training included', '24/7 support'],
       recommended: false
     },
     {
       name: 'Enterprise Solution',
       price: '₹50,00,00,000',
       duration: '24-month deployment',
       coverage: 'Institution-wide robotics network',
       features: ['Enterprise deployment', 'Centralized management', 'Analytics dashboard', 'Priority support'],
       recommended: true
     }
   ]
 },

 'ai-healthcare': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'AI Healthcare Intelligence',
     subtitle: 'Intelligent Medical Diagnosis Platform',
     description: 'Advanced artificial intelligence platform for medical diagnosis, treatment planning, and healthcare decision support with precision analytics and predictive medicine.',
     icon: 'ri-brain-line',
     category: 'AI Healthcare',
     price: 'Starting at ₹25,00,00,000',
     rating: 4.8,
     availability: 'Available for integration 2025'
   },

   // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
   contentSections: [
     {
       title: 'AI-Powered Healthcare Intelligence',
       content: 'Our AI Healthcare Intelligence represents breakthrough medical AI technology, featuring deep learning algorithms for diagnosis, treatment planning, and predictive medicine. With comprehensive medical knowledge integration, this platform provides unparalleled clinical decision support.',
       type: 'content-image',
       image: 'assets/img/bock_health_img3.jpg'
     },
     {
       title: 'Clinical Decision Support System',
       content: 'Discover how our AI Healthcare Intelligence enables precision medicine through advanced algorithms and machine learning. This comprehensive system provides accurate diagnostic recommendations, treatment planning, and continuous patient monitoring capabilities.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
     },
     {
       title: 'AI Medical Testing & Validation',
       content: 'Watch comprehensive AI healthcare testing procedures and clinical validation protocols for AI Healthcare Intelligence. This detailed video demonstrates our rigorous medical testing standards, AI model validation, and performance verification for clinical applications.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/9bZkp7q19f0'
     },
     {
       title: 'AI Healthcare Technical Documentation',
       content: 'Comprehensive technical specifications for AI Healthcare Intelligence platform. Access detailed documentation covering AI algorithms, medical data processing, predictive models, and clinical integration procedures for healthcare systems.',
       type: 'content-document',
       document: 'assets/documents/ai-healthcare-technical-specs.pdf'
     },
     {
       title: 'Clinical Implementation Guide',
       content: 'Complete clinical implementation documentation for AI Healthcare Intelligence including physician training, system integration, patient data privacy, and operational procedures for medical practice integration.',
       type: 'content-document',
       document: 'assets/documents/ai-healthcare-implementation-guide.pdf'
     },
     {
       title: 'AI Medical Safety Standards',
       content: 'Comprehensive safety protocols for AI Healthcare Intelligence operations. Includes clinical risk assessments, patient data protection, AI bias mitigation, and regulatory compliance for medical AI systems.',
       type: 'content-document',
       document: 'assets/documents/ai-healthcare-safety-standards.pdf'
     },
     {
       title: 'AI Healthcare Revolution',
       content: 'AI Healthcare Intelligence is transforming medical practice through artificial intelligence and machine learning. Our platform enables precision medicine, improves diagnostic accuracy, and enhances patient outcomes through intelligent clinical decision support.',
       type: 'content-only'
     }
   ],

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-brain-line',
       title: 'Clinical Intelligence',
       description: 'AI-driven diagnostic and treatment recommendations',
       benefits: ['Evidence-based decisions', 'Predictive analytics', 'Patient stratification']
     },
     {
       icon: 'ri-microscope-line',
       title: 'Imaging Analysis',
       description: 'Advanced medical imaging interpretation with AI',
       benefits: ['Radiology support', 'Pathology assistance', 'Early detection']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Diagnostic Support',
       description: 'AI-assisted medical diagnosis and treatment planning',
       icon: 'ri-stethoscope-line',
       benefits: ['Accurate diagnosis', 'Treatment optimization', 'Risk assessment']
     },
     {
       title: 'Predictive Medicine',
       description: 'Preventive healthcare through predictive analytics',
       icon: 'ri-line-chart-line',
       benefits: ['Disease prediction', 'Preventive care', 'Outcome optimization']
     }
   ]
 },

 'telemedicine-network': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'Global Telemedicine Network',
     subtitle: 'Connected Healthcare Platform',
     description: 'Comprehensive telemedicine infrastructure providing global healthcare connectivity, remote consultations, and emergency medical response through advanced communication technology.',
     icon: 'ri-global-line',
     category: 'Telemedicine',
     price: 'Starting at ₹10,00,00,000',
     rating: 4.9,
     availability: 'Available for global deployment 2025'
   },

   // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
   contentSections: [
     {
       title: 'Global Telemedicine Platform',
       content: 'Our Global Telemedicine Network represents breakthrough connected healthcare technology, featuring secure global communication infrastructure for remote medical consultations and emergency response. With AI-powered telemedicine capabilities, this platform enables healthcare access worldwide.',
       type: 'content-image',
       image: 'assets/img/bock_health_img4.jpg'
     },
     {
       title: 'Remote Healthcare Operations',
       content: 'Discover how our telemedicine network enables global healthcare delivery through secure communication and remote consultation capabilities. This comprehensive system provides real-time medical consultations, emergency response coordination, and remote patient monitoring worldwide.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
     },
     {
       title: 'Telemedicine System Testing & Validation',
       content: 'Watch comprehensive telemedicine testing procedures and system validation protocols for Global Telemedicine Network. This detailed video demonstrates our rigorous healthcare compliance standards, security validation, and performance testing for global medical communications.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/9bZkp7q19f0'
     },
     {
       title: 'Telemedicine Technical Documentation',
       content: 'Comprehensive technical specifications for Global Telemedicine Network infrastructure. Access detailed documentation covering secure communication protocols, HIPAA compliance standards, global connectivity architecture, and healthcare integration procedures.',
       type: 'content-document',
       document: 'assets/documents/telemedicine-technical-specs.pdf'
     },
     {
       title: 'Medical Implementation Guidelines',
       content: 'Complete telemedicine implementation documentation including physician training programs, global deployment strategies, regulatory compliance across jurisdictions, and operational procedures for international healthcare delivery.',
       type: 'content-document',
       document: 'assets/documents/telemedicine-implementation-guide.pdf'
     },
     {
       title: 'Telemedicine Safety & Privacy Standards',
       content: 'Comprehensive safety protocols and privacy standards for telemedicine operations. Includes HIPAA compliance frameworks, international data protection regulations, patient privacy safeguards, and emergency communication security measures.',
       type: 'content-document',
       document: 'assets/documents/telemedicine-safety-standards.pdf'
     },
     {
       title: 'Global Healthcare Connectivity Revolution',
       content: 'Global Telemedicine Network is transforming healthcare accessibility through secure worldwide communication infrastructure. Our platform bridges geographical barriers, enabling quality medical care to reach remote areas and underserved populations globally.',
       type: 'content-only'
     }
   ],

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-global-line',
       title: 'Global Connectivity',
       description: 'Worldwide telemedicine infrastructure',
       benefits: ['Remote consultations', 'Global access', 'Emergency response']
     },
     {
       icon: 'ri-video-chat-line',
       title: 'HD Video Conferencing',
       description: 'High-definition medical video communications',
       benefits: ['Clear diagnostics', 'Remote examination', 'Real-time collaboration']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Remote Care',
       description: 'Remote healthcare delivery and monitoring',
       icon: 'ri-remote-control-line',
       benefits: ['Home healthcare', 'Rural access', 'Chronic management']
     },
     {
       title: 'Emergency Response',
       description: 'Telemedicine emergency medical services',
       icon: 'ri-alert-line',
       benefits: ['Emergency support', 'Critical care', 'Rapid response']
     }
   ]
 },

 'health-monitoring': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'Continuous Health Monitoring',
     subtitle: '24/7 Medical Surveillance Platform',
     description: 'Advanced patient monitoring system providing continuous health surveillance, predictive analytics, and early warning systems for proactive healthcare management.',
     icon: 'ri-heart-pulse-line',
     category: 'Health Monitoring',
     price: 'Starting at ₹5,00,00,000',
     rating: 4.9,
     availability: 'Available for healthcare providers 2025'
   },

   // ============= CONTENT SECTIONS FOR PRODUCT PAGE =============
   contentSections: [
     {
       title: 'Continuous Health Monitoring Technology',
       content: 'Our Continuous Health Monitoring represents breakthrough medical surveillance technology, featuring real-time vital signs tracking and predictive health analytics. With advanced wearable sensors and AI-powered analysis, this platform enables proactive healthcare management and preventive interventions.',
       type: 'content-image',
       image: 'assets/img/bock_health_img5.jpg'
     },
     {
       title: '24/7 Patient Surveillance Operations',
       content: 'Discover how our health monitoring platform enables continuous patient surveillance through integrated sensor networks and predictive analytics. This comprehensive system provides real-time health tracking, emergency early warning systems, and personalized healthcare management.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
     },
     {
       title: 'Medical Monitoring Testing & Validation',
       content: 'Watch comprehensive health monitoring testing procedures and medical device validation protocols. This detailed video demonstrates our rigorous clinical testing standards, sensor accuracy validation, and predictive analytics performance verification for continuous patient monitoring.',
       type: 'content-video',
       video: 'https://www.youtube.com/embed/9bZkp7q19f0'
     },
     {
       title: 'Health Monitoring Technical Specifications',
       content: 'Comprehensive technical specifications for Continuous Health Monitoring platform. Access detailed documentation covering sensor technologies, data transmission protocols, predictive algorithms, and clinical integration standards for patient surveillance systems.',
       type: 'content-document',
       document: 'assets/documents/health-monitoring-technical-specs.pdf'
     },
     {
       title: 'Clinical Deployment Guidelines',
       content: 'Complete clinical deployment documentation for health monitoring systems including physician training, patient onboarding procedures, data interpretation guidelines, and operational protocols for continuous medical surveillance implementation.',
       type: 'content-document',
       document: 'assets/documents/health-monitoring-implementation-guide.pdf'
     },
     {
       title: 'Patient Safety & Privacy Standards',
       content: 'Comprehensive safety protocols and privacy standards for health monitoring operations. Includes HIPAA compliance frameworks, patient data encryption, clinical data retention policies, and emergency response coordination standards.',
       type: 'content-document',
       document: 'assets/documents/health-monitoring-safety-standards.pdf'
     },
     {
       title: 'Proactive Healthcare Revolution',
       content: 'Continuous Health Monitoring is transforming healthcare delivery through proactive surveillance and predictive analytics. Our platform enables early intervention, personalized treatment plans, and comprehensive health management across patient populations.',
       type: 'content-only'
     }
   ],

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-heart-pulse-line',
       title: 'Vital Monitoring',
       description: 'Continuous vital signs tracking and analysis',
       benefits: ['Heart rate monitoring', 'Blood pressure tracking', 'Oxygen saturation']
     },
     {
       icon: 'ri-smartphone-line',
       title: 'Wearable Integration',
       description: 'Smart wearable device ecosystem',
       benefits: ['Portable monitoring', 'Comfortable design', 'Wire-free operation']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Chronic Care',
       description: 'Management of chronic diseases through monitoring',
       icon: 'ri-health-book-line',
       benefits: ['Disease management', 'Medication adherence', 'Health trends']
     },
     {
       title: 'Preventive Care',
       description: 'Early detection and prevention of health issues',
       icon: 'ri-shield-line',
       benefits: ['Early warning', 'Risk prevention', 'Health promotion']
     }
   ]
 },

 'surgical-automation': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'Surgical Automation Complex',
     subtitle: 'Next-Generation Surgical Systems',
     description: 'State-of-the-art automated surgical systems featuring precision robotics, AI-assisted procedures, and minimally invasive techniques for enhanced surgical outcomes.',
     icon: 'ri-surgical-mask-line',
     category: 'Surgical Automation',
     price: 'Starting at ₹50,00,00,000',
     rating: 4.8,
     availability: 'Development phase - 2026 availability'
   },

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-scissors-line',
       title: 'Precision Surgery',
       description: 'Micro-precision surgical instrumentation',
       benefits: ['Tremor elimination', 'Enhanced accuracy', 'Minimal invasiveness']
     },
     {
       icon: 'ri-robot-line',
       title: 'Robotic Assistance',
       description: 'AI-powered robotic surgical support',
       benefits: ['Autonomous procedures', 'Surgeon augmentation', 'Procedural automation']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Complex Procedures',
       description: 'Advanced surgical procedures with automation',
       icon: 'ri-cpu-line',
       benefits: ['Complex surgery', 'Minimal trauma', 'Faster recovery']
     },
     {
       title: 'Precision Medicine',
       description: 'Targeted surgical interventions',
       icon: 'ri-target-line',
       benefits: ['Exact targeting', 'Tissue preservation', 'Optimal outcomes']
     }
   ]
 },

 'pharmaceutical-innovation': {
   // ============= BASIC METADATA =============
   metadata: {
     name: 'Pharmaceutical Innovation Hub',
     subtitle: 'AI-Driven Drug Discovery Platform',
     description: 'Revolutionary pharmaceutical research platform utilizing artificial intelligence for drug discovery, molecular modeling, and therapeutic compound optimization.',
     icon: 'ri-flask-line',
     category: 'Pharmaceutical Research',
     price: 'Custom Enterprise Pricing',
     rating: 4.7,
     availability: 'Available for pharmaceutical partners 2025'
   },

   // ============= FEATURES =============
   features: [
     {
       icon: 'ri-microscope-line',
       title: 'Molecular Analysis',
       description: 'Advanced molecular structure analysis and modeling',
       benefits: ['Compound modeling', 'Drug interaction prediction', 'Target identification']
     },
     {
       icon: 'ri-brain-line',
       title: 'AI Research',
       description: 'Machine learning for pharmaceutical discovery',
       benefits: ['Drug optimization', 'Clinical trial prediction', 'Safety assessment']
     }
   ],

   // ============= APPLICATIONS =============
   applications: [
     {
       title: 'Drug Discovery',
       description: 'Accelerated pharmaceutical research and development',
       icon: 'ri-lab-cone-line',
       benefits: ['Faster discovery', 'Cost reduction', 'Higher success rates']
     },
     {
       title: 'Personalized Medicine',
       description: 'Customized therapeutic approaches',
       icon: 'ri-user-settings-line',
       benefits: ['Patient-specific treatments', 'Genetic targeting', 'Optimized dosing']
     }
   ]
 }
};
