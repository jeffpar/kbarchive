---
layout: page
title: "Q85288: Disk Controllers that Are Compatible with 32-Bit Disk Access"
permalink: /kb/085/Q85288/
---

## Q85288: Disk Controllers that Are Compatible with 32-Bit Disk Access

	Article: Q85288
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 3.1 ships with one virtual hard-drive controller device:
	WDCTRL. WDCTRL supports hard-drive controllers that are compatible with the
	Western Digital WD1003 standard. According to Western Digital, it has two
	hard-drive controller cards that are compatible with Windows 3.1 and the 32- Bit
	Disk Access feature.
	
	MORE INFORMATION
	================
	
	WD1006 Controller Card
	----------------------
	
	The Western Digital WD1006 hard-drive controller is compatible with the WD1003
	hard-drive controller in some cases. If the card is configured correctly, it
	should work correctly with the 32-Bit Disk Access feature.
	
	WD1006 has a jumper setting to specify whether the drive format is compatible
	with the WD1003 standard. If the drive has more than eight heads, the drive is
	slightly incompatible with the WD1003 standard when used with the WD1006
	hard-drive controller card. This is due to the way the WD1006 numbers the heads
	differently than the WD1003. Using a jumper to connect pins seven and eight will
	correct this problem. This problem does not occur if the hard drive has less
	than eight heads.
	
	Some original equipment manufacturers (OEM) of this hard-drive controller may not
	follow the same jumper settings. Consult your documentation or call your
	manufacturer before changing these jumper settings.
	
	WD1007A ESDI Controller Card
	----------------------------
	
	According to Western Digital, the WD1007A ESDI controller card is 100-percent
	compatible with the WD1003 controller, and can be used with the 32-Bit Disk
	Access feature in Windows 3.1.
	
	The Western Digital products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: fastdisk 3.1 3.11 3.10 WD1003 7 8 wd 1003 1006 1007 disk hard-disk hard drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
