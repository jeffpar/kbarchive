---
layout: page
title: "Q75463: Plus Hardcard II Drivers and MS-DOS 5.x"
permalink: kb/075/Q75463/
---

## Q75463: Plus Hardcard II Drivers and MS-DOS 5.x

	Article: Q75463
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The drivers available for the Plus Hardcard II are both compatible with the
	Microsoft MS-DOS 5 Upgrade and with Microsoft Windows.
	
	Versions 1.5 and 1.7 of the ATDOSHC2.SYS drivers work with MS-DOS 5.0, but may
	have trouble with EMM386.EXE or enhanced mode Windows.
	
	If using EMM386, the address range of the adapter must be excluded using the X=
	parameter with EMM386.EXE. If using enhanced mode Windows, the address range of
	the adapter must be excluded using the EMMExclude= command in the [386Enh]
	section of the SYSTEM.INI file.
	
	If you have other problems loading a Plus Hardcard driver, make sure it is the
	last device loaded in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	ATDOSHC2.SYS version 1.5 is dated 5/17/90, and ATDOSHC2.SYS version 1.7 is dated
	11/7/90.
	
	Plus Development has a bulletin board that can be reached by calling (408)
	434-1664. A Plus Hardcard II customer may download the latest driver, version
	1.7, but it is not necessarily recommended, because version 1.5 is fully
	compatible with MS-DOS 5.0.
	
	Other 386-specific memory managers and software, including QEMM, 386 to the Max,
	and NetRoom may also require that the address range used by the Plus Hardcard be
	excluded. See your software documentation for details.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these product's performance
	or reliability.
	
	Additional query words: hard card plus 2 5.00 5.00a 3.10 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
