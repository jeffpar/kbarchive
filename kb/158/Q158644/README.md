---
layout: page
title: "Q158644: SMS: Windows NT 4.0 Upgrade Job Repeats Continually"
permalink: /kb/158/Q158644/
---

## Q158644: SMS: Windows NT 4.0 Upgrade Job Repeats Continually

	Article: Q158644
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbPCM smspcmkbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 unattended upgrade will continually cycle through the
	installation process when sent as System Background task. Note that the upgrade
	installs correctly, but the job repeats infinitely.
	
	CAUSE
	=====
	
	This problem occurs when you run the upgrade as a System Background task and no
	user is logged on to the computer. The Package Command Manager (PCM) service
	fails to report a job completion status. Disabling this option will allow the
	upgrade to complete successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server version
	1.2. This problem was corrected in the latest Microsoft Systems Management
	Server version 1.2 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The upgrade will be performed correctly, but once it is done, the upgrade will
	start again. Sending the Windows NT 4.0 Service Pack (as a System Background
	task) works as expected, and does not display this problem.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbPCM smspcm kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
