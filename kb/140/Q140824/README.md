---
layout: page
title: "Q140824: RUI FI RH Bit Modified by SNA Server"
permalink: kb/140/Q140824/
---

## Q140824: RUI FI RH Bit Modified by SNA Server

	Article: Q140824
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
	
	A node should always set the FI bit in the Request Header (RH) of a response
	sent by FMI and RUI applications when the original FMD request also had the FI
	bit set (even when the application explicitly cleared it).
	
	The SNA Server node uses the RH from the original FMD request to generate the RH
	of the response, setting the FI bit in the response if it was set in the
	original request.
	
	
	CAUSE
	=====
	
	This is contrary to the SNA Formats, which states that the FI must not be set on
	FMD +responses. This fix ensures that the FI bit is cleared before a response to
	an FMD request is sent.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, SNASERVR.EXE and TRCSERVR.EXE, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 FI FMD RH
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
