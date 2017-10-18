---
layout: page
title: "Q126160: MS-DOS-Based Game Setup Does Not Detect WSS as Sound Blaster"
permalink: kb/126/Q126160/
---

## Q126160: MS-DOS-Based Game Setup Does Not Detect WSS as Sound Blaster

	Article: Q126160
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an MS-DOS-based game in a full-screen MS-DOS window on a
	computer with the Microsoft Windows Sound System installed, the game fails to
	detect the Windows Sound System sound card.
	
	CAUSE
	=====
	
	This problem can occur when the game requires that an IRQ from 0 to 7 be used
	for the sound card but the sound card is set to an IRQ higher than 7. The
	Windows Sound System (WSS) can use IRQ 7, 9, 10, or 11. If there is a known
	working configuration using IRQ 7, Windows 95 will use the existing
	configuration. If there is no existing configuration using IRQ 7, Windows 95
	will assign IRQ 7 to a device only as a last resort in order to not conflict
	with the Enhanced Capabilities port (ECP).
	
	The following games are known to fail to detect the WSS sound card:
	
	- 7th Guest
	
	- Kings Quest V
	
	RESOLUTION
	==========
	
	To correct this problem, change WSS to use IRQ 7. To do so, follow these steps:
	
	1. Use the right mouse button to click My Computer, and then click Properties on
	  the menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Sound Video And Game Controllers entry.
	
	4. Click the MS Windows Sound System entry and then click the Properties button.
	
	5. Click the Resources tab.
	
	6. Change the Interrupt Request setting to 07.
	
	7. Click OK to accept the settings.
	
	After you make this change, the MS-DOS-based game should detect the WSS sound
	card as a Sound Blaster sound card.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
