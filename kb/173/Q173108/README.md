---
layout: page
title: "Q173108: XADM: Mbclean.exe Deletes Outlook Calendar, Contacts, and Tasks"
permalink: kb/173/Q173108/
---

## Q173108: XADM: Mbclean.exe Deletes Outlook Calendar, Contacts, and Tasks

	Article: Q173108
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you run the Mbclean.exe utility from the Microsoft BackOffice Resource Kit
	(BORK) to delete all messages over a certain age, Mbclean.exe also deletes
	users' Outlook Calendar, Contacts, and Tasks items.
	
	CAUSE
	=====
	
	The Exchange Resource Kit utility Mbclean.exe, from the Microsoft BackOffice
	Resource Kit, is a tool that deletes all messages older than a certain date.
	Therefore, Mbclean.exe also deletes Calendar, Contact, and Task items you have
	created in Outlook, if those items are older than the number of days specified.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Mbclean.exe in the Microsoft
	BackOffice Resource Kit. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you have users who store Calendar, Contact, or Task items on the server, you
	should not use the current Mbclean.exe utility from the BackOffice Resource Kit
	to delete all messages over a certain age.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
