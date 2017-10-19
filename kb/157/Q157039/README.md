---
layout: page
title: "Q157039: XCLN: Logging on to Local Machine Account on Exchange Server"
permalink: /kb/157/Q157039/
---

## Q157039: XCLN: Logging on to Local Machine Account on Exchange Server

	Article: Q157039
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you login to a Windows NT 4.0 Local Machine account on a Microsoft Exchange
	Server computer and then try to start the Microsoft Exchange Windows NT client,
	the following error will be displayed:
	
	  The Set of folders could not be opened. You do not have permission to log on.
	
	This is expected behavior when you do not login to a Windows NT Domain. You must
	be logged on with a valid NT Domain account in order to access a mailbox on a
	Microsoft Exchange Server.
	
	
	MORE INFORMATION
	================
	
	Under Windows NT 3.51, the error message will be:
	
	  Microsoft Exchange could not be started. Exchange could not log on. Check to
	  make sure you are connected to the network and are using the proper server
	  and mailbox name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : :4.0,5.0
	
	=============================================================================
	
