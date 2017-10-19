---
layout: page
title: "Q266784: XADM: Administrator Program Doesn't Start with Error 0xc0020002"
permalink: /kb/266/Q266784/
---

## Q266784: XADM: Administrator Program Doesn't Start with Error 0xc0020002

	Article: Q266784
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Exchange Server Administrator program, it may not
	start and you may receive the following error message:
	
	  The system cannot find the file specified
	  Windows NT error 0xc0020002
	
	The Administrator program also may not be displayed when you click Start, point
	to Programs, and then click Microsoft Exchange.
	
	CAUSE
	=====
	
	This issue can occur if the Administrator program is not fully installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, start the Exchange Server Setup program from the original
	setup location, and then click Add/Remove Programs. Click to select the Exchange
	Administrator check box, and then finish Setup.
	
	If the Exchange Administrator check box is already selected, click to clear the
	Exchange Administrator check box, and then finish Setup. Start Setup again,
	click to select the Exchange Administrator check box, and then finish Setup
	again.
	
	After Setup is complete, reinstall the Exchange Server service pack if necessary.
	
	Additional query words: admin.exe
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
