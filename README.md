#ADS RFQ Pool One Design
Prototype URL: [http://agilebpa.forumone.com](http://agilebpa.forumone.com).

Agile Management Tool: [Trello](https://trello.com/b/nCt1b9Fg/18f-agile-bpa)

This tool tracked progress on the prototype and includes a timestamped chronological listing of how the prototypes were designed and developed by our team. All documentation within Trello is also in the Documentation section in GitHub.

## Description

dCARE is a tool that enables physicians, pharmacists, nurses, patients and care providers to understand the types of contraindications from taking two or more mental health drugs at the same time. The dCARE tool is specifically designed to help those who are taking or prescribing pharmaceuticals for mental health issues (antidepressants and psychostimulants/nootropics) to understand if there are potentially adverse side effects from specific combinations of medicines.

dCARE includes the ability to show contradictors for several medications at the same time. It is based on official FDA data, and reduces the research time substantially. You can track our progress on our [trello board.](https://trello.com/b/nCt1b9Fg/18f-agile-bpa)

## Approach - Design Pool 

###Vision, Planning and Preparation
Before starting, Forum One designated a [Product Owner](https://playbook.cio.gov/#play6) to play the role of the client, while a [design team](https://github.com/forumone/18F#team-and-labor-categories---design-pool) met to internally kick off the project. During the formal kick off meeting with the Product Owner, we developed a [vision](https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/ProductVisionScenariosPersonas.md) for the prototype and held a requirements gathering workshop.

###Human-Centered Design
As Forum One sought to build a tool that not only met the criteria of the Product Owner, but also the needs of end users, we employed various human-centered design techniques. We started by taking a page from the [Digital Services Playbook](https://playbook.cio.gov/#play1) on understanding what people need. During the first few sprints, our design team began researching the needs of potential end users, developing [personas, scenarios, and use cases](https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/ProductVisionScenariosPersonas.md). While we interviewed potential users, we quickly relayed the information to the design team, who, alongside the designated Product Owner, worked to create a backlog of activities that would shape the prototype.

###Iterating on Design
Our User Research Lead shared of the initial research findings with the Product Owner, and began wireframing possible solutions for the tools. Meanwhile, our visual designer worked on design comps to give a graphic represenation of the tool in action. Using a combination of [whiteboards](https://trello.com/c/olRRtiuG/14-design-sketching-requirements), [UXPin](https://trello.com/c/ZWks6dJ8/5-design-wireframing) and [Photoshop](https://trello.com/c/DabuKFea/26-design-create-data-viewer-mockups), the team delivered on potential solutions that reconciled the product owner's vision with the user research that had been conducted to deliver an [intuitive, easy-to-use tool](https://playbook.cio.gov/#play3). The tool is meant to  allow users to search adverse effects by drug [quickly](https://trello-attachments.s3.amazonaws.com/55915a5a8b760d497bdb8351/2550x3300/ed9e82115da008aaf198a9166dc46167/dCare_Flow.png), and even compare effects for different drug combinations. By Sprint 4, the team was collecting usability testing feedback about the wireframes and design comps. Usability testing continued throughout the project life, from face-to-face prototype testing to [online surveys](https://www.surveymonkey.com/r/3MTG8JK), with the feedback guiding the aesthetic and technical changes to the prototype. By keeping our [team lean and on a sprint schedule](https://playbook.cio.gov/#play4) that allowed [frequent communication and collaboration](https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/SprintPlanningandReviewNotes.md) including sprint planning, reviews, retrospectives and standups.

###Designing for Usability
Instead of depending on style guides built from scratch, our design team applied concepts from Google's [Material Design](https://www.google.com/design/spec/material-design/introduction.html) standards, making use of grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows. The prototype is fully responsive, allowing users to view data across devices.

###Using Open-source Technologies
A large component of our ability to stay lean and develop fast came from the use of [open-soruce technologies](https://playbook.cio.gov/#play8). Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. 


##Design Criteria - Pool 1
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted | [link](https://github.com/forumone/18F#team-and-labor-categories---design-pool) |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories limited to the Design Pool labor categories to develop the prototype as quoted in Attachment C | [link](https://github.com/forumone/18F#team-and-labor-categories---design-pool) |
| 3  | Understand what people need, by including people in the prototype design process | [link](https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/ProductVisionScenariosPersonas.md) |
| 4  | Used at least three “human-centered design” techniques or tools | [link](https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/ProductVisionScenariosPersonas.md) |
| 5  | Created or used a design style guide and/or a pattern library |          |
| 6  | Used at least three modern and open source frontend or client side web technologies | [link](http://agilebpa.forumone.com/about/#/) Among others, client side technologies include: D3, Angular, SASS, jQuerey |
| 7  | Performed usability tests with people | [trello link](https://trello.com/c/P3M8k6Ag/29-user-research-usability-testing-wireframes), [survey link](https://www.surveymonkey.com/r/3MTG8JK)         |
| 8  | Used an interactive approach, where feedback informed subsequent work or versions of the prototype | [Trello Board](https://trello.com/b/nCt1b9Fg/18f-agile-bpa), [Sprint Reviews/Retrospectives] (https://github.com/forumone/18F-ADSBPA-Pool-1-Design-/blob/master/documentation/SprintPlanningandReviewNotes.md) |
| 9  | Created a prototype that works on multiple devices and presents a responsive design |         |
| 10 | Provided sufficient documentation to install and run their prototype on another machine | [link](https://github.com/forumone/18F#web-starter-kit) |
| 11 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge | [link](https://github.com/forumone/18F/blob/master/LICENSE.md) |

## Team and Labor Categories - Design Pool
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Product Manager - M.C. Franzini | M.C. Franzini is a senior project officer at Forum One, where he leads strategy and web development projects for clients in government agencies and nonprofits. Recent clients with whom he has worked on large-scale Drupal projects include the Consumer Financial Protection Bureau, USDA’s Foreign Agricultural Service, USDA’s National Institute for Food and Agriculture, and the U.S. Department of Health’s Office of the National Coordinator for Health IT. He brings an enthusiasm for online community and collaboration, user experience and design, and building innovative web sites to help clients increase their impact. He holds an master’s in international business from the University of Edinburgh and a master’s in political management from the George Washington University. He has worked in the private, government, nonprofit, and education sectors. | M.C. Franzini has authority and responsibility over the quality of the submitted prototype. | 24 hours |
| Interaction Designer/User Research Lead - Matt Humphrey | Matt Humphrey is the Manager of User Experience Design at Forum One. He works with clients to develop an optimal user experience that balances the organization’s mission with the needs of its target users. Matt routinely combines his background in web media and instructional design and has expertise in audience research and analysis, usability testing, content strategy, wireframe development, prototyping, graphic design, and CMS development. Matt brings a broad range of web design and development experience to Forum One. He was the curriculum and technology manager at the Community Technology Centers' Network (CTCNet). At CTCNet, he oversaw the development and design of the organization's websites and managed a curriculum development project that addressed youth civic engagement issues. Matt has a master of education in instructional design and development from George Mason University and a bachelor of science in information technology and web media from Juniata College. | As interaction designer and user research lead, Matt oversees all stages of site design, including audience analysis, usability testing, front-end development, graphical creation, and visual design management. | 24 hours |
| Visual Designer - Lisa Drobek | Lisa Drobek is a Senior User Experience Designer at Forum One, where she is responsible for creating the content strategy and information architecture that extends a client’s brand to its website or mobile app. She has over ten years of experience in visual design and may also be creating all interaction and visual design aspects that support a client’s project as well.  Prior to joining Forum One, Lisa was a Senior Interaction Designer at Capital One where she collaborated with project managers and developers to create functional user flows and visual designs for mobile and web applications. She also has significant experience designing content websites. She worked on re-imagining the online sales experience at Capital One, added freshly designed content pages to the American Chemical Society’s website, and reorganized the website to support channel marketing initiatives while at Axzo, an educational publishing company. Lisa earned her bachelor’s from Penn State University where she dabbled in photography, graphic design, and advertising, while developing her passion for publishing with her involvement at The Daily Collegian. She received her master’s in Publications Design from University of Baltimore and won regional awards for her publication design. Her experience in publishing has driven her to advocate for digital-first content strategies that include more detailed storytelling through incorporating interactive data and long-form content on the web. | As visual designer on this project, Lisa applies her extensive knowledge of design principles and web strategy best practices in order to engage each target audience, create a high-impact user interface, and generate an optimal end-user experience. | 8 hours |
| Writer/Content Designer/Content Strategist - Mike Shoag | Michael takes a content-first approach to complex strategy and development projects. He provides a full range of content strategy, including development of communication plans, mapping goals and user journeys, organizational positioning, and messaging architecture.  Before joining Forum One, he worked at Development InfoStructure (Devis) and Interactive Applications Group (iapps), leading teams to develop and implement innovative technology solutions. He managed a team of 50 staff who trained and supported over 4,000 people in 80 countries for the USAID. He is a Certified Project Management Professional (PMP). He also provides pro-bono consulting for several small nonprofits. Michael earned a bachelor’s degree in politics, philosophy and economics at Claremont McKenna College and a master of public policy from Harvard University’s Kennedy School of Government. | Charged with content strategy, Mike has worked closely with the UX Lead and Product Owner to ensure that the Product Owner's vision was clearly communicated, while providing clear and useful context for end users who visited the dCARE site. | 16 hours |
	
## Web Starter Kit

This project has been setup to use a virtual machine for local development to closely mirror the production environment. To use the the virtual machine, follow these instructions.

## Preparing your local environment

  * Latest Virtualbox -- [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads). If you are running Win 7 install 4.2.x
  * Latest Virtualbox Extension Pack -- [https://www.virtualbox.org/wiki/Downloads]. Should match your Virtualbox version
  * Vagrant (currently tested with 1.3.5 and 1.6.2) -- [http://downloads.vagrantup.com](http://downloads.vagrantup.com)


## Getting Vagrant environment set up
Starting from within the root of your project (an existing project which already has a vagrant/puppet configured or starting a new project from the Drupal Starter Project), do the following:

1. Create VM by running "vagrant up" (This step will take long (might be 5+ minutes) as all necessary components are being downloaded and installed)
  * If you get an error re-provision the VM by running "vagrant provision" to see if this resolves the issue
2. SSH into VM by running "vagrant ssh"
3. Navigate to VM docroot by running "cd /vagrant/public"
4. Install Drupal using custom install profile by running "drush si [profile] -y" and following prompts. Alterntatively, use drush aliases to synch to a development instance of a site database. 

## Troubleshooting

Occasionally some issues may occur that prevent you from loading the virtual machine. Below are some common issues that others have experienced.

### General

If the virtual machine does not boot up and you get a message saying there was a timeout, try launching the VM through the Virtualbox interface to get more detailed information.


### Macintosh machines

* If you experience errors when sharing the folder over NFS you may need to enable File Sharing in System Preferences -> Sharing
* If you receive an error about an invalid export you may need to manually delete /etc/exports file
* If you've updated to Mavericks and Virtualbox is no longer working, try the following command: sudo /Library/StartupItems/VirtualBox/VirtualBox restart
* If you are prompted to enter your password when SSHing from the VM ensure your SSH private key is in the keychain by running "ssh-add -K ~/.ssh/id_rsa" from your machine

### Linux machines

* If you experience errors when sharing the folder over NFS you may need to install the appropriate NFS packages, on Ubuntu you will need to run "sudo apt-get install nfs-kernel-server"

### Windows machines

* Virtualbox requires the Intel Virtualization Technology for Directed I/O (VT-d) be enabled, if you receive a message saying that the VM requires a 64 bit processor and you only have an i686 processor this may be the cause
* Virtualbox may trigger a Windows Firewall popup to allow ports to be shared
* If the provisioning fails with errors on ports.conf or sites.xml this may be due to CRLF issues with the configuration files, to resolve this take the following actions:
  1. git config --global --edit
  2. Add line if missing: [core]
  3. Below that line add line: autocrlf = input
* if your ssh key information does not correctly forward, you can copy your ssh private key to ~/.ssh and chmod it 700
* if git says everything is changed, it's probably the line endings issues you've most likely seen before, doing "git add -u" should just remove them from the list (and not add them to be committed)


## Installing locally

In order to run the project locally you need NPM of 1.4 or higher as well as bower and sails packages installed globally. Run ```npm --version``` to check your version of NPM and then ```sudo npm update npm -g``` to upgrade as necessary. To install the packages run:

* ```sudo npm install bower -g``` to install bower
* ```sudo npm install sails -g``` to install sails

To start the site run ```sails lift``` within the root checkout. It will run the Grunt tasks and start Express so the site is available at http://localhost:1337.

