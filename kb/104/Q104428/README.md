---
layout: page
title: "Q104428: Satisfaxtion 400 Internal Modem Does Not Operate in Windows NT"
permalink: /kb/104/Q104428/
---

## Q104428: Satisfaxtion 400 Internal Modem Does Not Operate in Windows NT

	Article: Q104428
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
	
	The Intel SatisFAXtion 400 Internal Modem does not work with Windows
	NT. The SatisFAXtion 400 is software-configurable only and requires
	MS-DOS-based drivers to initialize correctly.
	
	
	Because the modem has no hardware-configurable switches, it requires
	that a configuration file and a device driver be loaded when the
	system is booted. Under an MS-DOS system, these are loaded in the
	CONFIG.SYS and AUTOEXEC.BAT files.
	
	In the CONFIG.SYS file, there is usually an entry similar to the
	following:
	
	  device=c:\fax\satisfax.sys /ioaddr=xxx
	
	In the AUTOEXEC.BAT file, there is usually the following entry:
	
	  casmgr
	
	Because the device driver attempts to communicate with the hardware
	directly, it does not work under Windows NT.
	
	NOTES:
	
	  The Intel SatisFAXtion 400e external modem does not have this problem.
	  There are hardware switches on the modem that allow it to be configured,
	  so the modem should work correctly with Windows NT.
	
	  Intel has release a Class 1 Windows NT driver for the SatisFAXtion 400i
	  modem. This driver works under Windows NT versions 3.1 and 3.5 and is
	  available from the Intel (GO:INTEL) forum of CompuServe. Filename:
	  400NT.EXE.
	
	For additional information, contact Intel technical support at (503)
	629-7000.
	
	
	The SatisFAXtion 400 modem is manufactured by Intel, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
