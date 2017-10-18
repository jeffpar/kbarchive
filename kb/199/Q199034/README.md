---
layout: page
title: "Q199034: Remote Control Cannot Connect If 3Com Connectivity Utility Run"
permalink: kb/199/Q199034/
---

## Q199034: Remote Control Cannot Connect If 3Com Connectivity Utility Run

	Article: Q199034
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Remote Control cannot connect to a client if the 3Com network interface card
	(NIC) utility is run and an error occurs.
	
	If you have connection problems with remote control and decide to use the 3Com
	utility to run tests on the network card, the client computer will become
	unreachable to a request for future remote control sessions.
	
	This behavior can be quite confusing. You were able to remote control the client
	before the utility was run, but not after. The client has most of its network
	functionality back after the utility has been shut down; remote control is not
	available.
	
	CAUSE
	=====
	
	The 3Com utility holds the remote control port open and does not let it go until
	the compputer is restarted.
	
	WORKAROUND
	==========
	
	Restart the client computer to regain remote control functionality.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.2 and 2.0. This problem will not be corrected.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
