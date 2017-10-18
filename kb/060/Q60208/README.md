---
layout: page
title: "Q60208: PRINT.COM Does Not Print Binary Files"
permalink: kb/060/Q60208/
---

## Q60208: PRINT.COM Does Not Print Binary Files

	Article: Q60208
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS PRINT.COM utility does not print binary files properly. It expands
	tab characters to the appropriate number of space characters, and terminates
	when it encounters the EOF (CTRL+Z) character.
	
	The PRINT utility was designed to print TEXT files. It has been suggested that we
	add a command-line switch to allow PRINT to print binary files untranslated. The
	OS/2 PRINT utility has such a switch, /B.
	
	Additional query words: 2.x 3.00 3.10 3.20 3.21 3.22 3.30 3.30a 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.0
	
	=============================================================================
	
