---
layout: page
title: "Q171284: Problems Enumerating CardBus Devices with No Free IRQs"
permalink: kb/171/Q171284/
---

## Q171284: Problems Enumerating CardBus Devices with No Free IRQs

	Article: Q171284
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbenv kbhw osr2 win95 kbHardware
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows 95 on a computer with CardBus slots, you may
	experience the following symptoms:
	
	- When multiple PC Cards are installed and the computer is started, Windows may
	  not start and you may receive the following error message:
	
	  While initializing ... device V86MMGR: Insufficient memory to initialize
	  Windows.
	
	- If Windows is running with one PC Card inserted, the computer may become
	  unresponsive for several minutes when you insert another PC Card. When the
	  computer returns from this busy state, Device Manager Reports the new card as
	  disabled because of a resource conflict (code 12).
	
	CAUSE
	=====
	
	These symptoms can occur if there are not enough available IRQ lines for all the
	installed devices.
	
	RESOLUTION
	==========
	
	
	To work around this issue, make more IRQ resources available by disabling a
	device (such as a COM port or LPT port). Such devices can typically be disabled
	in Device Manager.
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	If there are not enough available IRQ lines, there is no configuration that
	allows all devices to be active without a resource conflict. A device must be
	removed or disabled to free an IRQ line and allow the remaining devices to be
	configured successfully.
	
	
	Additional query words: pccard card bus hang
	
	======================================================================
	Keywords          : kbenv kbhw osr2 win95 kbHardware 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
