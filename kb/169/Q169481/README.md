---
layout: page
title: "Q169481: XADM: MTA Doesn't Start After Upgrading 4.0 SP3 to 5.0"
permalink: /kb/169/Q169481/
---

## Q169481: XADM: MTA Doesn't Start After Upgrading 4.0 SP3 to 5.0

	Article: Q169481
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Microsoft Exchange Server 4.0 with Service Pack 3 (SP3) to
	Exchange Server version 5.0, the message transfer agent (MTA) service may fail
	to start. When you attempt to start the MTA service manually from Control Panel
	Services, you may get the following error in the Event viewer application log:
	
	  Event ID 2000
	  MSX-IS PRIV    Verify that the MSX MTA service has started.
	  Consecutive ma-open calls are failing with error 3051.
	
	If you check Control Panel again you see that the MTA service is not started.
	Trying to restart the MTA service for the second time logs more of the same
	error in the application log.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Restart Exchange server 5.0. When the server starts all the services will
	  start normally with out any errors.
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kbsetup kbtshoot 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
