---
layout: page
title: "Q171934: Cancelling SNA Windows 95 Logon Causes Sbpuinit() rc = 563"
permalink: kb/171/Q171934/
---

## Q171934: Cancelling SNA Windows 95 Logon Causes Sbpuinit() rc = 563

	Article: Q171934
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an SNA Server 3270 EIS application calls sbpuinit() on a Windows 95 client
	configured to use a non-named pipe transport (for example, TCP/IP sockets,
	IPX/SPX, or Banyan IP), the SNA client software displays a user logon dialog
	box. If the user cancels this logon dialog box, the sbpuinit() function returns
	incorrectly with error 563 (DMDSTFL, or "service table full"), instead of error
	625 (DMNONAP, or "NAP not up when starting service").
	
	These error codes are documented in the SNA Server Emulator Interface Guide and
	\SDK\INC\FMI.H include file, which ships on the SNA Server compact disc.
	
	CAUSE
	=====
	
	The SNA Server Windows 95 Snadmod.dll does not retrieve the correct error to the
	sbpuinit() function when the logon dialog box is cancelled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Server Windows 95 client
	version 3.0 and 3.0 Service Pack 1 (SP1). This problem was corrected in the
	latest SNA Server version 3.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The updated Windows 95 client modules are snakrnl.dll and snadmod.dll.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
