---
layout: page
title: "Q158211: SNA Server Logs Event 579, 699 Followed by Connection Failure"
permalink: /kb/158/Q158211/
---

## Q158211: SNA Server Logs Event 579, 699 Followed by Connection Failure

	Article: Q158211
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server connection changes from Active to Inactive status and cannot be
	reactivated. This causes all users who are using this connection to lose their
	sessions. The following events are logged in the Microsoft Windows NT
	Application Event Log (in the following order):
	
	  Event ID: 579
	  Source: SNA Server
	  Description: Source and destination incompatibility, Message = <aa,bb>,
	  Parameters = <cc,dd>
	
	  Event ID: 699
	  Source: SNA Server
	  Description: Invalid message: MsgType 16, MhType 1
	  Message Header: <data>
	
	The following events may also be logged, following the 579 and 699 errors:
	
	  Event ID: 360
	  Source: SNA Server
	  Description: (B4A) Unexpected error logged
	
	  Event ID: 39
	  Source: SNA Server
	  Description: Connection <name> failed: No link service available
	
	NOTE: This problem occurs more frequently when you connect over the SNA Server
	NetWare IPX/SPX client interface.
	
	CAUSE
	=====
	
	If the SNA Server receives notification that an SNA client LAN session has
	ended, at the same time when a message is being sent to an SNA Server link
	service, an internal SNA Server addressing problem occurs, causing the
	underlying link service to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.1, 2.11, and 2.11 Service Pack 1. This problem was corrected in the latest
	Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
