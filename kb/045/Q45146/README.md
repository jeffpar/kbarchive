---
layout: page
title: "Q45146: DOCERR: Some Coprocessor Instructions Not Emulated"
permalink: /kb/045/Q45146/
---

## Q45146: DOCERR: Some Coprocessor Instructions Not Emulated

{% raw %}

	Article: Q45146
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11a,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The /E option of the Microsoft Macro Assembler (MASM) 5.0 and 5.1 directs the
	assembler to generate data and code as it is expected by coprocessor emulator
	libraries. The /FPi option and the OPTION EMULATOR directive provide the same
	functionality, starting with MASM version 6.0.
	
	The emulator libraries are available with the high-level languages like C, BASIC,
	FORTRAN, and Pascal. However, the emulator libraries do not support all
	coprocessor instructions. The following error message will result when an
	unsupported coprocessor instruction is executed:
	
	  run-time error M6107: MATH - floating-point error: unemulated
	
	MORE INFORMATION
	================
	
	The following is the list of unemulated coprocessor instructions in MASM 5.1:
	
	  FBLD                    FSAVE
	  FBSTP                   FSETPM
	  FCOS                    FSIN
	  FDECSTP                 FSINCOS
	  FINCSTP                 FSTENV
	  FINIT                   FUCOM
	  FLDENV                  FUCOMP
	  FNOP                    FUCOMPP
	  FPREM1                  FXTRACT
	  FRSTOR
	
	The following is the list of unemulated coprocessor instructions in MASM 6.0 as
	indicated on page 161 of the "Microsoft Macro Assembler Programmer's Guide":
	
	  FCOS                    FSAVE32
	  FDECSTP                 FSETPM
	  FINCSTP                 FSIN
	  FPREM1                  FSINCOS
	  FRSTOR                  FUCOM
	  FRSTOR16                FUCOMP
	  FRSTOR32                FUCOMPP
	  FSAVE                   FXTRACT
	  FSAVE16
	
	However, this list is not complete. When tested with the run-time libraries from
	Microsoft C/C++ 7.0, the following instructions also result in the M6107 error
	
	  FBLD                    FLDENV
	  FBSTP                   FNOP
	  FINIT                   FSTENV
	
	In addition, a few of the names are incorrect
	
	  FRSTOR16   should be    FRSTORW
	  FRSTOR32   should be    FRSTORD
	  FSAVE16    should be    FSAVEW
	  FSAVE32    should be    FSAVED
	
	The following stand-alone assembler sample reproduces the M6107 error for the
	instruction FBLD. Note that the C run-time code must be brought in. In this
	case, the small model emulator library (slibce) is used.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Cx /link slibce
	
	  OPTION EMULATOR
	  .MODEL small, C
	  PUBLIC main
	
	  .DATA
	  packbcd TBYTE 0
	
	  .CODE
	  main:
	     fbld packbcd
	  END
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM32bit611a kbMASM510 kbMASM600 kbMASM610 kbMASM610a kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b,6.1,6.11a,6.1a
	
	=============================================================================
	

{% endraw %}
