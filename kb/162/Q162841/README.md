---
layout: page
title: "Q162841: XFOR: MSMI NDRs Dir-Sync Messages Under Certain Circumstances"
permalink: kb/162/Q162841/
---

## Q162841: XFOR: MSMI NDRs Dir-Sync Messages Under Certain Circumstances

	Article: Q162841
	Product(s): Microsoft Exchange
	Version(s): 4.0 SP3,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP3, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MS Mail postoffice is configured to participate in directory
	synchronization (dir-sync) with a Microsoft Exchange Server, dir-sync traffic
	from the MS Mail postoffice may generate a Non Delivery Report by the MS Mail
	Connector Interchange service (MSMI), and never reach the Microsoft Exchange
	Server Directory Synchronization service (DXA).
	
	MORE INFORMATION
	================
	
	If the postoffice name of the MS Mail postoffice is similar to that of the
	Microsoft Exchange Server connector postoffice, the dir-sync messages will
	generate a Non Delivery Report, and the following warning will be logged in the
	Windows NT event log.
	
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	  31/12/96 19:56:34 MSExchangeMSMI Warning  NDR   2117  N/A
	     EXGAU30003  Non delivery report generated.
	
	  From: ANZAUDCU/MEL227TRK0/$SYSTEM
	  Subject: SrvTx R=3 S=87298 (was 0), I=2 15603 sen
	
	  [004] Message circular route detected.
	  Message followed the following route:
	    ANZAUDCU  /MEL227TRK
	    ANZAUDCU  /MEL227TRK
	    K         / 
	
	  Attempted to send to the following addresses:
	  ANZAUDCU/MEL227TRK/SYSTEM1
	>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	In this example, the Microsoft Exchange Server connector postoffice name is
	MEL227TRK, and the MS Mail postoffice name is MEL227TRK0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ndr dirsync msmi
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange400SP3
	Version           : :4.0 SP3,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
