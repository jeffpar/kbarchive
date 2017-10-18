---
layout: page
title: "Q132769: Cannot Play Wave Files on HP Vectra with Sound Blaster"
permalink: kb/132/Q132769/
---

## Q132769: Cannot Play Wave Files on HP Vectra with Sound Blaster

	Article: Q132769
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
	
	You may not be able to play 8-bit wave (.wav) files on a Hewlett-Packard (HP)
	Vectra computer with a Sound Blaster sound card installed. When this problem
	occurs, you can play 16-bit wave files and MIDI file correctly.
	
	CAUSE
	=====
	
	This problem can be caused by a resource conflict between the sound card and the
	ECP port. On the HP Vectra computer, the ECP port is configured in the
	computer's CMOS settings. If the ECP port is configured in the computer's CMOS
	settings to use DMA channel 1, and the Sound Blaster sound card is also
	configured to use DMA channel 1, a resource conflict exists. However, Windows 95
	cannot detect that the ECP port is using DMA channel 1, and does not report that
	a conflict exists.
	
	RESOLUTION
	==========
	
	To resolve the conflict, change the DMA channel for the sound card. To do so,
	follow these steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Device Manager tab, double-click Sound, Video, And Game Controllers.
	
	4. Double-click the Sound Blaster sound card.
	
	5. On the Resources tab, click the Use Automatic Settings check box to clear it.
	
	6. Click Direct Memory Access in the Resource Type column, then click Change
	  Setting.
	
	7. Click OK until you are prompted to restart your computer, then click Yes.
	
	MORE INFORMATION
	================
	
	This problem occurs only on computers (such as the HP Vectra) that have an ECP
	port that is configured in the computer's CMOS settings.
	
	Additional query words: soundblaster hpvectra
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
