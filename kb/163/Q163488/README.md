---
layout: page
title: "Q163488: SMS: PCM Processes .Ins File Only When .Ins File Is Modified"
permalink: /kb/163/Q163488/
---

## Q163488: SMS: PCM Processes .Ins File Only When .Ins File Is Modified

	Article: Q163488
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a job's Offer After and/or Mandatory After attributes are set to a time
	that arrives after the initial detection of the package's arrival to the
	workstation, Package Command Manager (PCM) does not display the package until
	one of the following two situations occurs:
	
	- PCM is restarted, requiring either a log off and subsequent log on, or a
	  restart of the computer.
	
	- Another package arrives, causing the .ins file to be changed.
	
	CAUSE
	=====
	
	This problem occurs because PCM only processes the .ins file when it detects
	that the file has been changed since its last polling cycle. If the .ins file
	has not been modified since it was last checked, PCM goes back to sleep.
	Therefore, any delayed instruction is not processed either until the file is
	modified by another job, or until PCM is restarted on a computer (causing PCM to
	process the file regardless of a change).
	
	WORKAROUND
	==========
	
	If the job has already been sent, and the computers are not available to log off
	and log back on, send a dummy package to the targeted computers to start the
	job.
	
	Otherwise, if you are sending new jobs, make sure the Offer After and/or
	Mandatory After dates are before the time the package instructions reach the
	workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
