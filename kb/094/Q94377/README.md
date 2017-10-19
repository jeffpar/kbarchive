---
layout: page
title: "Q94377: MemMaker Cannot Process Files with More Than 511 Lines"
permalink: /kb/094/Q94377/
---

## Q94377: MemMaker Cannot Process Files with More Than 511 Lines

	Article: Q94377
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your CONFIG.SYS, AUTOEXEC.BAT, or SYSTEM.INI file has 512 or more lines,
	MemMaker displays the following error message:
	
	  MemMaker cannot continue because the AUTOEXEC.BAT, CONFIG.SYS, or Windows
	  SYSTEM.INI file is too long. The file must be less than 512 lines long
	
	  * To undo MemMaker's changes, press ENTER.
	
	WORKAROUND
	==========
	
	To work around this problem, exit MemMaker, reduce the size of the file that is
	causing the error, and restart MemMaker.
	
	MORE INFORMATION
	================
	
	You can use MS-DOS Editor to determine the length of a text file. For example:
	
	1. Start MS-DOS Editor and load a text file such as AUTOEXEC.BAT. For example,
	  type the following and press ENTER:
	
	  " EDIT \AUTOEXEC.BAT " (without the quotation marks)
	
	2. Press CTRL+END.
	
	  The number of lines in the text file is displayed in the lower-right corner of
	  the screen.
	
	Additional query words: 6.22 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
