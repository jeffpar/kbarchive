---
layout: page
title: "Q166551: XCON: MTA Fails While Rebuilding Routing Table"
permalink: kb/166/Q166551/
---

## Q166551: XCON: MTA Fails While Rebuilding Routing Table

	Article: Q166551
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange message transfer agent (MTA),
	it fails during the rebuild of the gateway address routing table (GWART).
	
	This happens when two computers running Microsoft Exchange Server are sending
	e-mail and directory replication messages across an Internet Mail Service (IMS)
	connector, and all four of the Organizational Units on the Address Space tab
	contain the maximum length of 32 characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
