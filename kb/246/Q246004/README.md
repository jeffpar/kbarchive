---
layout: page
title: "Q246004: 5250 and 3270 Applets Do Not Find SNA Server"
permalink: kb/246/Q246004/
---

## Q246004: 5250 and 3270 Applets Do Not Find SNA Server

	Article: Q246004
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows versions 95, 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows 95/98 computers, the 5250 and 3270 applets may not find the SNA
	Server when the SNA client configuration is set to Local mode (locate servers by
	SNA Sub-domain). A TCP/IP error 121 may also occur.
	
	CAUSE
	=====
	
	Local client mode (TCP_IP transport) is unreliable on a busy network because the
	client does not wait long enough for SNA Servers to respond to its sponsor
	request broadcast.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	WORKAROUND
	==========
	
	Set the SNA client configuration to Remote mode (locate SNA Servers by name) and
	enter the sponsor server name (or IP address).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
