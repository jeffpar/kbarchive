---
layout: page
title: "Q39518: DOCERR: Example in MASM 5.1 Programmer's Guide"
permalink: /kb/039/Q39518/
---

## Q39518: DOCERR: Example in MASM 5.1 Programmer's Guide

	Article: Q39518
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are a number of errors in example 2 on Page 90 of the "Microsoft Macro
	Assembler 5.1 Programmer's Guide."
	
	The following lines from the example
	
	  EXTR    xvariable:FAR
	
	  EXTR    xprocedure:PROC
	
	should be as follows:
	
	  EXTRN   xvariable:FAR
	
	  EXTRN   xprocedure:PROC
	
	Additional query words: 5.10 5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	
	=============================================================================
	
