---
layout: page
title: "Q73405: DOSKEY Macros Supersede Internal Commands"
permalink: kb/073/Q73405/
---

## Q73405: DOSKEY Macros Supersede Internal Commands

	Article: Q73405
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a DOSKEY macro with the same name as an internal DOS command, the
	DOSKEY macro supersedes the internal command.
	
	To execute the internal command, type a space before the command name. For
	example, if you create the following DOSKEY macro
	
	  DOSKEY /MACRO DEL=COPY $1 $2
	
	then DEL behaves like the COPY command. However, if you type a space before DEL,
	the internal command DEL is executed.
	
	For more information on the DOSKEY command and creating macros, see page 453 of
	version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
