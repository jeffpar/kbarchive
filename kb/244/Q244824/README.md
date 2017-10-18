---
layout: page
title: "Q244824: XADM: Personal Distribution Lists Missing After Running MBClean"
permalink: kb/244/Q244824/
---

## Q244824: XADM: Personal Distribution Lists Missing After Running MBClean

	Article: Q244824
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Mailbox Cleanup Agent (MBClean) utility finishes running, personal
	distribution lists (created by using Outlook 2000 clients) are missing.
	
	CAUSE
	=====
	
	The MBClean utility was not designed to recognize personal distribution lists as
	special items.
	
	RESOLUTION
	==========
	
	Install Exchange Server version 5.5 Service Pack 3 (SP3) and Mailbox Manager
	(included with SP3). By using Mailbox Manager, you can specify the folders that
	are not to be scanned. If the Contacts folder is not scanned, personal
	distribution lists that are stored there are not deleted.
	
	MORE INFORMATION
	================
	
	After you upgrade to Outlook 2000, clients can create personal distribution
	lists in the Contacts folder on the server. This feature was not available
	before Outlook 2000, and was not taken into account when the MBClean utility was
	created. If the MBClean utility version 1.93 or earlier is run on a server that
	contains these distribution lists, it removes them, based on the policies that
	are in place for other mail messages. The MBClean utility version 1.93 or
	earlier ignores other special items, such as Contacts, Calendar Events, and
	Tasks, but does not ignore personal distribution lists.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
