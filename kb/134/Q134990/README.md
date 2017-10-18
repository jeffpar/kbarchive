---
layout: page
title: "Q134990: PCMCIA Hard Disks Not Recognized in Windows NT 3.51"
permalink: kb/134/Q134990/
---

## Q134990: PCMCIA Hard Disks Not Recognized in Windows NT 3.51

	Article: Q134990
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 3.51 Disk Administrator and File Manager do not recognize a PCMCIA
	hard disk on the computer. All other PCMCIA devices, such as modems and network
	interface cards, are detected and operate properly.
	
	CAUSE
	=====
	
	This problem occurs if the startup option for the PCMCIA driver is set to SYSTEM
	in Control Panel Devices.
	
	RESOLUTION
	==========
	
	To correct this problem, reset the startup option for the PCMCIA driver to BOOT
	and restart Windows NT.
	
	Additional query words: prodnt hd pcmcia.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
