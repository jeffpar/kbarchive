---
layout: page
title: "Q69574: ANSI.SYS Escape Sequence Documentation Typographical Error"
permalink: kb/069/Q69574/
---

## Q69574: ANSI.SYS Escape Sequence Documentation Typographical Error

	Article: Q69574
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,3.3,3.3a,4.0,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.20, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ANSI escape sequence for changing the cursor position contains a
	typographical error in the documentation. The sequence listed in the ANSI.SYS
	section of the "Microsoft MS-DOS User's Reference" for MS-DOS versions 3.20
	through 4.01 should be changed from
	
	  ESC [Pl;PcF
	
	to:
	
	  " ESC [Pl;Pcf " (without the quotation marks)
	
	The ANSI escape code command characters ("f", in this case) are case sensitive
	and must be entered exactly as shown.
	
	This error has been corrected in the version 5.0 "Microsoft MS-DOS User's Guide
	and Reference".
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS330a kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.20,3.21,3.3,3.3a,4.0,4.01,5.0
	
	=============================================================================
	
