---
layout: page
title: "Q115287: DPT SCSI Controllers with Windows NT"
permalink: /kb/115/Q115287/
---

## Q115287: DPT SCSI Controllers with Windows NT

	Article: Q115287
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Distributed Processing Technology (DPT) produces two lines of controllers
	that work with Windows NT; they are classified as SmartCache Plus and
	SmartCache 3 controllers. Some of these controllers require firmware
	upgrades to function properly with Windows NT.
	
	The SmartCache 3 line of controllers need to have SmartROM version 2D1 and
	Firmware version 5E when you use them with Windows NT. According to DPT,
	this line of controllers support RAID 0, 1 & 5, but not on Windows NT.
	SmartCache 3 controllers include the following:
	
	  PM2021/9X
	  PM2122/9X
	  PM2022A/9X
	
	NOTE: A new driver is available for the PM2022A/9X for use with Windows NT
	version 3.5. This driver can be downloaded from the DPT bulletin board
	system (BBS) at 407-830-1070. The filename is NT351JJ.ZIP.
	
	The SmartCache Plus line of controllers need to have SmartROM version 1K
	and Firmware version 3G. SmartCache Plus controllers include the following:
	
	  PM2011B/9X
	  PM2012B/9X
	
	To obtain an upgrade, call DPT Customer Service at (407) 830-5522.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
