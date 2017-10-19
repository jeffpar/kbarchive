---
layout: page
title: "Q81819: Exit Codes or Errorlevels Set by MS-DOS Commands"
permalink: /kb/081/Q81819/
---

## Q81819: Exit Codes or Errorlevels Set by MS-DOS Commands

	Article: Q81819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Several MS-DOS commands set a value detectable using the IF ERRORLEVEL command.
	These values are called "errorlevels," "return codes," or "exit codes." These
	commands are:
	
	- BACKUP
	
	- CHKDSK
	
	- CHOICE
	
	- DEFRAG (codes defined in versions 6.x)
	
	- DELTREE
	
	- DISKCOMP
	
	- DISKCOPY
	
	- DOSKEY
	
	- FIND
	
	- FORMAT
	
	- GRAFTABL (codes defined in versions 3.3x and later)
	
	- KEYB (codes defined in versions 4.x and later)
	
	- MOVE
	
	- MSAV (codes defined in versions 6.0 and later)
	
	- REPLACE
	
	- RESTORE
	
	- SCANDISK (codes defined in versions 6.2 and later)
	
	- SETVER (codes defined in versions 5.x and later)
	
	- XCOPY
	
	MORE INFORMATION
	================
	
	Any program in the MS-DOS environment can set an exit value that can be detected
	with IF ERRORLEVEL. Any MS-DOS command can return a value, but only the above
	commands have exit codes defined in the MS-DOS specifications. Return values
	from other commands should not be relied upon, as they may be different for
	different versions and dialects of MS-DOS.
	
	None of the internal MS-DOS commands have defined return codes. An external
	command is a separate MS-DOS program; internal commands are contained within
	COMMAND.COM and are always available for use when the MS-DOS prompt is active.
	
	You can determine if a command is internal or external by checking your MS-DOS
	documentation. In MS-DOS 5.0 and 5.0a, commands are marked as internal or
	external in the chart that accompanies each command in Chapter 14 of the
	"Microsoft MS-DOS User's Guide and Reference" manual. Earlier versions of the
	manual include a boxed E or I symbol on the upper outside corner of the page to
	denote external or internal.
	
	Customers have suggested that exit codes be defined for all appropriate MS-DOS
	commands (both internal and external). This feature is under review and will be
	considered for inclusion in a future release.
	
	Additional query words: 3.2 3.20 3.21 3.3 3.30 3.3a 3.30a 4.0 4.00 4.0a 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS622 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.22
	
	=============================================================================
	
