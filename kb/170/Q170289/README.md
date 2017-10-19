---
layout: page
title: "Q170289: DISPLAY or CNOS Calls Fail with UNEXPECTED_DOS_ERROR"
permalink: /kb/170/Q170289/
---

## Q170289: DISPLAY or CNOS Calls Fail with UNEXPECTED_DOS_ERROR

	Article: Q170289
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When calling the DISPLAY or CNOS functions on Windows NT (over the SNA Server
	Windows NT client software), these functions may eventually fail with the
	following error:
	
	  primary_rc = 0xF011 (UNEXPECTED_DOS_ERROR) secondary_rc = 593 (internal error
	  - maximum routing procs defined)
	
	NOTE: The 593 secondary return code is shown in decimal. This corresponds to a
	hexadecimal value of 0x251, or in Intel dword format, 0x51020000.
	
	CAUSE
	=====
	
	This problem can occur when an APPC application calls WinAPPCStartup and
	WinAPPCCleanup a number of times without being terminated. The APPC library
	registers an internal routing procedure for each call to WinAPPCStartup, but
	fails to deregister the routing procedure when the application calls
	WinAPPCCleanup. This causes the internal routing procedure table to fill,
	leading to the above error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 SP2,
	3.0, and 3.0 SP1. This problem was corrected in the latest SNA Server version
	3.0 U.S. Service Pack. For information on obtaining this Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SAS
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
