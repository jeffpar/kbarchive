---
layout: page
title: "Q262473: LU 6.2 Data Compression Fails When Initiated by Host System"
permalink: kb/262/Q262473/
---

## Q262473: LU 6.2 Data Compression Fails When Initiated by Host System

	Article: Q262473
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server does not use LU 6.2 data compression when the BIND is a host
	initiated, non-extended BIND. Compression is not used even though it has been
	configured on both the connection and on the APPC mode definition.
	
	CAUSE
	=====
	
	When SNA Server negotiates LU 6.2 compression, it checks the level of
	compression that is configured on the mode entry and the level of compression
	that is configured on the connection. It obtains this information from a
	connection record in an internal connection table.
	
	This problem occurs because SNA Server is incorrectly reading the connection
	record, and therefore, it obtains the wrong value for compression support.
	Because of this, SNA Server does not accept the host systems request for data
	compression.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	This problem does not occur when SNA Server initiates the BIND with the host. In
	most scenarios, setting an Automatic Activation Limit on the APPC mode
	definition eliminates this problem by forcing SNA Server to initiate the BIND
	with the host.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For LU 6.2 data compression to work on SNA Server, it needs to be configured on
	both the connection and the APPC mode definition. This is also true for 3270/LUA
	LU data compression, which needs to be configured on both the connection and the
	LU.
	
	For additional information on how to configure SNA Server for compression when
	non-extended BINDs are used, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q266091 Configuring For Host Compression When Using Non-Extended BINDs
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
