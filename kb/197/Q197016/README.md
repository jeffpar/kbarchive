---
layout: page
title: "Q197016: SMS: How to Distribute a Package"
permalink: /kb/197/Q197016/
---

## Q197016: SMS: How to Distribute a Package

{% raw %}

	Article: Q197016
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbPCM
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article addresses the following basic questions regarding Systems
	Management Server:
	
	- How do I make a "package" in Systems Management Server?
	
	- How do I make a "job" in Systems Management Server?
	
	- How do I activate the job?
	
	- What do I need to do at the client computer to run the software through
	  Systems Management Server?
	
	MORE INFORMATION
	================
	
	How to Create a Package
	-----------------------
	
	1. To create a package, you must first set up your package source. This step may
	  be as simple as placing files into a directory, or running the command "setup
	  /a".
	
	2. After setting up your package source, open the Package window in the Systems
	  Management Server Administrator program.
	
	3. On the File menu, click New.
	
	4. Give the Package a name.
	
	5. At this point you have three choices: Workstation, Sharing, and Inventory.
	  Select Workstation.
	
	6. Specify the source directory that you set up in Step 1 of this procedure (for
	  example, c:\package or \\server\package) and then click New.
	
	7. Specify the command name to install or run the package, for example, setup or
	  "notepad" (without the quotation marks).
	
	8. Select the operating system platform that the package is destined for.
	
	9. Click OK until you return to the Packages window.
	
	Your package is now set up for distribution.
	
	How to Create a Job
	-------------------
	
	1. To create a job, drag your newly created package and drop it on a site, a
	  computer, or a group of computers. This opens the Job Details window. At this
	  stage, you specify how you want to run the job.
	
	  There are three main options for the job:
	
	   - Send Phase
	     This option specifies whether the package will be recompressed, or whether
	     Systems Management Server will use the already compressed package (if the
	     package has been sent before).
	
	   - Distribute Phase
	     With this option, you can specify what servers will receive the package;
	     for example, default servers or a machine group. You can also select
	     whether you need to redistribute the package.
	
	   - Run Phase
	     With this option, you can specify the client pieces. That is, you can
	     specify when the package should be offered to the client, whether the job
	     will be mandatory, or when it should expire (no longer offered).
	
	  You can leave all of these settings at their respective default values and
	  click OK.
	
	2. You should now see three buttons: Details (the screen you were just in),
	  Schedule, and Status. Click Schedule.
	
	3. Specify options such as when the job will be activated, what priority the job
	  has, and whether you want the job to repeat.
	
	4. After specifying any options you want, click OK until you return to the
	  Packages window.
	
	Your job is now properly configured.
	
	How to Activate the Job
	-----------------------
	
	After you specify all the job details in the Job Details window and click OK,
	Systems Management Server creates a Pending job. Systems Management Server will
	activate the job at its next watchdog cycle.
	
	What to Do at the Client Computer to Run the Software
	-----------------------------------------------------
	
	1. Before sending the package, install the client as a Systems Management Server
	  client.
	
	2. Send the package to the client.
	
	3. After the package has been distributed, use Package Command Manager (PCM) on
	  the client to run the package.
	
	REFERENCES
	==========
	
	Software Distribution is discussed in detail in Chapters 5 and 6 of the "Systems
	Management Server Administrator's Guide," as well as Chapter 3 of the
	"BackOffice Resource Kit I."
	
	Additional query words: prodsms execute dist pkg
	
	======================================================================
	Keywords          : kbsms120 kbPCM 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
