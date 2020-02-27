import bigDataImage from "../images/bigdata.jpg";
import esImage from "../images/elasticsearch.jpg";
import hpcImage from "../images/hpc.jpg";
import redisImage from "../images/redis.jpg";
import cephImage from "../images/ceph.jpg";
import batchImage from "../images/batch.jpg";
import devopsImage from "../images/devops.jpg";
import loggingImage from "../images/logging.jpg";

import cephCoreImg from "../images/ceph-core.jpg";
import cephExtendedImg from "../images/ceph-extended.jpg";
import elasticCoreImg from "../images/elastic-core.jpg";
import elasticNonUniformImg from "../images/elastic-nonuniform.jpg";
import elkCoreImg from "../images/elk-core.jpg";
import kegCoreImg from "../images/keg-core.jpg";
import slurmCoreImg from "../images/slurm-core.jpg";
import slurmOpenfoamImg from "../images/slurm-openfoam.jpg";
import redisClusterImg from "../images/redis-cluster.jpg";
import redisSingletonImg from "../images/redis-singleton.jpg";
import sparkExtendedImg from "../images/spark-extended.jpg";
import sparkJupyterCoreImg from "../images/spark-jupyter-core.jpg";

export const configServiceRoutes = [
  {
    path: "/big-data",
    serviceName: "Big Data",
    serviceImage: `${bigDataImage}`,
    serviceTitle: "SPARK/HADOOP WORKFLOW SIMPLIFED",
    serviceText:
      "OSL provides packaging and lifecycle management for all components in the Apache Software Foundation ecosystem.",
    cardData: [
      {
        cardDataId: "~omnivector/bundle/spark-jupyter-core-0",
        cardTitle: "SPARK + JUPYTER CORE",
        cliCommand: "juju deploy cs:~omnivector/bundle/spark-jupyter-core-0",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/spark-jupyter-core-0",
        cardImg: `${sparkJupyterCoreImg}`,
        cardDescription:
          "This bundle deploys a Jupyter Notebook to use as a driver, and a singleton Spark instance that will run both master and worker services."
      },
      {
        cardDataId: "~omnivector/bundle/spark-jupyter-conda-extended-0",
        cardTitle: "SPARK EXTENDED",
        cliCommand:
          "juju deploy cs:~omnivector/bundle/spark-jupyter-conda-extended-0",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/spark-jupyter-conda-extended-0",
        cardImg: `${sparkExtendedImg}`,
        cardDescription:
          "This bundle displays how extended workflow automation and monitoring components can be built on top of and alongside our custom spark offerings. "
      }
    ]
  },
  {
    path: "/hpc",
    serviceName: "HPC",
    serviceImage: `${hpcImage}`,
    serviceTitle: "GAIN A COMPETITIVE EDGE BY OVERCOMING THE BARRIERS TO HPC.",
    serviceText:
      "We bring security, automation, and lifecycle to your HPC applications by packaging and delivering SLURM along with other modern and scalable HPC solutions.",
    cardData: [
      {
        cardDataId: "bundle/slurm-core-0",
        cardTitle: "Slurm Core",
        cliCommand: "juju deploy cs:bundle/slurm-core-0",
        jaasLink: "https://jujucharms.com/new/?dd=bundle/slurm-core-0",
        cardImg: `${slurmCoreImg}`,
        cardDescription:
          "This bundle contains the core component of the SLURM workload manager. This is the first step to building a fault-tolerant, and highly scalable cluster management and job scheduling system."
      },
      {
        cardDataId: "bundle/slurm-openfoam-0",
        cardTitle: "Slurm OpenFOAM",
        cliCommand: "juju deploy cs:bundle/slurm-openfoam-0",
        jaasLink: "https://jujucharms.com/new/?dd=bundle/slurm-openfoam-0",
        cardImg: `${slurmOpenfoamImg}`,
        cardDescription:
          "This bundle is an example of how we extended the SLURM core stack to support OpenFOAM. Our HPC expertise has allowed us to rapidly develop custom solutions for many unique HPC use cases."
      }
    ]
  },
  {
    path: "/elasticsearch",
    serviceName: "Elasticsearch",
    serviceImage: `${esImage}`,
    serviceTitle: "SUB-MILLISECOND RESPONSE TIMES FOR REAL-TIME APPLICATIONS",
    serviceText:
      "Not months. Not weeks. Not days. We can have you up and running in hours! Contact us now to find out how!",
    cardData: [
      {
        cardDataId: "~omnivector/bundle/elasticsearch-non-uniform-2",
        cardTitle: "Elasticsearch Core",
        cliCommand: "juju deploy cs:~omnivector/bundle/elasticsearch-core-4",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/elasticsearch-core-4",
        cardImg: `${elasticCoreImg}`,
        cardDescription:
          'This bundle is an example of a uniform "all" node-type Elasticsearch cluster.'
      },
      {
        cardDataId: "~omnivector/bundle/elasticsearch-core-4",
        cardTitle: "Elasticsearch Non-uniform",
        cliCommand:
          "juju deploy cs:~omnivector/bundle/elasticsearch-non-uniform-2",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/elasticsearch-non-uniform-2",
        cardImg: `${elasticNonUniformImg}`,
        cardDescription:
          "This bundle is an example of a non-uniform node-type Elasticsearch deploy."
      }
    ]
  },
  {
    path: "/redis",
    serviceName: "Redis",
    serviceImage: `${redisImage}`,
    serviceTitle: "IN-MEMORY DATABASE LIFECYCLE AUTOMATION.",
    serviceText:
      "OSL makes Redis easy to set up, operate, and scale in Public, Private and Hybrid clouds.",
    cardData: [
      {
        cardDataId: "~omnivector/bundle/redis-singleton-1",
        cardTitle: "Redis Singleton",
        cliCommand: "juju deploy cs:~omnivector/bundle/redis-singleton-1",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/redis-singleton-1",
        cardImg: `${redisSingletonImg}`,
        cardDescription:
          "The core component of our Redis offerings, Redis singleton. Go ahead, deploy it by clicking below."
      },
      {
        cardDataId: "~omnivector/bundle/redis-cluster-1",
        cardTitle: "Redis Cluster",
        cliCommand: "juju deploy cs:~omnivector/bundle/redis-cluster-1",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/redis-cluster-1",
        cardImg: `${redisClusterImg}`,
        cardDescription:
          "Our Redis offerings are lifecycle oriented and ops focused. Deploy a 3 node Redis Cluster by clicking below."
      }
    ]
  },
  {
    path: "/ceph",
    serviceName: "Ceph",
    serviceImage: `${cephImage}`,
    serviceTitle: "CEPH DISTRIBUTED STORAGE. IT’S NEVER BEEN THIS SIMPLE.",
    serviceText:
      "OSL’s primary solution for building robust distributed storage systems. Our customers rely on Ceph to provide highly available, scalable and reliable storage clusters.",
    cardData: [
      {
        cardDataId: "~omnivector/bundle/ceph-core-2",
        cardTitle: "Ceph Core",
        cliCommand: "juju deploy cs:~omnivector/bundle/ceph-core-2",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/ceph-core-2",
        cardImg: `${cephCoreImg}`,
        cardDescription:
          "Ceph is a distributed storage and network file system designed to provide excellent performance, reliability, and scalability."
      },
      {
        cardDataId: "~omnivector/bundle/ceph-extended-4",
        cardTitle: "Ceph Extended",
        cliCommand: "juju deploy cs:~omnivector/bundle/ceph-extended-4",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/ceph-extended-4",
        cardImg: `${cephExtendedImg}`,
        cardDescription: "The Ceph Core bundle + Ceph Mon and Ceph OSD."
      }
    ]
  },
  {
    path: "/batch-enrichment",
    serviceName: "Batch Enrichment",
    serviceImage: `${batchImage}`,
    serviceTitle: "1.5B UNIQUE PEOPLE RECORDS, DELIVERED AT SCALE.",
    serviceText:
      "With over 150 data points for each record, we provide a unique data set that enables organizations to power their data driven decisions. Contact us now to start enriching your data.",
    cardData: [
      { cardDataId: "", cardTitle: "", cardDescription: "" },
      { cardDataId: "", cardTitle: "", cardDescription: "" }
    ]
  },
  {
    path: "/devops",
    serviceName: "Dev Ops",
    serviceImage: `${devopsImage}`,
    serviceTitle: "MAKE OMNIVECTOR YOUR OPS EXPERT PARTNER.",
    serviceText:
      "OSL provides collaboration, monitoring, lifecycle and automation for private, public and hybrid cloud solutions. We provide agile infrastructure for application development by automating your CI/CD pipeline. We work with industry leaders and enterprise cloud platforms to provide best in class security, compliance and support. This enables you to improve your efficiency while reducing complexity and cost.",
    cardData: [
      { cardDataId: "", cardTitle: "", cardDescription: "" },
      { cardDataId: "", cardTitle: "", cardDescription: "" }
    ]
  },
  {
    path: "/logging",
    serviceName: "Logging",
    serviceImage: `${loggingImage}`,
    serviceTitle: "LOG DATA LIFECYCLE OPS AT SCALE.",
    serviceText:
      "The operations knowledge and domain expertise to facilitate any logging operation; in the cloud, on-prem, or a mix of both. We can facilitate scalable logging infrastructure today. Contact us for a free demo of how we can make sense of your loose ends.",
    cardData: [
      {
        cardDataId: "~omnivector/bundle/elk-core-4",
        cardTitle: "ELK Core",
        cliCommand: "juju deploy cs:~omnivector/bundle/elk-core-4",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/elk-core-4",
        cardImg: `${elkCoreImg}`,
        cardDescription:
          "This bundle combines singleton Elasticsearch, Kibana, and Logstash components to provide the core components needed to get started for most use cases."
      },
      {
        cardDataId: "~omnivector/bundle/keg-core-1",
        cardTitle: "KEG Core",
        cliCommand: "juju deploy cs:~omnivector/bundle/keg-core-1",
        jaasLink:
          "https://jujucharms.com/new/?dd=~omnivector/bundle/keg-core-1",
        cardImg: `${kegCoreImg}`,
        cardDescription:
          "The KEG stack adds Graylog in place of Logstash (used in the ELK Core bundle). Deploy this bundle to see how we create standalone solutions that scale."
      }
    ]
  }
];
