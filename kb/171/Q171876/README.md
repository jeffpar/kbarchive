---
layout: page
title: "Q171876: SNA Server Traps After Receiving BIND +RSP With Invalid Data"
permalink: kb/171/Q171876/
---

## Q171876: SNA Server Traps After Receiving BIND +RSP With Invalid Data

	Article: Q171876
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An A Server access violation (0xC0000005) may occur in routine s1pnsuns() if an
	AS/400 responds with an invalid BIND +RSP.
	
	
	CAUSE
	=====
	
	The SNA Server service (Snaservr.exe) does not parse the user data in the BIND
	+RSP correctly. An invalid BIND +RSP from AS/400 may lead to an access
	violation.
	
	RESOLUTION
	==========
	
	A hotfix to SNA Server for Windows NT, version 2.11 (post SP2) and version 3.0
	(post SP1) is available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 Service
	Pack 1, 3.0, and 3.0 Service Pack 1 (SP1). This problem was corrected in the
	latest SNA Server version 3.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1,3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
