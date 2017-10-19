---
layout: page
title: "Q166240: TEST_RTS_AND_POST Doesn't Return After Host or LAN Failure"
permalink: /kb/166/Q166240/
---

## Q166240: TEST_RTS_AND_POST Doesn't Return After Host or LAN Failure

	Article: Q166240
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When calling the APPC TEST_RTS_AND_POST function on an SNA Server 3.0 Windows or
	Win32 client platform, the TEST_RTS_AND_POST event is never signaled if any of
	the following conditions occur:
	
	  The SNA connection fails.
	
	  -or-
	
	  An UNBIND occurs on the LU6.2 session.
	
	  -or-
	
	  The LAN session between the client and server is lost.
	
	CAUSE
	=====
	
	The TEST_RTS_AND_POST API function was not properly returning to the calling
	application when the SNA connection, session, or LAN outage occurred.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. To resolve
	this problem, obtain the hotfix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
