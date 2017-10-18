---
layout: page
title: "Q173388: SMS: PCM Does Not Run Mandatory Jobs in Date/Time Order"
permalink: kb/173/Q173388/
---

## Q173388: SMS: PCM Does Not Run Mandatory Jobs in Date/Time Order

	Article: Q173388
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When several mandatory jobs are queued up and due at a certain time (for
	example, at 9:30 A.M.) and a user logs on to the Windows NT Workstation computer
	at a later time (suppose 9:45 A.M.), PCMWIN32 runs the jobs correctly, but it
	does not take the jobs in order of mandatory time. The same behavior affects
	PCMSVC32 when a server or a workstation is turned on after the mandatory date
	and time.
	
	All versions of the Package Command Manager (PCM, which includes PCMDOS,
	PCMWIN16, PCMWIN32, and PCMSVC32) are affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: pcm pcmwin32 pcmsvc32 mandatory prodsms
	
	======================================================================
	Keywords          : kbusage kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
