---
layout: page
title: "Q104862: FORTRAN PowerStation 1.0 README.TXT: Executing and Debugging"
permalink: kb/104/Q104862/
---

## Q104862: FORTRAN PowerStation 1.0 README.TXT: Executing and Debugging

	Article: Q104862
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is from parts 6 and 7 of the Microsoft FORTRAN
	PowerStation README.TXT file located in the \F32\README directory.
	
	  Part 6: Using the Debugger
	  Part 7: Miscellaneous
	
	MORE INFORMATION
	================
	
	Part 6: Using the Debugger
	--------------------------
	
	Optimizing Debugging Speed
	--------------------------
	
	Because a program being debugged runs as a separate task under Windows, the speed
	at which the debugger operates depends upon how many other programs are being
	executed at the same time. If screen-swapping is disabled, FORTRAN Visual
	Workbench must yield control back to Windows, and any other program waiting for
	cycles is serviced along with the program being debugged in the remote monitor
	window. To improve the speed of the debugger, don't run other applications at
	the same time.
	
	Watching Complex Variables in Commons
	-------------------------------------
	
	Debugging code that has complex variables in common blocks causes the watch
	window to display them as characters. This affects common record variables. They
	are shown in the locals window as a single space rather than as a structure.
	
	Using Mixed Source/Asm during Debugging
	---------------------------------------
	
	You can only view Mixed Source/Asm (selected from the View menu) during a
	debugging session if you have not built the target with the /Ox option (optimize
	for time). (The release version will disable Mixed Source/Asm if the /Ox option
	is enabled in the Compiler Options dialog box.) If you attempt to view Mixed
	Source/Asm for a target built with the /Ox option, the debugger will not be able
	to show all of the assembly instructions. Unexpected results may occur.
	
	Viewing Strings and Arrays in the Locals Window
	-----------------------------------------------
	
	When you first step into a program or routine, you will not be able to see the
	values or variable-length strings or allocatable arrays until you step at least
	once inside the subprogram. This is because the lengths are not computed until
	after the debugger has begun executing subprogram code. Once you have stepped
	into the subprogram, you can view the values of single dimensional allocatable
	arrays.
	
	Debugging Very Large Programs
	-----------------------------
	
	Although it is possible to debug a program that has an executable file and symbol
	table that are close to (or larger than) the amount of physical memory in your
	PC, the debugger will take longer to load the symbols. This is because the
	Windows memory manager must swap portions of memory during loading.
	
	Part 7: Miscellaneous
	---------------------
	
	Running Programs
	----------------
	
	FORTRAN programs can be executed from the FORTRAN Visual Workbench either in a
	window or in full-screen mode. You select which to use in the Execute/Debug
	Options dialog box. FORTRAN programs can be run from an MS-DOS session within
	Windows either in a window or in full-screen mode. You can switch between these
	modes from within the MS-DOS session by pressing ALT+ENTER. You can also select
	the mode for a minimized MS-DOS session from the Settings dialog box.
	
	Programs that use graphics may not run properly within a window. In most cases,
	Microsoft Windows will ask you to switch to full-screen mode if the graphics
	mode is not supported by the graphics driver. Some graphics modes are only
	partially supported in a window. In this case, the results will depend upon
	which graphics routines are used by the program.
	
	For best results, we recommend that graphics programs are always executed in
	full-screen mode.
	
	Redistribution Rights
	---------------------
	
	You have the right to distribute the MS-DOS extender files DOSXMSF.EXE and
	DOSXNT.386 with programs that you create with FORTRAN PowerStation. There is no
	royalty required.
	
	The font files COURB.FON, HELVB.FON, and TMSRB.FON are owned by BitStream, Inc.
	If you want to distribute these files with a program, you will need get
	permission from BitStream.
	
	If you have any questions about redistribution rights, please contact Microsoft
	Product Support Services.
	
	About Other Text Files
	----------------------
	
	There are four other text files with information about Microsoft FORTRAN
	PowerStation.
	
	  Filename      Contents
	  ----------------------------------------------------------------
	  ADDENDA.TXT   Changes to the printed manuals
	  QUESTION.TXT  Answers to common questions about FORTRAN PowerStation
	  ERRORS.TXT    Additions and corrections to the error messages
	  VENDORS.TXT   Information about products from other vendors
	
	Additional query words: nofpsnt Phar Lap 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS
	Version           : :1.0
	
	=============================================================================
	
