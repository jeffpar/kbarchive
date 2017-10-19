---
layout: page
title: "Q244526: XCON: RAS MTA Transport Stack Is only Type of Stack Available"
permalink: /kb/244/Q244526/
---

## Q244526: XCON: RAS MTA Transport Stack Is only Type of Stack Available

	Article: Q244526
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to add a new message transfer agent (MTA) transport stack, the
	only type of transport stack available may be the Remote Access Service (RAS)
	MTA Transport Stack.
	
	MORE INFORMATION
	================
	
	To gain access to other types of transport stacks, the X.400 Connector must be
	installed. It should be noted that the X.400 Connector is available on the
	Microsoft Exchange Server Enterprise Edition CD-ROM disc or as a separate add-on
	component to the Standard Edition, which must be purchased from Microsoft
	Sales.
	
	For additional information information on connectors that are included with
	Exchange Server 5.5, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q199125 XCON: Connectors Included with Microsoft Exchange Server 5.5
	
	To install the X.400 Connector on a computer running the Enterprise version of
	Exchange Server:
	
	1. Start Microsoft Exchange Server Setup from the Enterprise Exchange Server CD.
	
	2. The Setup program starts in Maintenance mode. Click the Add/Remove button.
	
	3. Make sure the Microsoft Exchange Server option is selected, and then click
	  the Change Option button.
	
	4. Click the X.400 Connector and click OK, and then click Continue.
	
	At this point, additional types of MTA transport stacks are available. If the
	X.400 Connector is the only component added, you do not need to re-apply any
	service packs.
	
	Additional query words: heuristics TCP/IP TP4 Eicon X.25 missing
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
