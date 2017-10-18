---
layout: page
title: "Q175263: XADM: Clients Cannot Recover Items After Item Recovery Enabled"
permalink: kb/175/Q175263/
---

## Q175263: XADM: Clients Cannot Recover Items After Item Recovery Enabled

	Article: Q175263
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	Item Recovery can be enabled or disabled for the private or public information
	store objects, a specific mailbox, or a specific public folder. However, changes
	made to the Item Recovery settings may not be immediately available to clients
	that are currently logged on to the Exchange Server computer.
	
	SYMPTOMS
	========
	
	Microsoft Outlook and Microsoft Exchange clients may be unable to see deleted
	items in the Recover Deleted Items From dialog box, even if the Item Recovery
	option has been enabled on the Exchange Server computer. Conversely, clients may
	be able to recover deleted items even if the Item Recovery option has been
	disabled on the server.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	After you make changes to the Item Recovery settings on the Exchange Server
	computer, you must perform one of the following actions before clients can
	recover deleted items:
	
	- Restart the Outlook or Exchange client.
	
	  -or-
	
	- Stop and restart the Microsoft Exchange information store service.
	
	  -or-
	
	- Wait for approximately an hour to allow the changes on the server to be
	  registered by the client.
	
	Additional query words: dumpster restore message
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
