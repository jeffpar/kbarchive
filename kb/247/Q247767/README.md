---
layout: page
title: "Q247767: XADM: Unable to Move Mailbox, with Error c1040af1 and Event 1008"
permalink: kb/247/Q247767/
---

## Q247767: XADM: Unable to Move Mailbox, with Error c1040af1 and Event 1008

	Article: Q247767
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Microsoft Exchange Server 5.5-based environment, when you attempt to move a
	mailbox from one server to another server in the same site, the move may not be
	successful and you may receive the following error message:
	
	  Exchange Administrator: IS unavailable or not running id # c1040af1
	
	Also, Event Viewer may record Event 1008.
	
	CAUSE
	=====
	
	This behavior can occur when the Directory contains inconsistencies or when it
	has not been replicated to the other server.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps at both servers:
	
	1. In Exchange Administrator, open the Directory Service Properties dialog box.
	
	2. On the General tab, click Check Now to check knowledge consistency.
	
	3. On the General tab, click Update Now to update the Directory for the site
	  where the server resides.
	
	NOTE: By default, consistency checking, updating, and Message Transfer Agent
	routing recalculation automatically occur within 24 hours. However, immediate
	consistency checking and updating reduces the likelihood of Directory
	inconsistencies' multiplying.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
