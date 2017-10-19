---
layout: page
title: "Q67758: PRB: MASM Err Msg: Unable to Open Input File: options.asm"
permalink: /kb/067/Q67758/
---

## Q67758: PRB: MASM Err Msg: Unable to Open Input File: options.asm

	Article: Q67758
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running MASM.EXE, the following fatal error occurs:
	
	  Unable to open input file: options.asm
	
	CAUSE
	=====
	
	The MASM environment variable "MASM" is set to "options".
	
	RESOLUTION
	==========
	
	To work around this problem, the environment variable needs to be cleared. This
	can be done as follows at the DOS command prompt:
	
	     SET MASM=<ret>
	
	MORE INFORMATION
	================
	
	When the RUNME program is executed to install MASM, it tells you to set your
	AUTOEXEC.BAT file as follows:
	
	  MOUSE                 (load mouse driver if you have a mouse)
	  SET PATH=c:\masm...   (directory containing MASM and utilities)
	  SET INCLUDE=c:\masm...(directory containing include files)
	  SET LIB=d:\masm....   (directory containing library & object files)
	  SET MASM=options      (standard assembly options)
	  SET LINK=options      (standard link options)
	  SET TMP=tempDir       (LINK work directory - use RAM disk if
	                         available)
	
	People often set their AUTOEXEC.BAT files literally as the program shows. The
	intent is to show that if you always want to assemble with options /Zi and /Mx
	and link with option /CO, you could use
	
	     SET MASM=/Zi /Mx
	     SET LINK=/CO
	
	to achieve this. When "MASM" is set to "options", the driver is passed "options"
	and it is treated as a source file name, rather than an option, since it does
	not begin with a backslash (\).
	
	Additional query words: 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	
	=============================================================================
	
