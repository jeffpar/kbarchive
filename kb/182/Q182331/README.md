---
layout: page
title: "Q182331: Default 802.2 DLC Pacing Values May Result In Slow Performance"
permalink: kb/182/Q182331/
---

## Q182331: Default 802.2 DLC Pacing Values May Result In Slow Performance

	Article: Q182331
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server applications that connect through 802.2 DLC connections configured on
	a SNA Server 4.0 computer may experience slower performance compared to the same
	application communicating through 802.2 DLC connections on previous versions of
	SNA Server.
	
	CAUSE
	=====
	
	SNA Server versions prior to SNA Server 4.0 use a default value of 2 for the
	Receive Ack Threshold pacing parameter on 802.2 DLC connections. This default
	was changed to 6 in SNA Server 4.0 after performance testing showed that this
	yielded better throughput.
	
	
	Additional testing found that in some circumstances using a Receive Ack Threshold
	of 6 may result in slower throughput when compared to using the previous default
	value of 2.
	
	
	WORKAROUND
	==========
	
	Change the Receive Ack Threshold value to 2 from its default value of 6.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0. This problem was
	corrected in the latest SNA Server version 4.0 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this update applied, the default Receive Ack Threshold value for 802.2 DLC
	connections is 2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
