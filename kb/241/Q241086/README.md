---
layout: page
title: "Q241086: XFOR: GroupWise Dirsync Update Does Not Create Objects"
permalink: kb/241/Q241086/
---

## Q241086: XFOR: GroupWise Dirsync Update Does Not Create Objects

	Article: Q241086
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Novell GroupWise may not correctly add
	Exchange Server users to the GroupWise mail system. This only applies to an
	update directory synchronization (dirysnc) cycle and not to the full reload
	dirsync cycle. Possible reasons include:
	
	- The Exchange Server user was recently marked unhidden from the global address
	  list.
	
	- The GroupWise proxy address was recently added to Exchange Server users.
	
	CAUSE
	=====
	
	The Exchange Connector for Novell GroupWise does not send the correct dirsync
	transactions to GroupWise under certain conditions (some are listed above).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The update dirsync process sends changes to the GroupWise system based on any
	change in the USN-Changed field for Exchange Server recipients. If an Exchange
	Server recipient is created and then hidden from the Exchange Server directory,
	the recipient is not added to GroupWise during dirsync. If this recipient is
	unhidden, the USN-Changed field causes a modify transaction to be sent to the
	GroupWise system. Because this user does not exist in GroupWise, the modify
	transaction is rejected, which results in an incomplete dirsync cycle.
	
	The workaround is to send an additional add transaction with each modify
	transaction during the dirsync cycle. This ensures that new users are added, and
	any changes to existing users are modified in the GroupWise system.
	
	
	Additional query words: lsdxa
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
