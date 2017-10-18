---
layout: page
title: "Q159953: XADM: Error After Move Mailbox Operation When Client Logged On"
permalink: kb/159/Q159953/
---

## Q159953: XADM: Error After Move Mailbox Operation When Client Logged On

	Article: Q159953
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warning from the Microsoft Exchange Client might appear after a
	Microsoft Exchange Administrator performs a move mailbox operation:
	
	  The folder could not be opened. You do not have sufficient permission to
	  perform this operation on this object. See the folder contact or your system
	  administrator.
	
	CAUSE
	=====
	
	Your mailbox was moved to another Microsoft Exchange Server in the Microsoft
	Exchange Site while you were logged on in your Microsoft Exchange Client.
	
	WORKAROUND
	==========
	
	Microsoft Exchange administrators should verify that all clients are logged off
	of their Microsoft Exchange Server prior to the move mailbox operation. If a
	user is logged on to the mailbox during the move operation and encounters the
	above warning, they should exit and loggoff and their client will function
	normally the next time it is started.
	
	MORE INFORMATION
	================
	
	Microsoft recommendeds that mail be sent prior to the move mailbox operation so
	that users will have fair warning of the impending move.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
