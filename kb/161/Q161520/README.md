---
layout: page
title: "Q161520: SMS Doc Err: Help Indicates Use of Colons in Machine Path"
permalink: kb/161/Q161520/
---

## Q161520: SMS Doc Err: Help Indicates Use of Colons in Machine Path

	Article: Q161520
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbdocerr kbsmsAdmin smsadmin smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The online Help for the Job Details of a "Run Command on Workstation" job
	indicates that you should use colons to separate the site code, domain, and
	computer name of the Machine Path. However, using this syntax results in errors
	from the Systems Management Server Scheduler, and the job is not processed.
	
	WORKAROUND
	==========
	
	To work around this problem, use the pipe character (|) instead of the colon.
	For example, instead of this syntax
	
	     site:domain:computername
	
	Use:
	
	     site|domain|computername
	
	MORE INFORMATION
	================
	
	Using the incorrect syntax causes the following event in the application log of
	the site server:
	
	  Event ID: 319 Source: SMS
	
	  The job encountered an error trying to process the specified machine path
	  (REV:REVDOM:NTWKS) and therefore cannot generate the list of target
	  workstations for the job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr kbsmsAdmin smsadmin smsdocerr 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
