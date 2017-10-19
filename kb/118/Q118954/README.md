---
layout: page
title: "Q118954: System Hangs When Accessing Sound Card Controlled CD-ROM Drive"
permalink: /kb/118/Q118954/
---

## Q118954: System Hangs When Accessing Sound Card Controlled CD-ROM Drive

	Article: Q118954
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
	
	When you press CTRL+ALT+DEL to reboot and then try to use the Sound Blaster or
	Media Vision Pro Audio "SCSI" CD-ROM drive, Windows 95 stops responding (hangs).
	
	CAUSE
	=====
	
	If your system hangs and you have to press CTRL+ALT+DEL, the system may not find
	the CD-ROM drive after rebooting. If this occurs, trying to use the CD-ROM
	causes the system to hang again.
	
	RESOLUTION
	==========
	
	To work around this problem, press the reset button on your computer or turn off
	the computer and then turn it on again. To avoid this problem, load only the
	protected-mode drivers for the Sound Blaster or Media Vision Pro Audio on-board
	"SCSI" interface proprietary CD-ROM devices.
	
	MORE INFORMATION
	================
	
	If Windows 95 is relying on real-mode drivers for the Sound Blaster or Media
	Vision Pro Audio on-board CD-ROM interface, sometimes CTRL+ALT+DEL does not
	reset this interface. If so, you no longer have access to anything on the CD-ROM
	because its drivers were unable to load.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: sbpro sb16 trantor SCSI (read IDE) 3rdparty scuzzy
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
