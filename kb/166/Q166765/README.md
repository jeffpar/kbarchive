---
layout: page
title: "Q166765: SMS: Deploying Packages Successfully with the PCM Service"
permalink: kb/166/Q166765/
---

## Q166765: SMS: Deploying Packages Successfully with the PCM Service

	Article: Q166765
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfaq
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Package Command Manager (PCM) service (Pcmsvc32.exe) is installed by default
	on Systems Management Server logon servers. With updates for Systems Management
	Server 1.2, is also possible to install the service on computers running Windows
	NT Workstation and member servers. You can find information and updates for the
	PCM service for computers running Windows NT Workstation at
	
	  http://microsoft.com/smsmgmt,
	
	as well as in the Microsoft Knowledge Base.
	
	MORE INFORMATION
	================
	
	Installation instructions and file updates should be downloaded from
	
	  http://www.microsoft.com/servers
	
	Please review the Readme.txt and Install.doc files included with the download
	completely before updating the PCM service.
	
	
	There are several steps necessary to ensure that a package is received by the PCM
	service and that it runs correctly. This article summarizes the package and job
	requirements, and makes recommendations to ensure successful package deployment
	with the PCM service. This article assumes you have read the Install.doc and
	Readme.txt files included with the PCM service update available on the
	Internet.
	
	Summary of PCM Service Requirements
	-----------------------------------
	
	1. The package must be run "silently" with no user input required.
	
	2. The package command line must be designated as an "Automated Command Line"
	  and a System (Background) Task in the package properties.
	
	3. The job must be sent as mandatory, and will be run at the "Mandatory After"
	  time.
	
	4. The PCM service must be properly installed, configured, and running on the
	  target computer.
	
	Recommended Steps to Include with PCM Service Distributions
	-----------------------------------------------------------
	
	Preparation:
	
	1. Ensure the that target computer running Windows NT Workstation is in Systems
	  Management Server inventory, and that the inventory is current.
	
	2. Ensure that the PCM Polling Interval (on the Site Properties menu, click
	  Clients) is set to 20 minutes or greater. If it is set to less than 20
	  minutes, the next time the PCM service checks the .ins file, the status MIF
	  may not have been processed, and the package will run again.
	
	3. Familiarize yourself with product documentation and readme files included
	  with the application you want to deploy.
	
	4. Ensure that the application can be installed correctly in the context of the
	  service account. Refer to the PCM service update Install.doc file for more
	  information.
	
	5. Ensure that the target computer has been properly backed-up (including the
	  Windows NT Workstation registry, files and directories, and disk partition
	  information).
	
	6. Ensure that the target servers are running the correct version of the PCM
	  service (check the file date in the Sms\Helper.srv directory).
	
	Package Creation:
	
	1. In the Command Line Properties dialog box, make sure you have designated the
	  command line as an "Automated Command Line".
	
	2. In the Command Line Properties dialog box, make sure you have designated the
	  command line as a System (Background) Task.
	
	3. In the Command Line Properties dialog box, make sure that the correct
	  operating system platform is checked for Supported Platforms.
	
	NOTE: Pcmwin32.exe (the PCM application) does not attempt to run the package if
	it is designated as a Background Task, and the Pcmwin.log file will resemble the
	following:
	
	     [04/09/97 17:11:08] Package Command Manager ==> Looking for instruction
	     file: \\MACGREGOR\SMS_SHR\pcmins.box\BP004000.INS
	     [04/09/97 17:11:08] Package Command Manager => Packages before filter: 1
	     [04/09/97 17:11:08] Package Command Manager ==> Packages after filter: 1
	     [04/09/97 17:11:08] Package Command Manager ==> No new packages found.
	     [04/09/97 17:11:08] Package Command Manager ==> The desktop version
	     already has the mutex.
	     [04/09/97 17:11:08] Package Command Manager ==> Package (Request ID)
	     BP0000Y is marked for service-only execution, skipping it.
	
	Job Creation:
	
	1. In the Job Details dialog box, ensure that the Package Name, Job Target, Send
	  Phase and Distribute Phase are set according to your needs.
	
	2. In the Job Details dialog box under Run Phase, click the Run Workstation
	  Command check box, and select the appropriate Workstation Command Line.
	
	3. In the Job Details dialog box under Run Phase, ensure the Offer After date is
	  correct.
	
	4. In the Job Details dialog box under Run Phase, check the Mandatory After
	  check box, and ensure the date is correct.
	
	5. In the Job Details dialog box under Run Phase, ensure the Expire After date
	  is correct.
	
	On the Target Computer:
	
	1. It may be necessary to ensure no one is logged on at the target computer
	  (network connections are okay). Because jobs can now be run while the user is
	  logged on (or while the workstation is locked) administrators must be
	  cautious of the mandatory time selected for jobs that will restart the
	  system. Such jobs should be scheduled for off-hours, and users should be
	  given ample time to save their work.
	
	2. Ensure that the the PCM service is running.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	
