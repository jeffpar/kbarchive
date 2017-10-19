---
layout: page
title: "Q148483: XCLN: Prev/Next Unavailable After Open from Notify Dialog"
permalink: /kb/148/Q148483/
---

## Q148483: XCLN: Prev/Next Unavailable After Open from Notify Dialog

	Article: Q148483
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange allows you to activate a new mail notification dialog box on
	the General tab (on the Tools menu, click Options). When you select this option,
	the Next and Previous toolbar buttons become unavailable when a new message is
	delivered.
	
	CAUSE
	=====
	
	This behavior is by design. The message is being delivered by new mail
	notification. It therefore has no message site. The next and previous buttons
	are disabled accordingly.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Do not activate the new mail notification dialog box.
	
	- Close the message, then reopen it. The Next and Previous message functions
	  will then be active.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
