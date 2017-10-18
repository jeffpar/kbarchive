---
layout: page
title: "Q111263: PRB: Causes of DX1020 or R6915 Unhandled Exception Error"
permalink: kb/111/Q111263/
---

## Q111263: PRB: Causes of DX1020 or R6915 Unhandled Exception Error

	Article: Q111263
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.0a,1.5,1.51,1.52,6.11,7.0
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft FORTRAN Compiler for MS-DOS 
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you build an application in Microsoft C, Microsoft Visual C++, Microsoft
	FORTRAN, Microsoft FORTRAN PowerStation, or Microsoft Macro Assembler (MASM),
	one of the MS-DOS-extended development tools returns an unhandled exception
	error message such as:
	
	  run-time error R6915 -
	  DOSX16: unhandled exception
	
	-or-
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	  Stack fault;
	  contact Microsoft Support Services
	
	-or-
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	  General protection fault;
	  contact Microsoft Support Services
	
	-or-
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	  Page fault;
	  contact Microsoft Support Services
	
	CAUSE
	=====
	
	Unhandled exception errors can be caused by a system configuration problem such
	as an ill-behaved device driver, a terminate-and-stay-resident (TSR) program, or
	a memory manager that is not configured correctly for the hardware in a
	particular machine.
	
	RESOLUTION
	==========
	
	Make backups of both the CONFIG.SYS and the AUTOEXEC.BAT files. Edit your
	CONFIG.SYS and AUTOEXEC.BAT files to remove all unnecessary device drivers and
	TSRs. You can typically get by with a CONFIG.SYS file that contains only a
	FILES= statement and a DEVICE=path\HIMEM.SYS. Depending on the hardware or
	configuration of a particular machine, other device drivers might be required.
	The AUTOEXEC.BAT file can contain a PATH statement and any required SET
	statements, but should not invoke any programs.
	
	After creating clean CONFIG.SYS and AUTOEXEC.BAT files, shut down and restart
	your system. Try running the development tool that generated the unhandled
	exception error from the MS-DOS prompt, without starting Windows or any other
	programs. If at this point the problem goes away, substitute items back into
	your CONFIG.SYS and AUTOEXEC.BAT files until you can isolate which device driver
	or TSR caused the problem. If the problem occurs under Windows but not MS-DOS,
	try cleaning out your SYSTEM.INI file. If the problem does not go away, you will
	want to consult the Microsoft knowledge base for other causes of the error.
	
	Additional query words: 1.00 1.50 DOSXNT
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbMASMsearch kbAudDeveloper kbZNotKeyword8 kbFortranSearch kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCVC700DOS kbMASM611 kbVC151 kbFORTRANPower100DOS kbFORTRANPower100aDOS kbVC152
	Version           : :1.0,1.0a,1.5,1.51,1.52,6.11,7.0
	Issue type        : kbprb
	
	=============================================================================
	
