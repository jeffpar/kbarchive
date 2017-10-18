---
layout: page
title: "Q182916: SNA Server Using Twinax to IBM System 36 Is Not Supported"
permalink: kb/182/Q182916/
---

## Q182916: SNA Server Using Twinax to IBM System 36 Is Not Supported

	Article: Q182916
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SNA Server does not support Twinax connections to an IBM System 36
	(S/36) or Advanced System 36 (AS/36).
	
	MORE INFORMATION
	================
	
	The System 36 and Advanced System 36 only support LU 7 communications over a
	Twinax connection. Microsoft SNA Server does not support the LU 7 protocol. SNA
	Server supports LU6.2 when communicating with a S/36, AS/36, and AS/400.
	
	SNA Server can connect to an S/36 using Token Ring and synchronous data link
	control (SDLC), but cannot connect using Ethernet because it is not available on
	an S/36. Ethernet connectivity is supported with an Advanced System 36, which
	also supports Token Ring, SDLC, and Twinax.
	
	The IBM product(s) discussed here are manufactured by International Business
	Machines Corp. (IBM), a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
