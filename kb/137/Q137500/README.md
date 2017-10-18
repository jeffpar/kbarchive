---
layout: page
title: "Q137500: SLI Interface Returns Truncated Data on SSCP-LU Session"
permalink: kb/137/Q137500/
---

## Q137500: SLI Interface Returns Truncated Data on SSCP-LU Session

	Article: Q137500
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
	
	All messages received on the SSCP-LU session via SLI_OPEN or SLI_RECEIVE API
	calls are truncated to 256 bytes of data. The SLI_OPEN returns with AP_OK while
	SLI_RECEIVE returns the following error message:
	
	  LUA_DATA_TRUNCATED.
	
	This problem occurs with the SNA Server Windows 3.x and Win32 SLI API interfaces.
	
	CAUSE
	=====
	
	This is a problem in the SLI library. It is limiting the size of SLI_RECEIVEs on
	the normal SSCP flow to 256 bytes, whereas many hosts send larger RUs than this
	on the SSCP-LU session.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, WINSLI.DLL and WINSLI32.DLL, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 LUA SLI_OPEN SLI_RECEIVE LUA_DATA_TRUNCATED
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
