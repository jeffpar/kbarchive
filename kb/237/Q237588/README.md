---
layout: page
title: "Q237588: XFOR: cc:Mail Connector Dirsync Issues"
permalink: kb/237/Q237588/
---

## Q237588: XFOR: cc:Mail Connector Dirsync Issues

	Article: Q237588
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fixkbfixlist
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus cc:Mail cycles through several
	iterations of directory updates to the cc:Mail post office for similar users
	from different Exchange Server sites. For example, the following are three
	Exchange Server users with different capitalization's in their names:
	
	  Smith, Jimmy at Site 1
	  SMITH, Jimmy at Site 2
	  Smith, jimmy at Site 3
	
	CAUSE
	=====
	
	Internally, the name comparison is case-sensitive in some places.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	Lotus cc:Mail is case-insensitive and allows only one user to be created in its
	directory even if they belong to a different post office. The Exchange Connector
	for cc:Mail does not adhere to this behavior completely and thus incorrectly
	sends an update to the cc:Mail post office every directory synchronization
	cycle.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix kbfixlist
	Component         : CCMC
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
