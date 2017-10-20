---
layout: page
title: "Q90216: NE 1000 and NE 2000 Don't Work on IRQ 5 with I/O at 300h"
permalink: /kb/090/Q90216/
---

## Q90216: NE 1000 and NE 2000 Don't Work on IRQ 5 with I/O at 300h

{% raw %}

	Article: Q90216
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kbprb kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	NE 1000 and NE 2000 network cards don't work correctly with Windows
	for Workgroups when they are set for interrupt 5 and I/O address 300.
	These cards work correctly with Windows for Workgroups if you use any
	other setting for interrupt or I/O address. This is documented in the
	NE 1000 and NE 2000 manuals.
	
	NOTE: Control Panel allows you to set the card to these two incorrect
	settings; therefore, the potential for conflict with Windows for
	Workgroups exists.
	
	Additional query words: 3.10 3.11 irq novell netware anthem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
