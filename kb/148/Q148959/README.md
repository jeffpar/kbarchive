---
layout: page
title: "Q148959: WINSLI32.DLL Access Violation with Visual C++ Debugger"
permalink: kb/148/Q148959/
---

## Q148959: WINSLI32.DLL Access Violation with Visual C++ Debugger

	Article: Q148959
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create and debug a 32-bit Windows application using the SNA Server
	LUA/SLI API and Visual C++ 2.0 or 4.x, a WINSLI32.DLL Access Violation error
	message appears.
	
	
	CAUSE
	=====
	
	This problem occurs due to the SNA Server SLI interface attempting to free a
	previously freed session control block.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 and 2.11 Service Pack 1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
