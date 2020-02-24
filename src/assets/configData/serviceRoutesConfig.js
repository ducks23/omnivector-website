import bigDataImage from "../images/bigdata.jpg";
import esImage from "../images/elasticsearch.jpg";
import hpcImage from "../images/hpc.jpg";
import redisImage from "../images/redis.jpg";
import cephImage from "../images/ceph.jpg";
import batchImage from "../images/batch.jpg";
import devopsImage from "../images/devops.jpg";
import loggingImage from "../images/logging.jpg";

export const serviceRoutsConfig = [
  { path: "/big-data",
    serviceName: "Big Data",
    serviceImage: `${bigDataImage}`,
    serviceTitle: "SPARK/HADOOP WORKFLOW SIMPLIFED",
    serviceText: "OSL provides packaging and lifecycle management for all components in the Apache Software Foundation ecosystem."
  },
  { path: "/hpc",
    serviceName: "HPC",
    serviceImage: `${hpcImage}`,
    serviceTitle: "GAIN A COMPETITIVE EDGE BY OVERCOMING THE BARRIERS TO HPC.",
    serviceText: "We bring security, automation, and lifecycle to your HPC applications by packaging and delivering SLURM along with other modern and scalable HPC solutions."
  },
  { path: "/elasticsearch",
    serviceName: "Elasticsearch",
    serviceImage: `${esImage}`,
    serviceTitle: "SUB-MILLISECOND RESPONSE TIMES FOR REAL-TIME APPLICATIONS",
    serviceText: "Not months. Not weeks. Not days. We can have you up and running in hours! Contact us now to find out how!"
  },
  { path: "/redis",
    serviceName: "Redis",
    serviceImage: `${redisImage}`,
    serviceTitle: "IN-MEMORY DATABASE LIFECYCLE AUTOMATION.",
    serviceText: "OSL makes Redis easy to set up, operate, and scale in Public, Private and Hybrid clouds."
  },
  { path: "/ceph",
    serviceName: "Ceph",
    serviceImage: `${cephImage}`,
    serviceTitle: "CEPH DISTRIBUTED STORAGE. IT’S NEVER BEEN THIS SIMPLE.",
    serviceText: "OSL’s primary solution for building robust distributed storage systems. Our customers rely on Ceph to provide highly available, scalable and reliable storage clusters."
  },
  { path: "/batch-enrichment",
    serviceName: "Batch Enrichment",
    serviceImage: `${batchImage}`,
    serviceTitle: "1.5B UNIQUE PEOPLE RECORDS, DELIVERED AT SCALE.",
    serviceText: "With over 150 data points for each record, we provide a unique data set that enables organizations to power their data driven decisions. Contact us now to start enriching your data."
  },
  { path: "/devops",
    serviceName: "Dev Ops",
    serviceImage: `${devopsImage}`,
    serviceTitle: "MAKE OMNIVECTOR YOUR OPS EXPERT PARTNER.",
    serviceText: "OSL provides collaboration, monitoring, lifecycle and automation for private, public and hybrid cloud solutions. We provide agile infrastructure for application development by automating your CI/CD pipeline. We work with industry leaders and enterprise cloud platforms to provide best in class security, compliance and support. This enables you to improve your efficiency while reducing complexity and cost."
  },
  { path: "/logging",
    serviceName: "Logging",
    serviceImage: `${loggingImage}`,
    serviceTitle: "LOG DATA LIFECYCLE OPERATIONS AT SCALE.",
    serviceText: "The operations knowledge and domain expertise to facilitate any logging operation; in the cloud, on-prem, or a mix of both. We can facilitate scalable logging infrastructure today. Contact us for a free demo of how we can make sense of your loose ends."
  },
]
