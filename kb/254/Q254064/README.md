---
layout: page
title: "Q254064: XFOR: Connector for SNADS Delivery Receipt Fails in SP2 and SP3"
permalink: /kb/254/Q254064/
---

## Q254064: XFOR: Connector for SNADS Delivery Receipt Fails in SP2 and SP3

	Article: Q254064
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message from an Exchange Server computer and select delivery
	receipt properties, if the Exchange Server version 5.5 Service Pack 2 (SP2) or
	Service Pack 3 (SP3) version of the Microsoft Exchange Connector for SNADS is
	installed, delivery receipt does not occur. Computers running Exchange Server
	5.5 or Exchange Server 5.5 Service Pack 1 do not experience this issue.
	
	CAUSE
	=====
	
	In Exchange Server 5.5 SP2 and SP3, all of the time records are stored in
	Greenwich mean time. However, SNADS keeps its CT records based on the Composed
	Date/Time field in the local time zone, so directory replication does not match
	any record in SNADS.
	
	RESOLUTION
	==========
	
	When Exchange Server creates the data block that is saved in the CT record,
	Exchange Server stores the original composed date and time as it was received
	from SNADS. To resolve this problem, obtain the latest service pack for Exchange
	Server 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: snads
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : SNADS
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
