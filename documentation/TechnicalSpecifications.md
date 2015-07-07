## Design Style Guide or Pattern Library
Forum One used [Google's Material Design](http://www.google.com/design/spec/material-design/introduction.html) components as the base pattern library for the dCare tool. This provided our team with a visual language and direction early in the process and allowed us to iterate on the design quicker, rather than going through a color and design direction process.

##  Open Source Tools
- Jenkins
- Capistrano
- Sails
- D3
- Angular
- Lodash
- jQuery
- Grunt
- SASS
- Bower
- NPM

##Source Code Management Solution

Forum One used the Git code versioning system repository to serve as the authoritative source for all website development releases for the prototype. William established a Git branch and tagging standards to facilitate the automation of deployments to development, stage, and production environments. Git allows our multi-developer team to work collaboratively, while ensuring quality and redundancy. 

For the purposes of this prototype, we follow well-documented Git usage standards as is common in many open source communities (Drupal, WordPress, etc). Our use of Git relies upon Branches and Tags to control the versioning of releases across the development, staging, and production environment of the sites we develop. Each Branch and Tag is built off the central repository and ensures we maintain the integrity of the core system.

Our development, staging, and production environments are gated using the following high level rules:
- Development: Active development of new features, application of new contributed module patches, application of major point releases of contributed Drupal Modules, and quality assurance testing prior to pushing of code to the Staging Environment.
- Stage: Quality assurance and testing by QA staff of applied development changes; Client review and acceptance of changes
- Production: Live site or application.  Bug fixes or features move from Development to Staging before finally being deployed to Production.

##Continuous Integration

Whether large or small, any projects will likely require over a thousand deployments of code to the development, staging, and testing servers. We use Vagrant and Puppet for managing local virtual machines, Jenkins and GruntJS for continuous integration, and Capistrano for deployment. This approach provides some key advantages:

- Equips our developers with the same software, versions, and configuration as all other team members.
- Significantly increases the confidence we have that the code we push will be deployed the exact same way each time.
- Allows our team to recover a previously-known good version of code if for some reason something does fail. This can take place regardless of how many code commits have happened since.

##Infrastructure as a Service and Hosting Environment
Forum One designed and built the dCare tool on Amazon's popular EC2 Infrastructure as a Service. The prototype is deployed on a c3.large instance Amazon EC2 Linux Cloud Server.

##Continuous Monitoring
The prototype tool is hosted on Amazon EC2 and monitored and maintained by a set of tools. The instrumentation provides insight into the overall health of the system. Tools we use include:

- HTTP and Server Health Monitor: [Monitis] (http://www.monitis.com/) is an all-in-one application monitoring platform used to monitor the website and the server. Not only does Monitis provided uptime monitoring of the website, it monitors Linux® servers, CPUs, Memory, Storage and disk, Network bandwidth TCP protocols and WAN links.
- On-call rotation: [PagerDuty](https://www.pagerduty.com/) is an alarm aggregation and dispatching service used during emergencies and period of downtime. It collects alerts from the monitoring tools, gives an overall view of all of the monitoring alarms, and alerts an on duty engineer if there’s a problem.
- Centralized application/server logging: Forum One uses the open source log management platform, [Graylog](https://www.graylog.org/), for collecting, indexing, and analyzing both structured and unstructured data from almost any source. Non Graylog-authored components Include MongoDB for metadata and Elasticsearch for log file storage and text search.

In addition to the above standard monitoring tools, Forum One somtimes also uses additional monitoring tools if required. These include: 
- Amazon CloudWatch 
- New Relic

## Browser Compatability
The dCare tool has been fully tested on the latest two versions of popular browsers including Chrome, Safari, Internet Explorer and Firefox. The tool has also been tested on the iPhone 5/5s and latest phone running the Android OS. 
