---
layout: page
title: "Q135182: No Volume Control in Voyetra AudioStation"
permalink: /kb/135/Q135182/
---

## Q135182: No Volume Control in Voyetra AudioStation

	Article: Q135182
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Voyetra AudioStation on a computer with an Aztec Washington 16
	sound card, you cannot control the volume of CDs or other controls from
	AudioStation. You can control these items using the Windows 95 Volume Control
	tool.
	
	CAUSE
	=====
	
	The driver for the Aztec Washington 16 sound card that is installed by Windows
	95 is not compatible with AudioStation.
	
	RESOLUTION
	==========
	
	A supplemental driver for the Aztec Washington 16 sound card is included on the
	Windows 95 CD-ROM. This driver is compatible with AudioStation. To install this
	driver, follow these steps:
	
	1. Restart your computer at an MS-DOS prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Command Prompt Only from the Startup menu.
	
	2. Copy the following files from the Drivers\Audio\PackBell folder on the
	  Windows 95 CD-ROM to the Windows\System folder on the hard disk:
	
	  Azt16.vxd
	  Azt16w.drv
	
	3. Restart your computer normally.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
