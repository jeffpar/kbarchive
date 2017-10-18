---
layout: page
title: "Q269442: XADM: Mailbox Manager Removes Future Appointment"
permalink: kb/269/Q269442/
---

## Q269442: XADM: Mailbox Manager Removes Future Appointment

	Article: Q269442
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Mailbox Manager to clean calendar folders, appointments that were
	created in past, but which are older than the age limit set on the folder and
	which are scheduled to occur in the future, may be deleted.
	
	CAUSE
	=====
	
	Mailbox Manager only considers the creation date, last modification date, and
	sent date as the criteria for the removal of an appointment. Appointments that
	are older than the configured age limit of items in the folder, but which occur
	in the future are still deleted.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
