---
layout: page
title: "Q140825: Node Retries Open(Link) on X.25 Even After Error is Reported"
permalink: kb/140/Q140825/
---

## Q140825: Node Retries Open(Link) on X.25 Even After Error is Reported

	Article: Q140825
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNALink cannot initialize successfully, it responds with an Open (LINK)
	Error-Response containing an error code. Upon receiving an Open(LINK)
	Error-Response on a link, the node should not continue to retry connections on
	that link service. However, in the case of X.25 PVCs (permanent virtual
	circuits), and SDLC (Synchronous Data Link Control) leased connections, the node
	continues to retry.
	
	Sample Trace
	------------
	
	  at 17:25:41.31 Open Link Request for Link Service SDL2
	  at 17:25:41.40 Open Link Request for Link Service QLLC
	  at 17:25:41.40 Open Link Response with Error code 01 for SDL2
	  at 17:25:41.53 Open Link Response with Error code 01 for QLLC
	  at 17:26:01.84 Open Link Request for Link Service SDL2
	                                                   (retried every 20 sec.)
	
	CAUSE
	=====
	
	The node fails to deal with leased connections correctly. It compares the name
	of the link service against a list that does not exist for leased connections.
	
	RESOLUTION
	==========
	
	The node no longer retries Open(Link)s after any RSPERR on any link type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
