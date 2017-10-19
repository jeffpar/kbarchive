---
layout: page
title: "Q126396: SNA Server 3270 LU is Available, But No Sign On Screen Appears"
permalink: /kb/126/Q126396/
---

## Q126396: SNA Server 3270 LU is Available, But No Sign On Screen Appears

	Article: Q126396
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a positive response to an ACTLU (ACTLU +RSP), the SNA Server service
	submits a notify message to the host indicating that the LU can be activated.
	The SNA Server service waits for a response to the message by default. However,
	some VTAM/NCP versions do not respond properly to notify messages, causing 3270
	LU session activation problems with SNA Server.
	
	If the host system does not support notify messages, when you attempt to bind
	your computer to an LU using a 3270 emulator, the host sign on screen does not
	appear. The administrator can run SNA Server Administrator and observe that the
	LU status is Available.
	
	If you run SNATRACE and turn on SNA Server SNA Format or Data Link Control
	tracing, the following message sequence occurs:
	
	- ACTPU RQD
	
	- ACTPU +RSP
	
	<Other messages>
	
	- ACTLU RQD
	
	- ACTLU +RSP
	
	- NOTIFY RQD
	
	- No NOTIFY +RSP is received
	
	RESOLUTION
	==========
	
	To correct this problem, add the following registry entry using REGEDT32, as
	described in Appendix C of the SNA Server 2.1 "Reference Guide" (page 198):
	
	  \HKey_Local_Machine
	     \System
	        \CurrentControlSet
	           \Services
	              \SNAServr
	                 \Parameters\NONOTIFYRSP:REG_SZ:YES
	
	Stop and start the SNA Server service so the change can take effect.
	
	Additional query words: prodsna admin signon
	
	======================================================================
	Keywords          : kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
