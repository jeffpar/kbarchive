---
layout: page
title: "Q160625: Dialing Out Using 32-Bit Program Returns Busy Signal"
permalink: /kb/160/Q160625/
---

## Q160625: Dialing Out Using 32-Bit Program Returns Busy Signal

	Article: Q160625
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dial out using a 32-bit program, you may receive a busy signal
	and the following message:
	
	  The line is busy
	  Try again later.
	
	CAUSE
	=====
	
	This behavior can occur if your modem is configured to disable Call Waiting when
	the Call Waiting service is not active on your phone service.
	
	When Call Waiting is enabled, a prefix is automatically dialed when a 32-bit
	program dials out. With Call Waiting no longer available, dialing the prefix
	returns a busy signal.
	
	RESOLUTION
	==========
	
	To remove the dialing prefix, follow these steps:
	
	1. In Control Panel, double-click Modems.
	
	2. Click the modem you are using, and then click Dialing Properties.
	
	3. On the My Locations tab, click the "This location has call waiting. To
	  disable it, dial" check box to clear it.
	
	4. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
