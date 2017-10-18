---
layout: page
title: "Q182591: CardBus Cards Not Enumerated on Some PC Card Controllers"
permalink: kb/182/Q182591/
---

## Q182591: CardBus Cards Not Enumerated on Some PC Card Controllers

	Article: Q182591
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardware
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a CardBus PC Card in a computer running Microsoft Windows 95 OEM
	Service Release 2 (OSR2), the PC Card may not function properly.
	
	CAUSE
	=====
	
	This problem can occur when the CardBus PC Card is not enumerated properly. This
	issue is known to occur on computers that use the following PC Card controller
	chip sets:
	
	- Texas Instruments PCI1220
	
	- Texas Instruments PCI1221
	
	- Texas Instruments PCI1250
	
	- Texas Instruments PCI1250A
	
	CLKRUN is a power-saving feature which turns off the clock signal to PC Cards
	when they are not in use. When this feature is implemented by the controllers
	listed above, these controllers do not automatically provide the number of clock
	cycles most PC Cards need in order to initialize.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	You can use Device Manager to determine the chip set of your PC Card controller.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  System.
	
	2. Click the Device Manager tab, and then double-click PCMCIA Socket branch to
	  view the list of devices.
	
	
	
	Additional query words: pcmcia card bus
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.0,2.1,2.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
