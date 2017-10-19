---
layout: page
title: "Q260724: XADM: Calendar Public Folders Don't Publish Free/Busy Info"
permalink: /kb/260/Q260724/
---

## Q260724: XADM: Calendar Public Folders Don't Publish Free/Busy Info

	Article: Q260724
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Public folders that are set up as calendars do not publish Free/Busy data.
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Free/Busy data is stored in a system public folder and is associated with a
	mailbox. Public folders do not have mailboxes, and do not publish their
	Free/Busy information.
	
	To set up a public folder as a calendar, you must use Outlook to create the
	Folder. Select Appointment Items for the "Folder contains" option during the
	creation of the new folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
