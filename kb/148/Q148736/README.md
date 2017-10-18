---
layout: page
title: "Q148736: SNA EIS Guide:Open(SSCP)Error 0x1009, 0x100B Not Documented"
permalink: kb/148/Q148736/
---

## Q148736: SNA EIS Guide:Open(SSCP)Error 0x1009, 0x100B Not Documented

	Article: Q148736
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Section 5.2.1 of the SNA Server 3270 Emulator Interface Specification (EIS)
	lists Open(SSCP) errors that SNA Server may return to an emulator when it opens
	a 3270 session. However, the following Error Code 1 errors are not listed in
	this section:
	
	  X'1009': The local link service for the connection is active but the
	  connection itself is not active. The 3270 emulator should report to the user
	  that the connection is not active, or try reposting a new Open(SSCP) request.
	
	
	  X'100B': The connection is in the process of activating as the result of
	  another Open(SSCP) client request, manual administrator activation, or
	  automatic recovery from a previous connection failure. The 3270 emulator
	  should report to the user that the connection is activating, and try
	  reposting a new Open(SSCP) request.
	
	
	CAUSE
	=====
	
	These errors were inadvertently omitted from the SNA Server 3270 EIS manual.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server. A future
	update to the SNA Server Emulator Interface Specification will correct this
	problem.
	
	Additional query words: prodsna 2.00 2.10 2.11 SP1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	
