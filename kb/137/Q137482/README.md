---
layout: page
title: "Q137482: LUA Program Receives Host Sign-On Screen Twice and then Hangs"
permalink: /kb/137/Q137482/
---

## Q137482: LUA Program Receives Host Sign-On Screen Twice and then Hangs

	Article: Q137482
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
	
	When you start your LUA program, the SSCP Welcome message screen appears twice,
	and the LUA program seems to hang.
	
	CAUSE
	=====
	
	Under certain timing conditions, when an LUA session is closed (with an
	SLI_CLOSE statement) and immediately reopened (with an SLI_OPEN statement) over
	a fast link, SNA Server may incorrectly resend the host SSCP welcome message a
	second time to the LUA program. As a result the LUA program may hang.
	
	The following message flow causes this problem:
	
	  LUA Program    SNA Server      Host
	  -----------------------------------------------------
	                                <- UNBIND
	                UNBIND +RSP ->
	                NOTIFY(SLU disabled) ->
	 SLI_CLOSE ->
	 SLI_OPEN ->
	                                <- SSCP welcome message
	                <- SLI_OPEN(SSCP welcome message)
	                                <- NOTIFY +RSP
	                NOTIFY(SLU enabled) ->
	                                <- SSCP welcome message
	 SLI_RECEIVE ->
	                <- SLI_RECEIVE (SSCP welcome message)
	                                <- NOTIFY +RSP
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to SNA Server version 2.11 and install the
	updated file SNASERVR.EXE.
	
	To work around this problem, you can put a small delay in the application between
	the SLI_CLOSE completing and issuing the new SLI_OPEN command.
	
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
	
