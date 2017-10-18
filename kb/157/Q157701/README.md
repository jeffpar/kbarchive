---
layout: page
title: "Q157701: XCON: MTA: Dr. Watson Report with Exception e0020002"
permalink: kb/157/Q157701/
---

## Q157701: XCON: MTA: Dr. Watson Report with Exception e0020002

	Article: Q157701
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) generates a Dr. Watson
	report with the exception number e0020002. The following events are reported in
	the Application Log of the Windows NT Event Viewer:
	
	  Event ID: 9225
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Internal Processing
	
	  Description:
	  A sockets error was detected. Bad message type 1 for socket control block 42
	  in state 4.
	  [BASE IL TCP/IP DRVR 11 262] (14)
	
	  Event ID: 9405
	  Source: MSExchangeMTA
	  Type :Error
	  Category: Field Engineering
	
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  SBPDSCLS:CB TID=0,calling TID=1.
	  [BASE TCP/IP DRVR 11] (16)
	
	  EventID: 9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Exception e0020002 occurred at Address 77f3cbcd. [BASE TCP/IP DRVR 11] (16)
	
	  EventID: 4097
	  Source:DrWatson
	  Type:Information
	  Category:None
	
	  Description:
	  The application, emsmta.DBG, generated an application error. The error
	  occurred on 11/ 8/1996 @ 6:23:39. 0 The exception generated was e0020002 at
	  address 77f3cbcd (<nosymbols>)
	
	CAUSE
	=====
	
	The MTA was attempting to close a Control Block (an MTA resource) with a thread
	different than the one used to create the Control Block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem can occur with either TCP/IP or TP4 as the underlying transport
	stack for an X.400 Connector.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
