---
layout: page
title: "Q149801: UNBIND RSP Is Not Passed from SNA Server to a Downstream PU"
permalink: kb/149/Q149801/
---

## Q149801: UNBIND RSP Is Not Passed from SNA Server to a Downstream PU

	Article: Q149801
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
	
	A device set up as a Downstream PU from an SNA Server may hang when you try to
	disconnect a session. Tracing on the Downstream PU will show the PU waiting on
	an UNBIND response from the host system.
	
	CAUSE
	=====
	
	SNA Server is not passing the UNBIND response from the host to the downstream
	PU.
	
	RESOLUTION
	==========
	
	A hotfix is available from Microsoft Product Support Services. Files that have
	been modified to correct this problem are Snaservr.exe and Trcservr.exe.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sna nt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
