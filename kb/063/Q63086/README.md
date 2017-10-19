---
layout: page
title: "Q63086: How MS-DOS PRINT.COM Can Take 80K of Memory"
permalink: /kb/063/Q63086/
---

## Q63086: How MS-DOS PRINT.COM Can Take 80K of Memory

	Article: Q63086
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Microsoft C program that has the following function:
	
	     system("PRINT /D:LPT1");
	
	When you exit your program and run MEM, you may notice that you now have 80K less
	memory than before you ran your program.
	
	CAUSE
	=====
	
	The first time the PRINT.COM program is run, approximately 5K of it becomes
	memory resident. This 5K stores various information such as the queue size (/q
	option) and the size of the internal buffer (/b option).
	
	If the PRINT command is issued from within the AUTOEXEC.BAT or from the command
	prompt, the memory resident portion will reside directly after the memory
	allocated for the operating system. For example:
	
	Before PRINT.COM is issued for first time:
	
	  +-------------------------+ 640K
	  |           .             |
	  |           .             | <- Pointer to next available memory location
	  |-------------------------|
	  |           |             |
	  |     Taken up by DOS     |
	  |     & device drivers    |
	  |           |             |
	  +-------------------------+ 0K
	
	After PRINT.COM is issued for first time:
	
	  +-------------------------+ 640K
	  |           .             |
	  |           .             |
	  |                         | <-- Pointer to next available memory location
	  |-------------------------|
	  |  Approx. 5K taken up    |
	  |  by resident part of    |
	  |      PRINT.COM          |
	  |-------------------------|
	  |           |             |
	  |     Taken up by DOS     |
	  |     & device drivers    |
	  |           |             |
	  +-------------------------+ 0K
	
	When the system() function is called from within a C program, it stores
	approximately 75K of overhead information in memory at the next available
	location. If you have not yet issued the PRINT.COM command from the AUTOEXEC.BAT
	file or from the command prompt, the next available location in memory will be
	just above the area taken up by the operating system (MS-DOS).
	
	After storing the overhead information in memory, the system() function is
	performed. In this case, the system() function issues the PRINT.COM command. If
	this is the first time the PRINT.COM command has been issued, the memory
	resident portion of PRINT.COM will take up the next 5K of available memory. It
	will look similar to the following diagram:
	
	  +-------------------------+ 640K
	  |           .             |
	  |           .             |
	  |                         | <- Pointer to next available memory location
	  |-------------------------|
	  |  Approx. 5K taken up    |
	  |  by resident part of    |
	  |      PRINT.COM          |
	  |-------------------------|
	  |   Approx. 74K taken up  |
	  |   by overhead of the    |
	  |   system () function    |
	  |-------------------------|
	  |           |             |
	  |     Taken up by DOS     |
	  |     & device drivers    |
	  |           |             |
	  +-------------------------+ 0K
	
	The last step of system() function is to free up the memory that was used to
	store the overhead information. When this happens, the 74K of memory is freed
	up; however, there is memory above that 74K block that is being used by the
	resident portion of the PRINT.COM, so the pointer to the next available memory
	location will not see that there is free memory below. For example:
	
	  +-------------------------+ 640K
	  |           .             |
	  |           .             |
	  |                         | <- Pointer to next available memory location
	  |-------------------------|
	  |  Approx. 5K taken up    |
	  |  by resident part of    |
	  |      PRINT.COM          |
	  |-------------------------|
	  |                         |
	  |  Approx. 74K of unused  |
	  |        memory           |
	  |                         |
	  |-------------------------|
	  |           |             |
	  |     Taken up by DOS     |
	  |     & device drivers    |
	  |           |             |
	  +-------------------------+ 0K
	
	As a result, the operating system is unable to use that 74K area of memory. That
	is why CHKDSK and MEM report that the PRINT.COM command issued from a C program
	takes up 80K of memory.
	
	To prevent this from happening, add the "PRINT /D:LPT1" (without the quotation
	marks) line to your AUTOEXEC.BAT file or issue the PRINT command from the
	command prompt.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
