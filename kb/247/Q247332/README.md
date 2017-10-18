---
layout: page
title: "Q247332: IBM PCOM 5250 Fails after a 3270/FMI Session Is Closed"
permalink: kb/247/Q247332/
---

## Q247332: IBM PCOM 5250 Fails after a 3270/FMI Session Is Closed

	Article: Q247332
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IBM Personal Communications (version 4.3) with the SNA 4.0 Windows
	95/98 client software or with the SNA 4.0 Windows NT client software, a 5250
	session stops responding or fails with a page fault after a 3270 session is
	closed. For example:
	
	  PCSCM caused an invalid page fault in module WAPPC32.DLL at 015f:6340e645
	
	The offset may vary depending on the version of the SNA Windows 95/98 or Windows
	NT client software being used.
	
	CAUSE
	=====
	
	If an application supports both a 3270/FMI session and an APPC or CPIC
	conversation from the same process, and closes the 3270/FMI session by calling
	the sbputerm() function, the SNA client incorrectly frees the SNADMOD client
	code while the APPC/CPIC application is still active.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not close the 3270 session if an APPC
	conversation is still active, or close the APPC conversation before the 3270
	session is closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	3.0, 4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
