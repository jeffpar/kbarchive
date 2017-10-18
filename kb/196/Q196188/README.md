---
layout: page
title: "Q196188: XADM: Outlook Displays Overdue Notices for Past Appointments"
permalink: kb/196/Q196188/
---

## Q196188: XADM: Outlook Displays Overdue Notices for Past Appointments

	Article: Q196188
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Each time you start Outlook, it may display overdue notices for past meetings.
	
	During the cleanup phase, the Move Server Wizard performs cleanup operations on
	mailboxes. If the wizard encounters an error and is not able to complete a
	particular mailbox, the event log will contain the following message.
	
	  Unable to completely cleanup mailbox <Mailbox Name>.
	
	WORKAROUND
	==========
	
	If there are other servers in your site, you can move the mailbox to another
	server. Moving the mailbox to another server will resolve this problem. See
	Microsoft Exchange Server Getting Started for more information on moving a
	mailbox to another server.
	
	MORE INFORMATION
	================
	
	Depending on how many appointments are on a user's calendar, Outlook can display
	an excessive number of these notices.
	
	Additional query words: Move Server Wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	
