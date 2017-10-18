---
layout: page
title: "Q122320: Problems with Client PCMWIN16 and Mandatory Jobs"
permalink: kb/122/Q122320/
---

## Q122320: Problems with Client PCMWIN16 and Mandatory Jobs

	Article: Q122320
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	1.00 1.10
	WINDOWS
	kbnetwork kbbug1.00 kbbug1.10 kbbug1.20
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the client PCMWIN16 pops up with multiple new pending jobs and one
	mandatory job, the program counts down and executes the mandatory job only and
	closes the window. The remaining pending jobs do not run until additional new
	jobs become pending.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Have the user log off and log on again.
	
	  -or-
	
	- Go to the Systems Management Server Client program group and run the Package
	  Command Manager icon to force PCM to refresh.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
