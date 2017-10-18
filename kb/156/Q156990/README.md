---
layout: page
title: "Q156990: XADM: Move Buttons on MIME Property Page Toggle Back and Forth"
permalink: kb/156/Q156990/
---

## Q156990: XADM: Move Buttons on MIME Property Page Toggle Back and Forth

	Article: Q156990
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Move Up and Move Down button in the Microsoft Exchange Internet Mail
	Connector (IMC) MIME Property Page toggles between each other when used in
	moving selections.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, follow these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Open the IMC's property page.
	
	3. Click the MIME Types tab.
	
	4. Use the mouse to select a MIME Content Type somewhere in the middle of the
	  list.
	
	5. Click the Move Up button.
	
	6. Click the Move Down button.
	
	Result: Both buttons seem to be selected because both have bold borders. Pressing
	the Enter key on the keyboard will move the entry up, then down, then up, then
	down, and so forth.
	
	Expected: Pressing the Enter key on the keyboard repeatedly should either move
	the entry to the top or the bottom of the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are currently researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
