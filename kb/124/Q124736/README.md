---
layout: page
title: "Q124736: Installing HP 4V/MV Driver May Disable HP Printing in NT 3.1"
permalink: kb/124/Q124736/
---

## Q124736: Installing HP 4V/MV Driver May Disable HP Printing in NT 3.1

	Article: Q124736
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	The Windows NT printer drivers for the Hewlett-Packard (HP) printer models
	4V and 4MV are for Windows NT version 3.5 only. If you install these
	drivers in Windows NT version 3.1, all printing to any HP printer which is
	installed and uses PCL5 will be disabled.
	
	NOTE: Any clients using Connect to Printer to a Windows NT version 3.1
	Print Server with the HP 4V/MV driver installed will also be affected. The
	driver will be copied to that computer as well, affecting any HP PCL5
	printers installed locally.
	
	To restore printing to HP printers in Windows NT version 3.1 after the
	4V/MV driver is installed, use Windows NT EXPAND.EXE to expand the
	following files from the Windows NT version 3.1 installation media to the
	%SYSTEMROOT%\SYSTEM32\SPOOL\DRIVERS\W32X86 directory.
	
	  HPPCL5MS.DLL
	  RASDD.DLL
	  RASDDUI.DLL
	
	Then remove any printers that were using the HP 4V/MV driver. This driver
	will not work in Windows NT version 3.1.
	
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10
	
	=============================================================================
	
