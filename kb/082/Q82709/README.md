---
layout: page
title: "Q82709: SMARTDRV Cache Status -- What Does the Buffering Value Mean?"
permalink: /kb/082/Q82709/
---

## Q82709: SMARTDRV Cache Status -- What Does the Buffering Value Mean?

	Article: Q82709
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS, Windows, and Windows for Workgroups, the character-mode display of
	the status of SMARTDrive has a column for buffering status. The entry in this
	column can be "yes," "no," or "-" (MINUS SIGN). This article describes the
	meaning of these entries.
	
	MORE INFORMATION
	================
	
	The following is an example of the printout you receive if you access SMARTDrive
	from the command prompt by typing smartdrv and pressing the ENTER key:
	
	  Microsoft SMARTDrive Disk Cache version 4.0
	  Copyright 1991,1992 Microsoft Corp.
	
	  Cache size: 1,048,576 bytes
	  Cache size while running Windows: 1,048,576 bytes
	
	              Disk Caching Status
	  drive   read cache   write cache   buffering
	  --------------------------------------------
	    A:       yes           no           no
	    B:       yes           no           no
	    C:       yes           yes          yes
	    F:       yes           yes          -
	    G:       yes           no           no
	
	  For help, type "Smartdrv /?"
	
	The column labeled "buffering" describes the state of double buffering. "Yes" in
	this column means that double buffering is being performed on the corresponding
	drive. "No" means that buffering is not being performed on the corresponding
	drive. The state indicated by a MINUS SIGN means that SMARTDRV.EXE cannot
	determine if buffering is needed.
	
	SMARTDRV.EXE watches each data transfer to determine the need for buffering. If
	it sees a transfer to an upper memory block (UMB), it may be unable to determine
	if there is a need for double buffering.
	
	NOTE: The double buffer driver must be loaded for SMARTDRV.EXE to determine if
	there is a need for buffering. If the double buffer driver is not loaded, all
	entries in the buffering column read "no." The double buffer driver is loaded
	from the CONFIG.SYS file. The following is a sample line to install the double
	buffer driver:
	
	       DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	Even if you install the double buffer driver, SMARTDRV.EXE may decide that it is
	not needed. In this case, the double buffer driver is not loaded and does not
	take up any memory.
	
	You can force the double buffer driver to load even if SMARTDRV.EXE decides that
	it is unnecessary. Adding a PLUS SIGN (+), as in the following example, forces
	the double buffer to load:
	
	       DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER+
	
	Additional query words: 3.00 3.10 3.11 6.00 6.20 winfest 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
