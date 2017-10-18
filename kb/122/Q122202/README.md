---
layout: page
title: "Q122202: PCM and Archiving Unexecuted Mandatory Jobs"
permalink: kb/122/Q122202/
---

## Q122202: PCM and Archiving Unexecuted Mandatory Jobs

	Article: Q122202
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) detects a mandatory job, it is possible for
	someone to archive the job while the 5 minute countdown timer is still running.
	If this happens, there are several resulting problems which prevent PCM from
	being able to execute the job.
	
	WORKAROUND
	==========
	
	If someone archives a mandatory job just before execution, delete the
	PCMHIST.REG file on the client computer. This will force PCM to put the job into
	the pending commands folder and re-enable the job for execution.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
