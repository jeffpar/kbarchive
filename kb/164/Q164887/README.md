---
layout: page
title: "Q164887: SMS: Upgrading Windows NT with PCM Service May Constantly Repeat"
permalink: kb/164/Q164887/
---

## Q164887: SMS: Upgrading Windows NT with PCM Service May Constantly Repeat

	Article: Q164887
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
	
	When run from the Package Command Manager (PCM) service (Pcmsvc32.exe), the
	Ntencap.exe utility, which is used in conjunction with Windows NT operating
	system upgrades, is unable to detect that a system is shutting down and
	restarting. As a result, the mandatory job never has a chance to be marked
	complete (it is actually marked failed by Ntencap). The next time the PCM
	service starts, it attempts to run the same package again.
	
	Therefore, all operating system upgrade jobs requiring a shut down and restart of
	client computers running the PCM service under Windows NT constantly repeat.
	
	CAUSE
	=====
	
	Ntencap.exe waits to receive a shut down message. However, when running in a
	service context, Ntencap.exe never receives that shut down message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
