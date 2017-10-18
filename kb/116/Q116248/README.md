---
layout: page
title: "Q116248: Phoenix BIOS May Cause Wave Files to Continually Play on WSS"
permalink: kb/116/Q116248/
---

## Q116248: Phoenix BIOS May Cause Wave Files to Continually Play on WSS

	Article: Q116248
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
	
	When Windows 95 is loading, the wave file (.WAV) that signifies Windows is
	starting may play continuously.
	
	CAUSE
	=====
	
	This behavior can occur if Windows 95 sets the Microsoft Windows Sound System
	(WSS) card to IRQ 7. Because LPT1 defaults to IRQ 7, Setup should set the WSS
	card to a different hardware interrupt; however, some Phoenix BIOS chip sets
	report the existence of IRQ 7 differently and may cause Windows 95 not to
	recognize this interrupt properly.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	- Disable the LPT1 port through the Phoenix BIOS setup utility.
	
	  -or-
	
	- Change the interrupt for the Windows Sound System through the Device Manager
	  using the following steps:
	
	  1. On the taskbar, click the Start button.
	
	  2. On the Settings menu, click Control Panel.
	
	  3. Double-click the System icon, and click the Device Manager tab.
	
	  4. Double-click Media Devices.
	
	  5. Click Microsoft Audio Hardware.
	
	  6. Click the Properties button, and then click the Resources tab.
	
	  7. Under New Settings, click the Manual Based On check box, then set the IRQ
	     to an unused interrupt (one that does not have an asterisk [*] beside it).
	
	MORE INFORMATION
	================
	
	Windows 95 should not allocate IRQ 7 to a device unless no other interrupts are
	available.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
