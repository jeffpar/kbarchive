---
layout: page
title: "Q174933: SMS: PCM Service Job Does Not Log Failure If Not Mandatory"
permalink: kb/174/Q174933/
---

## Q174933: SMS: PCM Service Job Does Not Log Failure If Not Mandatory

	Article: Q174933
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the "Mandatory After" check box is not selected, System Background Jobs are
	never executed by Package Command Manager (PCM) Service and no failure events
	are logged in the Pacman.log file or the Windows NT Application Event log.
	Package Command Manager Service (Pcmsvc32.exe) should log a failure event for
	the job and also mark its execution as failed, when this condition occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If an Administrator selects "System Background Task" when creating the package
	but forgets to also select "Mandatory After", this job is never executed. A job
	must be marked "Mandatory After" and the package must have "System Background
	Task" selected if the Administrator needs Package Command Manager Service
	(PCMSVC32) instead of Package Command Manager Application (PCMWIN32) to execute
	it.
	
	With Service Pack 3 version of Pcmsvc32 installed, jobs not marked as "Mandatory"
	will be executed by the PCM service if the following conditions are met:
	
	1. "UserInputRequired=FALSE" is defined in the PDF for the packaged Command Line
	  sent by the Job. (this can only be defined in the PDF)
	
	2. The package Command Line sent by the Job has "System (Background) Task"
	  checked. This can also be set in the PDF with "SystemTask=TRUE".
	
	3. The Job's Offer Time has been reached.
	
	Additional query words: prodsms 1.20 rc
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
