---
layout: page
title: "Q168546: Access Violation May Occur After Upgrading to 3.0 SP1"
permalink: /kb/168/Q168546/
---

## Q168546: Access Violation May Occur After Upgrading to 3.0 SP1

	Article: Q168546
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After upgrading SNA Server 3.0 with Service Pack 1, the SnaBase or SNA Server
	service may fail unexpectedly with an access violation or SNA Server may
	unexpectedly stop accepting new client connections. This problem can occur if
	SNA clients are connecting to the server over MS Networking (named pipes) or
	Netware IPX/SPX. A Drwtsn32.log entry may be generated when this failure occurs,
	indicating a FAULT in the top-level routine along with the following stack-back
	trace (which may vary):
	
	- snalm!QueueBuffer
	
	  or
	
	- ntdll!RtlAllocateHeap
	  snalm!GetReadBuffer
	  snalm!AceptConnection
	  snadmod!AcceptClientConnection
	  snadmod!DMODServiceThread
	
	  or
	
	- ntdll!RtlDestroyHeap
	  ntdll!RtlFreeHeap
	  snalm!CleanupConnection
	  snalm!CloseConnection
	  snadmod!CloseLtab
	  snadmod!IoThread
	
	  or
	
	- security!NtLmSspControl
	  security!DeleteSecurityContext
	  snalm!CleanupSecurityContext
	  snalm!CloseConnection
	  snadmod!sepdnhpe
	
	If new clients cannot connect, the SNA Server or SnaBase internal trace may
	indicate the following error after accepting a new client connection:
	
	  ACCPT HeapAlloc failed, rc 0
	
	CAUSE
	=====
	
	SnaBase or SNA Server memory local heap corruption is occurring within the IO
	completion port handling of named pipe or IPX/SPX clients.
	
	RESOLUTION
	==========
	
	The SNA Server has been updated to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SNA Server version
	3.0 Server Pack 1. This problem was corrected in the latest SNA Server version
	3.0 U.S. Service Pack. For information on obtaining this Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbBug kbISS 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
