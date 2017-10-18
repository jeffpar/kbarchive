---
layout: page
title: "Q96827: VSAFE Err Msg: &quot;...Is Trying to Modify System Memory&quot;"
permalink: kb/096/Q96827/
---

## Q96827: VSAFE Err Msg: &quot;...Is Trying to Modify System Memory&quot;

	Article: Q96827
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Each time you start your computer, you receive an error message stating that the
	system memory is being modified.
	
	CAUSE
	=====
	
	If you continually receive this error message, either you are running VSAFE with
	the /2+ parameter (which checks for programs that load as memory resident), or
	one of your programs is causing the error because it does not use the MS-DOS
	Interrupt 21 application program interface (API) function to load as memory
	resident.
	
	WORKAROUND
	==========
	
	To work around this problem, change the VSAFE /2+ parameter to /2-. This
	disables the memory check for standard memory-resident programs.
	
	If the warnings continue, note the program that causes the error message. This
	program is not using the standard method to load as a memory-resident program
	(Int 21h). Once you note which program is causing the problem and verify that it
	is not infected with a virus, load VSAFE after that program in the AUTOEXEC.BAT
	file.
	
	Additional query words: 6.22 6.00 win31 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
