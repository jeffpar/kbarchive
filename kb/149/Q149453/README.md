---
layout: page
title: "Q149453: Qualifier 11 Using DFT Link Service"
permalink: kb/149/Q149453/
---

## Q149453: Qualifier 11 Using DFT Link Service

	Article: Q149453
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server may send a Request/Response Unit (RU) to the DFT adapter that is
	larger than the total buffer size on the adapter, which causes the DFT
	connection to disconnect. The SNA Server logs an Event ID 23 with a Qualifier of
	0x11 (DSR failure) when this problem occurs.
	
	NOTE: Q137804 details another cause of an Event ID 23 with a Qualifier of 0x11
	when you use a DFT Link Service on SNA Server.
	
	CAUSE
	=====
	
	In order to prevent SNA Server from trying to send a message larger than the DFT
	card can handle (about 970 bytes), the DFT link service needs to modify the
	Maximum RU size field in a BIND received from the host to reflect the actual RU
	size that it can receive before it passes the BIND request up to the SNA
	Server.
	
	
	RESOLUTION
	==========
	
	The Ibmdft.dll driver has been updated to modify the Maximum RU Size field of
	the BIND request before it passes it on to the SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.1, 2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna coax 3174
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
