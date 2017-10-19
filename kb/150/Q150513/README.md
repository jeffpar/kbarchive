---
layout: page
title: "Q150513: Multiple SLI_OPEN()s Can Cause SESSION_ALREADY_OPEN"
permalink: /kb/150/Q150513/
---

## Q150513: Multiple SLI_OPEN()s Can Cause SESSION_ALREADY_OPEN

	Article: Q150513
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a multi-threaded LUA application issues more than one SLI_OPEN() before the
	first SLI_OPEN() returns, the result is the following:
	
	SLI_OPEN response
	  UNSUCCESSFUL - SESSION_ALREADY_OPEN
	
	  primary return code:   0014      (LUA_UNSUCCESSFUL)
	  secondary return code: 00000035  (LUA_SESSION_ALREADY_OPEN)
	
	This SLI_OPEN response will contain an LUA_luname that had not been opened using
	an SLI_OPEN().
	
	NOTE: The LUA_luname field is part of the VCB (verb control block) for the
	SLI_OPEN() and is explained in the SNA Server [ASCII 147]Programmer's
	Reference[ASCII 148] on page 88.
	
	CAUSE
	=====
	
	There is a problem in the SNA Server SLI library's algorithm to match up an SLI
	application VCB with its owning session control block. This can cause the SLI
	library to complete the wrong SLI call if two SLI_OPENs are pending at the same
	time.
	
	RESOLUTION
	==========
	
	A update to the SNA Server SLI interface corrects this problem by properly
	matching the SLI application's verb control block with the correct session
	control block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.10, 2.11, and 2.11.sp1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
