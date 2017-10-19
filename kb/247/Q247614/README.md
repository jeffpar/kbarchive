---
layout: page
title: "Q247614: XADM: Exchange Administrator Stops When Moving Mailbox"
permalink: /kb/247/Q247614/
---

## Q247614: XADM: Exchange Administrator Stops When Moving Mailbox

	Article: Q247614
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move a mailbox from one server to another server in Microsoft Exchange
	Server 5.0 or 5.5, the Exchange Administrator may stop responding and you must
	restart the Exchange Server to restart the program.
	
	This can happen on either the server where the mailbox originates, or the server
	where you move the mailbox.
	
	CAUSE
	=====
	
	This behavior can occur when there is an integrity problem or corruption in the
	private information store.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the Isinteg utility against the private information
	store. Follow these steps:
	
	1. Stop the Information Store (IS) service.
	
	2. At the Microsoft Windows NT command prompt, use the cd command to switch to
	  the network drive that contains the Exchange Server directory.
	
	3. Use the cd command to switch to the Exchsrvr\bin folder, and then press
	  ENTER.
	
	4. To check the integrity of the private information store, type the following
	  at the Microsoft Windows NT command prompt, and then press ENTER:
	
	  isinteg -test -pri
	
	  NOTE: To repair any problems that the scan locates, type isinteg -fix -pri at
	  the command prompt and then press ENTER.
	
	5. Restart the IS service.
	
	MORE INFORMATION
	================
	
	For additional information on the Move Mailbox operation, and to compare events
	in the application log of your Event Viewer, please see the following Microsoft
	Knowledge Base article:
	
	  Q188627 XADM: MSExchangeIS Move Mailbox Error Event IDs
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
