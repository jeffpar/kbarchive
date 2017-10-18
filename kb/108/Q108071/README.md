---
layout: page
title: "Q108071: WinAPPCCancelAsyncRequest Never Returns WAPPCALREADY (0xF000)"
permalink: kb/108/Q108071/
---

## Q108071: WinAPPCCancelAsyncRequest Never Returns WAPPCALREADY (0xF000)

	Article: Q108071
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an APPC application issues WinAPPCCancelAsyncRequest() after the
	asynchronous routine has completed, WAPPCINVALID (0xF001) is returned instead of
	WAPPCALREADY (0xF000). The SNA Server APPC Programmer's Guide states that
	WAPPCALREADY should be returned in this instance.
	
	CAUSE
	=====
	
	WinAPPCCancelAsyncRequest is not properly returning the WAPPCALREADY error code
	as documented.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 corrects this problem, so that
	WinAPPCCancelAsyncRequest now returns WAPPCALREADY if an asynchronous routine is
	being cancelled has already completed.
	
	Microsoft has updated the following files to correct this problem:
	
	  Windows NT:  <snaroot>\SYSTEM\WAPPC32.DLL
	  Windows 95:  <win95root>\SYSTEM\WAPPC32.DLL
	  Windows 3.x: <winroot>\SYSTEM\WINAPPC.DLL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
