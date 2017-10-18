---
layout: page
title: "Q71247: Semicolon, Equal Sign As Arguments in Batch File"
permalink: kb/071/Q71247/
---

## Q71247: Semicolon, Equal Sign As Arguments in Batch File

	Article: Q71247
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a semicolon (;) or equal sign (=) is used as a command line argument in a
	batch file, it is treated as a blank space.
	
	MORE INFORMATION
	================
	
	For example, in the following batch file, TEST.BAT,
	
	     echo %1 %2 %3
	
	the command line and resulting output appear as follows:
	
	  Command Line       Output
	  ------------       ------
	
	  test a=b           a b
	  test a;b           a b
	  test ;ab           ab
	  test =             ECHO is on (parsed as test)
	  test ;             ECHO is on
	
	For more information, query on the following words:
	
	  " equal and sign and characters and batch " (without the quotation marks)
	
	Additional query words: 6.22 4.0 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
