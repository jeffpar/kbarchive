---
layout: page
title: "Q166484: SNA Server 3.0 Hangs in Stopping Status on Windows NT 4.0 SP3"
permalink: kb/166/Q166484/
---

## Q166484: SNA Server 3.0 Hangs in Stopping Status on Windows NT 4.0 SP3

	Article: Q166484
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0; winnt:4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following problem occurs when using SNA Server 3.0 on Windows NT 4.0 Service
	Pack 3 (SP3). When stopping the SNA Server service, the service stops responding
	(hangs) in a Stopping status within SNA Server Manager.
	
	CAUSE
	=====
	
	The Dbgtrace.dll file, which is loaded by SNA Server 3.0 to support asynchronous
	tracing (even when tracing is not enabled), wasn't properly terminating during
	process detach processing, causing the SNA Server service to hang during
	shutdown.
	
	This problem was observed after upgrading to Windows NT 4.0 SP3, but was not
	observed on earlier service packs.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0; winnt:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
