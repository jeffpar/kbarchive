---
layout: page
title: "Q173073: SMS: Package Is Currently Being Installed in the Background"
permalink: kb/173/Q173073/
---

## Q173073: SMS: Package Is Currently Being Installed in the Background

	Article: Q173073
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsms120 kbsms120bug kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under various circumstances, you may see a message box titled Package Command
	Manager Service that contains the following text:
	
	  A package is currently being installed in the background. This is routine,
	  however please wait until it has completed before starting any new packages.
	
	CAUSE
	=====
	
	This message appears when PCMWIN32 fails to get control of the semaphore from
	PCMSVC32. This message usually appears when PCMSVC32 is processing a job and
	PCMWIN32 tries to go through its normal polling cycle. This message may also
	appear if a user tries to start PCMWIN32 manually while PCMSVC32 is processing a
	job. Note that there are reports of this message appearing when PCMSVC32 was not
	processing a job. Many of these reports seem to indicate that underlying
	networking problems or unavailable Systems Management Server logon servers cause
	this message to appear.
	
	The message could also be caused when PCMWIN32 reaches its polling cycle and
	PCMSVC32 is also querying the instruction file on the logon server. In this
	case, even though no software is being installed, as the message states, the
	background task has control of the semaphore; because PCMWIN32 is blocked from
	access, it displays the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Many people have requested that the message referenced in the SYMPTOMS section
	of this article be completely removed or that the ability to turn the message
	off and on by using a registry switch be included. The message serves a very
	useful purpose and should not be removed without carefully considering the
	ramifications. Changes were made to Pcmsvc32.exe, so that the semaphore is only
	used when necessary. Pcmsvc32.exe only takes ownership of the mutex after a
	Systems Management Server logon server has been validated. This change should
	prevent the message from displaying when underlying networking problems occur or
	the Systems Management Server logon servers are unavailable.
	
	
	Additional query words: prodsms smspcm launch pcm prompt
	
	======================================================================
	Keywords          : kbnetwork kbsms120 kbsms120bug kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
