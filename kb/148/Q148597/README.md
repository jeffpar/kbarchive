---
layout: page
title: "Q148597: Incoming Call Support With Distributed Link Services"
permalink: /kb/148/Q148597/
---

## Q148597: Incoming Call Support With Distributed Link Services

	Article: Q148597
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install SNA Server 2.11 Service Pack 1, the new 802.2 Distributed Link
	Service feature does not support incoming calls.
	
	CAUSE
	=====
	
	If Distributed Link Service is set up to allow more than one SNA Server to use
	the same Distributed Link Service, the link service does not know which server
	to send the incoming XID. The chosen server may reject the connection unless it
	is set up for incoming calls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1. This problem was corrected in the latest Microsoft SNA Server 2.11 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	An enhancement has been made for 802.2 Distributed Link Services. Some WAN
	implementations benefit from decreased traffic on the network.
	
	For example, an SNA Server uses an 802.2 Distributed Link Service to connect to a
	Cluster Controller over Token Ring. The network is physically separated into two
	segments, connected by an X.25 network. The SNA Server that distributes the link
	is on the same segment as the Cluster Controller. The SNA Server running the
	Distributed Link Service is located on the other segment.
	
	Since the X.25 line is billed by usage, it is necessary to limit the amount of
	traffic in the WAN. Instead of keeping the connection Active continuously,
	allowing the 802.2 Distributed Link Service to accept incoming calls represents
	substantial savings due to the fact that the connection remains inactive until
	needed.
	
	NOTE: The SNA Server Link Service used is DLC 802.2 over Token Ring. The WAN link
	uses the Packet Switched Network. If the connection is established to use an
	X.25 Link Service, the above case does not apply.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
