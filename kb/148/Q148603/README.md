---
layout: page
title: "Q148603: Invalid Sense Code Returned In APPC Allocate Response"
permalink: /kb/148/Q148603/
---

## Q148603: Invalid Sense Code Returned In APPC Allocate Response

	Article: Q148603
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
	
	If the SNA Server connection (supporting the APPC LU's being requested) does not
	start for any reason, the SNA Server returns an invalid sense code in the
	SENSE_DATA field. However, if the remote system receives an actual SNA sense
	code during the LU6.2 session activation, SNA Server returns the correct sense
	code in the [MC_]ALLOCATE response.
	
	
	CAUSE
	=====
	
	If a connection fails, the SNA Server service returns the value of an
	uninitialized variable to the APPC interface, instead of a valid sense code.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 2.11 Service Pack 1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna SP1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
