---
layout: page
title: "Q163888: Installing Sound Blaster 16 Value Disables PS/2 Mouse"
permalink: /kb/163/Q163888/
---

## Q163888: Installing Sound Blaster 16 Value Disables PS/2 Mouse

	Article: Q163888
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an ISA Plug and Play device, such as a Sound Blaster 16 Value
	sound card, your PS/2-style mouse may stop responding.
	
	CAUSE
	=====
	
	This problem can occur on computers on which the Plug and Play BIOS (rather than
	Windows 95) assigns resources to ISA Plug and Play devices. The Plug and Play
	BIOS may assign IRQ 12 to the IDE drive and disable the mouse port.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the BIOS Plug and Play support in the computer's
	CMOS settings to allow Windows 95 to configure the hardware.
	
	For information about your computer's BIOS and its capabilities, consult your
	computer's documentation or manufacturer.
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
