---
layout: page
title: "Q139735: NTBackup Stops Responding w/ STB PowerGraph 64V Video Adapter"
permalink: /kb/139/Q139735/
---

## Q139735: NTBackup Stops Responding w/ STB PowerGraph 64V Video Adapter

	Article: Q139735
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Hewlett-Packard Surestore 2000e tape drive with the STB
	PowerGraph 64V video adapter and run NTBackup, the backup process starts
	correctly but will stop responding the system during the backup. The point at
	which the system stops responding appears to be random. The problem results from
	a conflict with the STB PowerGraph 64V video card BIOS.
	
	
	MORE INFORMATION
	================
	
	This problem affects STB PowerGraph 64V Video cards with BIOS rev 1.4. The
	problem is expected to be fixed in the next release of the video BIOS, which
	will be version 1.5.
	
	WORKAROUND
	==========
	
	Boot Windows NT with the VGA option at the Multiboot screen, or run the machine
	with the default 640x480 VGA video driver.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
