---
layout: page
title: "Q163314: Occasional Event 23 Outages With a Microgate SDLC Adapter"
permalink: kb/163/Q163314/
---

## Q163314: Occasional Event 23 Outages With a Microgate SDLC Adapter

	Article: Q163314
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SDLC connection from SNA Server may drop to a Pending state occasionally when
	using a Microgate SDLC adapter. When this occurs, SNA Server may log a message
	similar to the following in the Windows NT Application Event Log:
	
	  Event ID: 23
	  Description: Connection <connection_name> using Link Service
	  <link_service_name> failed.
	
	  Qualifier = 25
	
	NOTE: The qualifier may vary when this problem occurs.
	
	CAUSE
	=====
	
	The Ibmsync.sys driver that is used by the Microgate SDLC link service was found
	to have a scheduling window that could cause occasional connection outages as
	described above. There were two problems found and corrected in the Ibmsync.sys
	driver:
	
	- The problem caused messages to be lost or received out of order, but should
	  only occur on high-speed SDLC lines.
	
	- The second problem may cause messages to be delayed in processing until
	  another message arrives. This has only been seen when running at 2Mbps over
	  the SDLC adapter, but again the window to hit the problem was there when
	  running at lower speeds.
	
	RESOLUTION
	==========
	
	The Ibmsync.sys has been updated to correct the two problems described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	and 2.11 SP1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna dumb card
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
