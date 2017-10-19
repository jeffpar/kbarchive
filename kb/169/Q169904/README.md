---
layout: page
title: "Q169904: Shared Folders Gateway May Cause Trap 0x1E in Ntoskrl.exe"
permalink: /kb/169/Q169904/
---

## Q169904: Shared Folders Gateway May Cause Trap 0x1E in Ntoskrl.exe

	Article: Q169904
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you copy large amounts of data simultaneously to and from an AS400 using
	the SNA Server Shared Folders Gateway installable file system, it is possible to
	get a trap 0x1E in Ntoskrnl.exe.
	
	CAUSE
	=====
	
	The SNA Server installable file system driver (SFFSD.SYS) is not initializing
	the FastIoDispatch pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	This problem has only been seen during a heavy stress test within Microsoft
	while copying the equivalent of 3 GB of data and over 40,000 files.
	
	Additional query words: shared folders sfgw blue screen
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
