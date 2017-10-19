---
layout: page
title: "Q81042: Terminal: Cannot Save Files with MS-DOS Device Driver Names"
permalink: /kb/081/Q81042/
---

## Q81042: Terminal: Cannot Save Files with MS-DOS Device Driver Names

	Article: Q81042
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	When you save files using Terminal, MS-DOS device drivers cannot be
	used as valid filenames. If you attempt to save a file that is an
	MS-DOS device filename such as COM1, the following error occurs:
	
	  Cannot write file; check to see if your disk is full.
	
	In this case, the disk is not actually full. Instead, an MS-DOS device
	driver filename is being used or is simply reserved. Below is a list
	of MS-DOS device driver filenames that produce the error above:
	
	  CON
	  AUX
	  CLOCK$
	  COM1
	  COM2
	  COM3
	  COM4
	  PRN
	  LPT1
	  LPT2
	  LPT3
	
	Additional query words: 3.0 3.0a 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
