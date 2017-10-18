---
layout: page
title: "Q57658: Setting the MS-DOS Errorlevel in a Program"
permalink: kb/057/Q57658/
---

## Q57658: Setting the MS-DOS Errorlevel in a Program

	Article: Q57658
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how you can set the errorlevel of a program for use by the
	MS-DOS batch file IF ERRORLEVEL command.
	
	MORE INFORMATION
	================
	
	If you are writing a program that is going to be invoked from within an MS-DOS
	batch file that uses the IF ERRORLEVEL command, you can use Interrupt 21H
	Function 4CH, "Terminate Process with Return Code" to set the errorlevel in your
	program. This function terminates the program and returns the errorlevel to the
	parent process, which in this case is COMMAND.COM running the batch file.
	
	The parameters for Interrupt 21H, Function 4CH are AH = 4CH, AL = errorlevel,
	followed by a call to Interrupt 21H. The errorlevel can be any value in the
	range 0 to 255 (0 to FF, hexadecimal).
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference" for versions 4.x.
	
	"Microsoft MS-DOS Programmer's Reference," version 4.0, Chapter 1, pages
	237-238.
	
	"MS-DOS Encyclopedia," Ray Duncan, Microsoft Press, Article 4, pages 115-117, and
	Section V, pages 1375-1376.
	
	"Advanced MS-DOS Programming," Ray Duncan, Microsoft Press, Section II, pages
	443-444.
	
	"The New Peter Norton Programmer's Guide to the IBM PC & PS/2," Peter Norton
	and Richard Wilton, Microsoft Press, Chapter 17, page 377.
	
	Additional query words: 6.22 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.00 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20 error level
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
