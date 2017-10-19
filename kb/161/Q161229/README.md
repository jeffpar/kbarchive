---
layout: page
title: "Q161229: Resource Leak in Eicon V3R3 X.25 Link Service"
permalink: /kb/161/Q161229/
---

## Q161229: Resource Leak in Eicon V3R3 X.25 Link Service

	Article: Q161229
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Performance Monitoring of the SNALINK process for Eicon X.25 adapters shows
	increases in the Handle Count, Private Bytes, Virtual Bytes, and Working Set,
	even though the Thread Count does not increase. The increase is noted over a
	long period of time, and the resources are not freed when the connection is
	rendered inactive. The change is more sudden if the connection is dropped and
	reestablished.
	
	CAUSE
	=====
	
	The Eicon WAN Services driver for V3R3 has a resource leak.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 3.0. This problem was corrected in the latest Microsoft SNA Server
	version 2.11 and 3.0 U.S. Service Packs. For information on obtaining these
	service packs, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: x.25 prodsna
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	
	=============================================================================
	
