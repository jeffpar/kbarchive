---
layout: page
title: "Q80575: Determining the Amount of Disk Space with Stacker"
permalink: kb/080/Q80575/
---

## Q80575: Determining the Amount of Disk Space with Stacker

	Article: Q80575
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The best way to accurately determine the amount of free space on a hard drive
	running Stacker is to run the Scheck utility.
	
	MORE INFORMATION
	================
	
	Stacker is a utility, manufactured by STAC Electronics, that performs hard disk
	file compression.
	
	To Run Scheck
	-------------
	
	1. Exit Windows (running an MS-DOS shell does not work).
	
	2. At an MS-DOS command line, type
	
	  scheck
	
	3. Press ENTER. A screen similar to the following should be displayed:
	
	  ------------------------------------------------------
	
	  Scheck 2.0 (c) Copyright 1990-1991 Stac...
	
	  Volume in Drive C has no label
	
	  No errors found
	
	  Stacker Drive Statistics:
	
	                  Stacker Drive           STACKVOL File
	                  Drive C:                D:\STACVOL.OOO
	                  -------------------     ------------------
	  Total Bytes:    94,994,432              47,498,240
	  Bytes Used:     76,947,456  (81.0)     41,699,840
	  Bytes Free:     18,046,976              5,798,400
	
	  Stacker Drive Compression Ratio = 1.8:1
	  Projected Bytes Free            =  10,575,872
	
	  ------------------------------------------------------
	
	Information about the amount of free space on the hard drive is on the Bytes Free
	row in the right column (for example, 5,798,400 in the example above).
	
	For further information concerning this report, please refer to the documentation
	for Stacker.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: Windows 3.0 3.00 3.0a 3.00a stack
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
