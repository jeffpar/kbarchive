---
layout: page
title: "Q153604: PGC Gives User Group Error If Out of Memory"
permalink: kb/153/Q153604/
---

## Q153604: PGC Gives User Group Error If Out of Memory

	Article: Q153604
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If Program Group Control (PGC) runs out of memory when it attempts to allocate a
	buffer to determine which groups the user belongs to, then the following error
	message appears:
	
	  Failed to connect to SMS network server. Cannot determine which user groups
	  the user belongs to...
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Systems Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms appctl16 appctl32 appctrl appstart global
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
