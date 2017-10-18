---
layout: page
title: "Q106248: 32-Bit File Access Requires MS-DOS 6.2 DoubleSpace"
permalink: kb/106/Q106248/
---

## Q106248: 32-Bit File Access Requires MS-DOS 6.2 DoubleSpace

	Article: Q106248
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use 32-bit file access (VFAT) with DoubleSpace, Microsoft Windows for
	Workgroups version 3.11 requires that you install MS-DOS 6.2 or later.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 does not allow 32-bit file access on a system that
	has the DBLSPACE.BIN file from MS-DOS 6.0 loaded. MS-DOS 6.2 is required for
	compatibility with 32-bit file access.
	
	If DBLSPACE.BIN from MS-DOS 6.0 is loaded in memory, the 32-bit file access
	option is disabled. If you are using MS-DOS 6.0 and do not have any compressed
	drives mounted but DBLSPACE.BIN is loaded in memory, 32-bit file access is still
	unavailable. You must unload DBLSPACE.BIN from memory to enable 32-bit file
	access.
	
	NOTE: Microsoft recommends that you make a backup copy of your DBLSPACE.INI file
	before you use the following procedure.
	
	To unload DBLSPACE.BIN, proceed as follows:
	
	1. Remove the system and hidden attributes from the DBLSPACE.INI file in the
	  root directory of your startup drive by typing the following at the MS-DOS
	  command prompt and then pressing ENTER:
	
	  attrib -s -h -r c:\dblspace.ini
	
	2. Rename the DBLSPACE.INI file by typing the following at the MS-DOS command
	  prompt and then pressing ENTER:
	
	  ren c:\dblspace.ini dblspace.ino
	
	3. Restart your computer by pressing CTRL+ALT+DEL.
	
	If you want to use any compressed drives on your system, you must rename the
	DBLSPACE.INO file to DBLSPACE.INI and restart your computer.
	
	For more information on how DBLSPACE.BIN determines if it should remain in
	memory, query on the following words in the Microsoft Knowledge Base:
	
	  dblspace.bin and dblspace.ini and memory
	
	Additional query words: 3.11 6.20 6.21 6.226.2 dblspace grey greyed gray grayed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.11
	
	=============================================================================
	
