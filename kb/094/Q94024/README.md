---
layout: page
title: "Q94024: Exclude DASDDRVR.SYS When Running MemMaker"
permalink: /kb/094/Q94024/
---

## Q94024: Exclude DASDDRVR.SYS When Running MemMaker

	Article: Q94024
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MemMaker on an IBM PS/2, you should run it in the Custom
	installation mode and exclude the following device driver:
	
	  DASDDRVR.SYS
	
	MORE INFORMATION
	================
	
	DASDDRVR.SYS is an IBM system patch recommended by IBM for all PS/2s
	manufactured prior to June 1991. DASDDRVR.SYS stays resident only if it detects
	that your PS/2 needs the patch. If this is the case, it should install before
	other drivers that may make calls to the ROM BIOS (such as HIMEM.SYS and
	EMM386.EXE). DASDDRVR.SYS cannot be loaded high (especially if you are running
	Windows).
	
	To work around this problem:
	
	1. Run MemMaker in Custom mode and exclude DASDDRVR.SYS.
	
	  For more information on running MemMaker in Custom mode, see Chapter 6,
	  "Making More Memory Available," in the "MS-DOS 6 User's Guide."
	
	2. Edit the CONFIG.SYS file with a text editor and make the DASDDRVR.SYS line
	  the first line in the file.
	
	Additional query words: 6.22 6.0 30-286 50 50Z 55SX 60 70 80 PC-DOS 3.3 6.2 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
