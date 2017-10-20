---
layout: page
title: "Q154637: Computer Hangs with Mitsumi CD-ROM Drive"
permalink: /kb/154/Q154637/
---

## Q154637: Computer Hangs with Mitsumi CD-ROM Drive

{% raw %}

	Article: Q154637
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are accessing the Mitsumi CD-ROM drive in your computer, the screen may
	go blank and the computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the controller card for the CD-ROM drive is
	configured to use an I/O address, an IRQ line, and possibly a DMA channel.
	Windows NT 4.0 uses only the I/O address of the CD-ROM controller.
	
	RESOLUTION
	==========
	
	Disable the IRQ line (and DMA channel, if applicable) on the controller. Refer
	to the documentation included with your CD-ROM drive for instructions on
	changing the settings on the controller.
	
	
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
