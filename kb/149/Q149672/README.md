---
layout: page
title: "Q149672: PCMSVC32 Reports Incorrect Job Status for Completed Jobs"
permalink: kb/149/Q149672/
---

## Q149672: PCMSVC32 Reports Incorrect Job Status for Completed Jobs

	Article: Q149672
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Package Command Manager (PCMSVC32) for Windows NT may report an invalid job
	status when a job has been completed. Instead of being designated "complete,"
	the job status is given as "retrying."
	
	The following information is taken from the Pacman.log file:
	
	>>> The process handle is #20
	>>> Execution error #20 detected.
	>>> Flagging this process as bad with handle #-1
	   Ending LaunchScript..................
	   Package executed.
	   Monitoring the job.
	   Job completed.
	   Reporting job status.
	   Beginning ReportOnProcess...........
	>>> An error was detected while attempting to run the job.
	
	CAUSE
	=====
	
	This problem occurs when a process handle is less than 32.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
