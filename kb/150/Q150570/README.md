---
layout: page
title: "Q150570: Fixes to SNA Server 2.11 SP1 Barr Channel Link Service"
permalink: kb/150/Q150570/
---

## Q150570: Fixes to SNA Server 2.11 SP1 Barr Channel Link Service

	Article: Q150570
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the SNA Server 2.11 Service Pack 1 Barr Channel Link Service, the
	following can occur:
	
	- LUs do not activate after the connection is active.
	
	
	- A connection using the Barr Systems, Inc. Link service does not recover from
	  system reset. This is commonly seen after host IPL. The connection must be
	  stopped and restarted in order for the connection be go active.
	
	
	RESOLUTION
	==========
	
	A flow control problem that occurred during LU activation has been fixed. All
	LUs now become active at startup.
	
	Also, the link service automatically recovers and activates the link.
	
	Barr Channel Link Service version #9601 corrects both of these problems. Contact
	Barr Systems, Inc. at (800) 227-7797 for this driver update. A workaround is to
	revert to the SNA Server 2.11 version of Barr Channel Link Service and driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11.sp1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
