---
layout: page
title: "Q196407: XADM: Unwanted Reminders Appear After Using Move Server Wizard"
permalink: kb/196/Q196407/
---

## Q196407: XADM: Unwanted Reminders Appear After Using Move Server Wizard

	Article: Q196407
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run the Microsoft Exchange Server Move Server Wizard on a particular
	server, some users may receive many reminders or notifications for meetings that
	have already passed.
	
	CAUSE
	=====
	
	As the Move Server Wizard is carrying out its cleanup tasks, it will access each
	mailbox's private store and delete the Reminders folder. If this action fails,
	the Event ID listed below will be displayed in the Windows NT Application Event
	log. This user will also end up with unwanted reminders.
	
	  Event ID: 9502
	  Source: MSExchangeMvServer
	  Type: Warning
	  Category: General
	  Description: Unable to completely cleanup mailbox
	  '/o=Organization/ou=Site/cn=Recipients/cn=User'.
	
	WORKAROUND
	==========
	
	To work around this problem, move the user in question to another server in the
	site. That user can then be moved back to the original server, if desired.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File name Version
	  -------------------------
	  Movesrvr.dll 5.5.2394
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
