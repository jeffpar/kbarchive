---
layout: page
title: "Q94943: FIX: No Stack Frame From CMACROS.INC cProc FORCEFRAME"
permalink: kb/094/Q94943/
---

## Q94943: FIX: No Stack Frame From CMACROS.INC cProc FORCEFRAME

	Article: Q94943
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application includes the CMACROS.INC file and specifies the FORCEFRAME
	option with the cProc macro, the assembler does not generate a stack frame.
	
	CAUSE
	=====
	
	The code to determine that the application specifies the FORCEFRAME option was
	omitted from the cProc macro.
	
	RESOLUTION
	==========
	
	To correct this problem, add the following three lines to CMACROS.INC. Modify
	version 5.3 to add the following lines before line 876 or modify version 5.31 to
	add the following lines before line 1518.
	
	     ifidn <x>,<FORCEFRAME>
	     ?ff=1
	     endif
	
	Alternately, modify the application source code to remove the cProc macro and in
	its place specify the PROC directive with the FORCEFRAME argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CMACROS.INC versions 5.3 and
	5.31 distributed with MASM versions 6.0, 6.0a, 6.0b, 6.1, and 6.1a. This problem
	was corrected in the CMACROS.INC distributed with MASM for MS-DOS version 6.11.
	
	MORE INFORMATION
	================
	
	The corrected CMACROS.INC file is as follows:
	
	  The corrected CMACROS.INC file is as follows:
	
	     ifidn <x>,<atomic>
	     ?nx=1
	     endif
	
	     ifidn <x>,<forceframe>
	     ?ff=1
	     endif
	
	     ifidn <x>,<c>
	     ?pcc=0
	     endif
	
	Comments in the CMACROS.INC file version 5.31 document the cProc macro as
	follows:
	
	  cProc - define a 'c' procedure
	
	  cProc is the procedure definition for procedures.
	
	     format:
	             cProc n,cf,a
	     where:
	             n       is the name of the procedure
	
	             cf      controls certain definitions, and may be:
	                     NEAR       proc is to be a near label
	                     FAR        proc is to be a far label
	                     PUBLIC     proc is to be defined as public
	                     SMALL      call makeframe procedure
	                     NODATA     don't create prolog code to setup DS
	                     ATOMIC     don't link stack if not needed
	                                NODATA must be specified for ATOMIC
	                     FORCEFRAME Force generation of a frame
	                     C          proc is to be a C procedure
	                     PLM        proc is to be a PL/M procedure
	                     PASCAL     proc is to be a PL/M procedure
	                     WIN        proc is to be a Windows procedure
	                     NONWIN     proc isn't to be a Windows procedure
	
	             a       is a list of registers that are to be saved whenever
	                     the procedure is invoked.
	
	                   makeframe procedure: If small is specified, then the
	                   "makeframe procedure" is invoked instead of generating
	                   normal prologues/epilogues
	
	                   A call is performed to the makeframe procedure. The
	                   call is followed by two bytes. the first byte is the
	                   number of locals to allocate for the frame, the second
	                   is the number of bytes of parameters. The makeframe
	                   procedure will in turn call the cProc routine at the
	                   address following the data bytes. When the cProc is
	                   finished, it will do a near return to the makeframe
	                   procedure to clean up the frame and exit.
	
	                   Note that register parameters and makeframe are
	                   incompatible and cannot be used together.
	
	                   The makeframe procedure will save SI, DI, and also DS
	                   if a far procedure. These registers will be removed
	                   from the autosave list if specified.
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  INCLUDE cmacros.inc
	
	  sBegin code
	  assumes cs, code
	  assumes ds, data
	     cProc my_proc, <FORCEFRAME, PUBLIC>, <>
	     cBegin my_proc      ; stack frame prologue code belongs here
	     xor bx, bx
	     cEnd                ; stack frame epilogue code belongs here
	  sEnd
	
	  _text SEGMENT
	  start:
	     call my_proc
	     mov ax, 4C00h
	     int 21h
	  _text ENDS
	  END start
	
	Additional query words: 5.30 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	
