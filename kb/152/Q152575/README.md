---
layout: page
title: "Q152575: XADM: Directory Replication Option Not Disp. in Standard Edition"
permalink: kb/152/Q152575/
---

## Q152575: XADM: Directory Replication Option Not Disp. in Standard Edition

	Article: Q152575
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to set up a new Microsoft Exchange Directory Replication
	Connector over a Microsoft Exchange X.400 Connector or a Microsoft Exchange
	Internet Mail Connector (IMC). The option to set up directory replication may
	not be displayed in the Microsoft Exchange Server Administrator program when you
	click New Other on the File menu.
	
	CAUSE
	=====
	
	This problem can occur if you use the Standard Edition of Exchange Server and
	you have not installed the Microsoft Exchange Connector on the Exchange Server
	computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Exchange Connector on the Exchange Server
	computer and any other Exchange Server computers that you want to participate in
	directory replication. Alternatively, if you install the Enterprise Edition of
	Exchange Server, this option is displayed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
