---
layout: page
title: "Q165147: SMS: PCMWin32 Should Ignore Mandatory Background Jobs"
permalink: kb/165/Q165147/
---

## Q165147: SMS: PCMWin32 Should Ignore Mandatory Background Jobs

	Article: Q165147
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a Workstation package that has "System (Background) Task" enabled
	with a Run Command on Workstation job, the Package Command Manager (PCM)
	executable (Pcmwin32.exe) fails to ignore the background job and runs it. The
	PCMWin32 executable should not run this package, and should not display a window
	with an option to run the job.
	
	The "System (Background) Task" option is used to identify a package command line
	that will be run only by the PCM service (Pcmsvc32.exe). If this option is
	enabled, and the Run Command on Workstation job has a mandatory time defined,
	only the PCM service should run the package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sms prodsms pcm
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
