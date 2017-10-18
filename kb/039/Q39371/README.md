---
layout: page
title: "Q39371: Procedures With Arguments Require a Specified Language"
permalink: kb/039/Q39371/
---

## Q39371: Procedures With Arguments Require a Specified Language

	Article: Q39371
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A program which uses the .MODEL directive and has a procedure which receives
	arguments, will not assemble correctly if a language is not specified. Under
	Microsoft Macro Assembler (MASM) versions 5.0, 5.1, and 5.1a, the language is
	specified with the .MODEL directive and the following errors will be produced
	the language is omitted:
	
	  A2022: Operand must be type specifier
	  A2009: Symbol not defined: 'symbol'
	
	Under MASM 6.0, 6.0a, and 6.0b, the language can be specified as part of the PROC
	syntax, with the .MODEL directive, with OPTION LANG, or with switches /Gc or
	/Gd. The following errors will be produced if the language is not specified
	
	  A2119: language type must be specified
	  A2006: undefined symbol: 'symbol'
	
	The "Microsoft Macro Assembler Programmer's Guide" does not indicate that the
	language parameter is required in this case.
	
	MORE INFORMATION
	================
	
	The language parameter on the .MODEL directive enables the PROC extensions,
	changes the scope of code labels within procedures, and may affect naming. When
	the language parameter is left off, the PROC directive will only accept a NEAR
	or FAR specifier.
	
	The following sample program illustrates the situation:
	
	Sample Code
	-----------
	
	  ;Assemble options needed: none
	
	          .model small
	  ;       .model small, c             ; This line will permit assembly.
	
	          .code
	
	  myadd   PROC arg1:word, arg2:word
	
	          LES bx, arg1
	          LES dx, arg2
	
	          RET
	  myadd   ENDP
	
	          END
	
	Additional query words: kbinf 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
