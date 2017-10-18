---
layout: page
title: "Q195012: Queued 3270 Print Jobs May Intermittently Print Incorrectly"
permalink: kb/195/Q195012/
---

## Q195012: Queued 3270 Print Jobs May Intermittently Print Incorrectly

	Article: Q195012
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Host print jobs printed through SNA Server's Host Print Server may print
	incorrectly at times. In the reported instance of this problem, two host print
	jobs were sent to the print server from the mainframe at approximately the same
	time. One of the print jobs printed correctly, but only part of the other job
	printed. The actual symptoms may vary.
	
	The problem is most likely to occur when one or both of the following are true:
	
	- The mainframe sends multiple print jobs to the print server at the same time.
	
	- The print server has numerous sessions active concurrently so that each one
	  is processing quite slowly.
	
	This problem can affect 3270 print jobs using both LU1 (SCS) and LU3 print
	sessions.
	
	CAUSE
	=====
	
	The 3270 Print Provider (Ppd3270.dll) uses a mechanism for queuing messages
	received from the host that can allow messages for different print jobs destined
	for the same print device to be intermixed.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The update improves the 3270 Print Provider's queuing mechanism to prevent this
	problem from occurring.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
