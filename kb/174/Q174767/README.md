---
layout: page
title: "Q174767: SMS: Program Group Control Does Not Warn User If Not Logged On"
permalink: kb/174/Q174767/
---

## Q174767: SMS: Program Group Control Does Not Warn User If Not Logged On

	Article: Q174767
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run a shared network application delivered by Program Group
	Control (PGC) from a client computer running Windows for Workgroups, the user is
	not notified if he or she is not logged on to the network. For PGC to function
	properly, a user must be logged on to the network.
	
	Instead of an appropriate error message, the following message appears:
	
	  Could not start <application>. The shared package could not be found.
	  Has it been sent?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server 1.2 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms execute
	
	======================================================================
	Keywords          : kbusage kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
