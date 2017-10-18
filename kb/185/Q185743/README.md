---
layout: page
title: "Q185743: Performance Monitor Errors When Running on SNA Server 4.0"
permalink: kb/185/Q185743/
---

## Q185743: Performance Monitor Errors When Running on SNA Server 4.0

	Article: Q185743
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or both of the following may occur when you run Performance Monitor on a
	Microsoft SNA Server version 4.0 system:
	
	- The application event log may show events that indicate that Snaperf.dll
	  generated an exception error or returned an invalid result. Note that this
	  has been seen only on multi-processor systems.
	
	  -or-
	
	- The application event log may include a message similar to the following:
	
	  Event ID: 1010
	  Source: Perflib
	  Description: The Collect Procedure for the "SnaServr" service in DLL
	  "...<snaroot>\system\snapeSnaServr" generated an exception or returned
	  an invalid status. Performance data returned by counter DLL will be not be
	  returned in Perf Data Block. Exception or status code returned is DWORD 0.
	
	CAUSE
	=====
	
	The Performance Monitor DLL for SNA Server does not correctly keep track of the
	number of sessions that are reporting response time monitor (RTM) data. In
	addition, there is a problem combining the per session byte counts into the per
	LU reports that are being written to Performance Monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Perfmon
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
