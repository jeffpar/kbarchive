---
layout: page
title: "Q169656: XCON: MTA Fails to Start and Logs Event ID 2143"
permalink: /kb/169/Q169656/
---

## Q169656: XCON: MTA Fails to Start and Logs Event ID 2143

	Article: Q169656
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	
	
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Message Transfer Agent (MTA) may fail to start.
	The following error will be logged in the Windows NT Application Log:
	
	  Event ID 2143 MSExchangeMTA
	  Internal Processing
	  A fatal MTA database server error was encountered. Call Microsoft
	  Product Support.
	
	Running MTACHECK will produce no errors.
	
	MORE INFORMATION
	================
	
	This problem usually occurs on high use systems that participate is Directory
	Synchronization (DXA) with Microsoft Mail PO's. The issue is the DXA is serviced
	by an MTA queue that is also used for handling message reports. Whenever a
	report is handled by the MTA; the queue is reset. If the DXA was in the process
	of reading or writing into the queue at the time of the reset, the APDU
	(Application Packet Data Unit) becomes correct and this causes the problem
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	Version5.0. This problem has been corrected in the latest Microsoft Exchange
	Server 5.0 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
