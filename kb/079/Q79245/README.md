---
layout: page
title: "Q79245: DOSKEY Macros Must Be Executed from the Command Prompt"
permalink: kb/079/Q79245/
---

## Q79245: DOSKEY Macros Must Be Executed from the Command Prompt

	Article: Q79245
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible for a program or batch file to execute a DOSKEY macro. All
	DOSKEY macros must be executed from the command prompt.
	
	One workaround is to incorporate the DOSKEY commands into a batch file.
	
	MORE INFORMATION
	================
	
	The MS-DOS DOSKEY.COM program is a utility included with the MS-DOS 5 or later
	Upgrade. The DOSKEY utility allows MS-DOS 5.0 or later commands to be recalled
	and edited. DOSKEY may also be used to develop command line macros (DOSKEY
	macros).
	
	DOSKEY macros are used to store a series of commands that may be recalled by
	entering the name of the macro.
	
	The DOSKEY utility uses software interrupt number 16 (INT 16) to poll keyboard
	ready and to fetch characters. Because batch files and programs do not send
	their commands through this interrupt, DOSKEY has no way to "see" or intercept a
	request to execute a macro.
	
	As a possible solution for batch file programming, replace the desired DOSKEY
	macros with corresponding batch file commands.
	
	For more information about DOSKEY and DOSKEY macros, see pages 448-454 of the
	version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	For more information on batch file programming, see Chapter 10 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 6.22 Batch Files 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
