---
layout: page
title: "Q171083: SnaExp.exe Access Violation in CshrMemPool()"
permalink: /kb/171/Q171083/
---

## Q171083: SnaExp.exe Access Violation in CshrMemPool()

	Article: Q171083
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SnaExp.exe access violation in CShrMemPool() occurs during shutdown of SNA
	Server Manager.
	
	
	CAUSE
	=====
	
	Closing SNA Server Manager may occasionally cause an access violation to occur
	when it tries to access a pointer that is not available to ManageRoot.
	
	RESOLUTION
	==========
	
	SNA Server has been updated to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SNA Server version
	3.0 Server Pack 1. This problem was corrected in the latest SNA Server version
	3.0 U.S. Service Pack. For information on obtaining this Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
