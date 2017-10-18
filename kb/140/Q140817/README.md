---
layout: page
title: "Q140817: AFTP Client Does Not call WinCPICCleanup()"
permalink: kb/140/Q140817/
---

## Q140817: AFTP Client Does Not call WinCPICCleanup()

	Article: Q140817
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Applications using the SNA Server AFTP API do not close when there are no more
	active connections open to it.
	
	CAUSE
	=====
	
	The AFTP API library does not call WinCPICCleanup() when all the applications
	using it terminate. However, it does call WinCPICStartup() when an application
	first calls it.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, AFTP.EXE and AFTPAPI.DLL, to correct this
	problem.
	
	The library is now changed to call WinCPICCleanup() when an application has no
	more AFTP connections open to it.
	
	A change has also been made to the AFTP client application to prevent it from
	opening a new connection every time it closes one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
