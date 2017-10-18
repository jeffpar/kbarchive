---
layout: page
title: "Q83844: Incorrect Syntax for MONOUMB2.386 in Windows 3.1 README.WRI"
permalink: kb/083/Q83844/
---

## Q83844: Incorrect Syntax for MONOUMB2.386 in Windows 3.1 README.WRI

	Article: Q83844
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the README.WRI file included with Windows 3.1, section 4.1 gives an erroneous
	syntax for installing the MONOUMB2.386 device driver.
	
	MORE INFORMATION
	================
	
	The syntax reported for expanding the device driver is given as:
	
	     EXPAND A:\MONOUMB2.38_ C:\WINDOWS\SYSTEM
	
	Using this syntax causes the placement of the expanded file into the
	WINDOWS\SYSTEM subdirectory with an incorrect file name. The correct syntax is:
	
	     EXPAND A:\MONOUMB2.38_ C:\WINDOWS\SYSTEM\MONOUMB2.386
	
	If the file has already been expanded with the incorrect syntax, all that is
	necessary is to rename the file to the correct file extension. From the
	WINDOWS\SYSTEM subdirectory, type the following command:
	
	  REN MONOUMB2.38_ MONOUMB2.386
	
	This will prevent the following error message from appearing when you attempt to
	run Windows in 386 enhanced mode:
	
	  Unable to load a device driver that may be necessary to run Windows in 386
	  Enhanced Mode: MONOUMB2.386
	
	Additional query words: 3.10 documentation error
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
