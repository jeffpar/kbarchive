---
layout: page
title: "Q189305: SMS: Packages Run at a Different Time Than Specified"
permalink: /kb/189/Q189305/
---

## Q189305: SMS: Packages Run at a Different Time Than Specified

	Article: Q189305
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending packages with Systems Management Server, you may notice that
	clients in another time zone run the package at a different time than what is
	specified in the Job Details window. Normally, the package should start on
	individual clients when the client's time is the same as or after the specified
	start time.
	
	CAUSE
	=====
	
	This problem occurs because Package Command Manager (PCM) has built-in support
	for daylight savings time, which causes it to change the execution time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: PCMSVC32 PCMWIN PCM execute DST
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
