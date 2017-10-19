---
layout: page
title: "Q164329: SMS: System Fails to Restart After Applying Windows NT 4.0 SP2"
permalink: /kb/164/Q164329/
---

## Q164329: SMS: System Fails to Restart After Applying Windows NT 4.0 SP2

	Article: Q164329
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Package Command Manager (PCM) service (Pcmsvc32.exe) to apply
	Windows NT Server 4.0 Service Pack 2 to a server, the system stops responding
	when it shuts down at the end of applying the service pack.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- After the service pack is applied, shut down and restart the system from the
	  console.
	
	  -or-
	
	- Use the Package Command Manager executable (Pcmwin32.exe). However, this
	  method requires that a user be logged on to the system, in order to start the
	  Package Command Manager program.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server version 1.2 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms prodnt 4.00 sp2
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	
