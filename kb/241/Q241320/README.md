---
layout: page
title: "Q241320: LU Has Blank Status after Connection Move to Another SNA Server"
permalink: /kb/241/Q241320/
---

## Q241320: LU Has Blank Status after Connection Move to Another SNA Server

	Article: Q241320
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 3270 or LUA LU (Logical Unit) may show a "Blank" status in SNA Server Manager
	after the host connection it is associated with is moved to another SNA Server
	computer. Usually, the "Blank" LU status is only seen on instances of SNA Server
	Manager other than the one where the connection move was performed. On the
	computer where the connection move was performed, the connection and its LUs
	will have the same status as they had prior to the connection move, which may
	also be an incorrect status.
	
	This can also occur when a connection and its associated LUs are moved from one
	SNA Server service to another SNA Server service on the same SNA Server
	computer. A computer running SNA Server 4.0 (or later) can support up to four
	SNA Server services.
	
	CAUSE
	=====
	
	The Manage components associated with a connection and its LUs are not moved
	when the connection is moved to another SNA Server computer. Also, moving a
	connection between SNA Server services on the same SNA Server 4.0 (or later)
	computer results in the Manage components being duplicated. This can cause LU
	status updates to be sent to the incorrect Manage objects, which results in
	incorrect an LU status in SNA Server Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how this problem occurs when you move
	connections between SNA Servers and SNA Server services on the same SNA Server
	system:
	
	Configuration:
	
	  Primary SNA Server 4.0 SP2 system
	  Backup SNA Server 4.0 SP2 system
	
	Connections moved using the drag-and-drop operation in SNA Server Manager:
	
	  TEST1 - Originally on the primary SNA Server service on the Primary SNA
	  Server (PRIMARY)
	  TEST2 - Originally on the primary SNA Server service on the Backup SNA Server
	  (BACKUP)
	
	Each connection had one 3270 LU defined.
	
	TEST1 is configured for On Demand startup.
	TEST2 is configured for On Server Startup.
	
	1. Open SNA Server Manager on both SNA Server computers.
	
	2. The primary SNA Server service on both SNA Server computers is Active, as is
	  the secondary SNA Server service on BACKUP.
	
	3. Use the drag-and-drop operation to move TEST1 from Primary SNA Server
	  (PRIMARY) to primary SNA Server service on Backup SNA Server (BACKUP). Assign
	  a link service (SNADEMO1) to the connection.
	
	4. Use the drag-and-drop operation to move TEST2 from primary SNA Server service
	  on BACKUP to secondary SNA Server service on BACKUP. Assign a link service
	  (SNADEMO2) to the connection.
	
	5. Save the configuration.
	
	6. SNA Server Manager, where the connection moves were performed, shows the
	  following status:
	
	  Connection LU
	
	  TEST1(Active) Available
	  TEST2 (Active) Available
	
	  This is incorrect because a connection moved to a new SNA Server service
	  cannot be active and the LU cannot be Available.
	
	7. Other instances of SNA Server Manager that are open show the following when
	  the configuration is refreshed:
	
	  Connection LU
	
	  TEST1 (Offline) Blank
	  TEST2 (Offline) Blank
	
	8. The SNA Server services on the backup SNA Server (BACKUP) are "Out of Date"
	  as expected. Restarting the SNA Server services corrects the status problem
	  in SNA Server Manager on the primary SNA server (PRIMARY) where the moves
	  were performed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
