---
layout: page
title: "Q131942: Erratic Mouse Pointer Behavior on Laptop Computers"
permalink: kb/131/Q131942/
---

## Q131942: Erratic Mouse Pointer Behavior on Laptop Computers

	Article: Q131942
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
	
	When you use Windows 95 on a laptop computer, you may experience random mouse
	pointer movements and mouse clicks.
	
	CAUSE
	=====
	
	This behavior can occur on computers that use a single controller for both the
	keyboard and power management. When Windows 95 polls the controller, random data
	is sometimes returned. This random data can result in random mouse pointer
	movements and mouse clicks.
	
	The following computers have been reported to experience this behavior:
	
	- AT&T Globalyst 200S
	
	- MidWest Micro SoundBook Elite
	
	- Swan Note laptop computers
	
	RESOLUTION
	==========
	
	To resolve this issue, disable power status polling. To do so, follow these
	steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Device Manager tab.
	
	4. Double-click the System Devices branch to open it.
	
	5. Click Advanced Power Management, and then click Properties.
	
	6. Click the Enable Power Management Support check box to clear it.
	
	7. Click OK or Close until you return to Control Panel.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
