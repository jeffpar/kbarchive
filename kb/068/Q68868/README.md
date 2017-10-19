---
layout: page
title: "Q68868: Unable to run Standard Mode Windows with EMM386"
permalink: /kb/068/Q68868/
---

## Q68868: Unable to run Standard Mode Windows with EMM386

	Article: Q68868
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run MS-DOS with Windows 3.0 in standard mode, you receive the
	following error message:
	
	  Cannot run Windows in standard mode;
	
	  Check to ensure you are not running other protected-mode software, or run in
	  real mode.
	
	This message occurs if you have installed EMM386.EXE and either expanded memory
	or UMBs have been allocated by EMM386.EXE. This puts your computer into
	protected mode, thus preventing you from running Windows in standard mode.
	
	MORE INFORMATION
	================
	
	If EMM386.EXE is installed with either the RAM or NOEMS switch to allocate upper
	memory blocks (UMBs) and DOS=UMB is in the CONFIG.SYS, UMBs have been allocated
	to MS-DOS.
	
	If you have EMM386.EXE installed to provide expanded memory only and expanded
	memory is not being used, Windows will turn off EMM386.EXE and run normally.
	When EMM386.EXE is providing UMB support, or if expanded memory is being used,
	EMM386.EXE cannot be turned off, so you are no longer able to run Windows in
	standard mode.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22; WINDOWS:3.0
	
	=============================================================================
	
