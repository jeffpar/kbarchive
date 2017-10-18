---
layout: page
title: "Q95092: EMM386 Err Msg: Unable to Create Page Frame"
permalink: kb/095/Q95092/
---

## Q95092: EMM386 Err Msg: Unable to Create Page Frame

	Article: Q95092
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,4.01a,4.0a,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.0a, 4.01, 4.01a, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If EMM386 is unable to find 64 kilobytes (K) of contiguous memory in the upper
	memory area, it cannot create an expanded memory page frame and displays the
	following error message:
	
	  Unable to create page frame
	
	WORKAROUND
	==========
	
	If do not want expanded memory for your system, you can substitute the NOEMS
	switch for the RAM switch in your EMM386 DEVICE command in CONFIG.SYS.
	
	However, if you do want expanded memory, you can try establishing a page frame in
	a portion of the upper memory area not normally used by EMM386. You can try
	putting the page frame in the E000 memory block by following these steps:
	
	Note: Do not try the following procedure if you have an IBM model PS/2 computer.
	
	1. To create a startup floppy disk, insert a floppy disk in drive A and type the
	  following:
	
	  " sys c: a:
	  copy c:\config.sys a:
	  copy c:\autoexec.bat a: " (without the quotation marks)
	
	  NOTE: If you are using MS-DOS 4.x you must also copy COMMAND.COM to drive a.
	  For example, type "copy c:\command.com a:" (without the quotation marks) at
	  the MS-DOS command prompt and then press ENTER.
	
	2. Edit your CONFIG.SYS file and modify the EMM386 DEVICE command to look like
	  this:
	
	  device=c:\dos\emm386 m9 ram
	
	3. Remove the floppy disk from drive A and restart your computer.
	
	Your computer should restart normally, and you should no longer receive the page
	frame error message. If you have problems starting your computer, insert the
	startup floppy in drive A, restart your computer and copy the CONFIG.SYS file
	from drive A to drive C.
	
	Additional query words: err msg 4.00 4.00a 5.00 5.00a 4.0 4.0a 4.01 4.01a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.0,4.01,4.01a,4.0a,5.0,5.0a
	
	=============================================================================
	
