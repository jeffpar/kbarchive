---
layout: page
title: "Q87278: MS-DOS Internal Commands and DOSKEY Macros in Program Manager"
permalink: /kb/087/Q87278/
---

## Q87278: MS-DOS Internal Commands and DOSKEY Macros in Program Manager

	Article: Q87278
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	3.00 3.00a 3.10 3.11| 3.x 4.x 5.x 6.00 6.20 6.21
	WINDOWS             | MS-DOS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To invoke an MS-DOS internal command or DOSKEY macro from within Windows Program
	Manager, use the following syntax:
	
	  command.com /c <internal commandname>
	  command.com /c <macroname>
	
	These commands run the internal command or macro and then immediately return to
	Windows Program Manager. If the internal command or macro requires a parameter,
	you should include that as well.
	
	MORE INFORMATION
	================
	
	The Windows Program Manager File Run command and program items allow you to
	start program files (.COM, .EXE, .BAT, .PIF). Program Manager does not recognize
	MS-DOS internal commands and DOSKEY macros. The DOSKEY utility was added to
	MS-DOS in MS-DOS version 5.0.
	
	The "command.com /c" syntax causes Program Manager to run a copy of the MS-DOS
	program that processes internal commands, COMMAND.COM. If DOSKEY was loaded
	before starting Windows, DOSKEY will also be active and able to process DOSKEY
	macros loaded before starting Windows.
	
	Example 1
	---------
	
	To perform the command "DIR /P" from Program Manager:
	
	1. From the File menu, choose Run.
	
	2. Type "command /c dir /p" (without the quotation marks) in the Command Line
	  box.
	
	3. Choose the OK button.
	
	Example 2
	---------
	
	To create a program item for a DOSKEY macro called "MEM":
	
	1. From the File menu, choose New.
	
	2. Select the Program Item option button.
	
	3. Choose the OK button.
	
	4. In the Command Line box, type "command.com /c mem" (without the quotation
	  marks).
	
	5. Choose the OK button.
	
	Note: If you enter "command" in the Command Line box of the Program Item
	Properties dialog, Program Manager will change this to "command.exe."
	
	For more information on COMMAND, see the "COMMAND" entry in the reference section
	of the "Microsoft MS-DOS User's Guide and Reference." For version 5.0, this is
	located on pages 384-386.
	
	For more information on DOSKEY, see pages 169-181 and 448-454 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	To determine if an MS-DOS command is external or internal, check that command's
	entry in the reference section of the "Microsoft MS-DOS User's Guide and
	Reference", or query on:
	
	  internal and external and msdos and commands
	
	Additional query words: 3.00 3.00a 3.10 3.20 3.21 3.30 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
