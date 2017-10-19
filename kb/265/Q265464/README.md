---
layout: page
title: "Q265464: Cannot Gain Access to Server, System Event Log Shows Event ID 25"
permalink: /kb/265/Q265464/
---

## Q265464: Cannot Gain Access to Server, System Event Log Shows Event ID 25

	Article: Q265464
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows NT Server 4.0 Service Pack 5 (SP5), you may be unable
	to gain access to the server, and the system Event Log may record the following
	event:
	
	  Event ID: 2504
	  Source: Server
	  Description: The server could not bind to the transport \device\name
	
	CAUSE
	=====
	
	This behavior can occur if NetBIOS over TCP/IP (NetBT) does not successfully
	bind to network interface cards (NICs).
	
	WORKAROUND
	==========
	
	To work around this behavior, reinstall Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search
	Version           : :4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
