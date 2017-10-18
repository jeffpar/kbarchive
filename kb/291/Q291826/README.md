---
layout: page
title: "Q291826: PRB: 16-Bit SNA Client Fails Under Windows Millennium Edition"
permalink: kb/291/Q291826/
---

## Q291826: PRB: 16-Bit SNA Client Fails Under Windows Millennium Edition

	Article: Q291826
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport _IK kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 kbsna40
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the 16-bit Windows client for SNA Server is used in a Microsoft Windows
	Millennium Edition environment, various errors may occur, including an incorrect
	listing of resources, partial data transfers, or other problems related to
	incorrect parsing of the data portion of an IP packet.
	
	In addition, an error in Iphlpapi.dll may also be posted.
	
	CAUSE
	=====
	
	This problem may occur because the Internet Protocol Helper API component
	(Iphlpapi.dll) was rebuilt for Windows Millennium Edition, with transport
	capabilities that contain a definition that resulted in a stack overflow
	condition.
	
	RESOLUTION
	==========
	
	For resolution of this problem, see the following Microsoft Knowledge Base
	article:
	
	  Q279866 Iphlpapi.dll Error Message with a 16-Bit Windows Sockets Program
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport _IK kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 kbsna300 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
