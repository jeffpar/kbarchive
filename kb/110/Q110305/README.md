---
layout: page
title: "Q110305: INFO: Windows NT Reads Environment Variables from AUTOEXEC.BAT"
permalink: /kb/110/Q110305/
---

## Q110305: INFO: Windows NT Reads Environment Variables from AUTOEXEC.BAT

	Article: Q110305
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0,6.11
	Operating System(s): 
	Keyword(s): kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Macro Assembler (MASM), version 6.11 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At boot time, Windows NT reads the AUTOEXEC.BAT file and sets any environment
	variables that do not conflict with Windows NT settings. These environment
	variables may affect the way some programs work.
	
	MORE INFORMATION
	================
	
	Environment variables may be used to set compiler, assembler, and linker
	options. Settings made in this way will override settings made in the Visual
	Workbench and in makefiles. For example, the following setting will cause the
	compiler to pack structures on 1-byte boundaries, and this can cause problems
	when creating applications for Windows NT using Visual C++ 32-bit edition:
	
	  SET CL=-Zp1
	
	The following environment variables may affect development tools:
	
	  CL       : C/C++ compilers
	  ML       : MASM
	  FL32, FL : FORTRAN compilers
	  LINK     : Link
	
	Environment variables set in AUTOEXEC.BAT can only be seen in a console session.
	To see the current environment variable settings, run a console session and
	enter the following command at a prompt:
	
	  set
	
	The resulting list may include variable settings that do not show up when
	checking the system settings in the Control Panel. These variables are probably
	being set in the AUTOEXEC.BAT file.
	
	To prevent problems related to setting of unwanted environment variables in
	Windows NT, but to still allow them to be set when booting MS-DOS on a dual-
	boot machine, use a secondary batch file. For example, place all of the SET
	commands in the AUTOEXEC.BAT file in a file called DOSVARS.BAT. Save this file
	in the root directory of your boot drive (the same directory as AUTOEXEC.BAT).
	Add a line to execute this batch file to the end of AUTOEXEC.BAT (add it as the
	last line):
	
	     DOSVARS
	
	This will execute the batch file to set the variables and not return to the
	AUTOEXEC.BAT processing. You can also use the following
	
	     CALL DOSVARS
	
	at any point in the AUTOEXEC.BAT file so that processing of AUTOEXEC.BAT
	continues after the settings are made. Because Windows NT does not process
	nested batch files when reading AUTOEXEC.BAT, the variables will be set for DOS
	but not for Windows NT.
	
	Additional query words: MASM FORTRAN
	
	======================================================================
	Keywords          : kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbMASMsearch kbAudDeveloper kbFortranSearch kbvc150 kbvc100 kbZNotKeyword2 kbMASM611 kbVC500 kbVC600 kbVC200 kbFORTRANPower32100NT kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0,6.11
	
	=============================================================================
	
