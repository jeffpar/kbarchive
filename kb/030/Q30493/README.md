---
layout: page
title: "Q30493: DOCERR: Errors in Chapter 5 of MASM Programmer's Guide"
permalink: kb/030/Q30493/
---

## Q30493: DOCERR: Errors in Chapter 5 of MASM Programmer's Guide

	Article: Q30493
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several documentation errors, shown in detail below, in Chapter 5 of
	the Microsoft Macro Assembler Programmer's Guide that shipped with MASM version
	5.0, 5.1, and 5.1a. Attempting to assemble the sample code provided on page 90
	and 95 will cause MASM to generate the following error:
	
	  A2105: Expected: instruction, directive, or label
	
	Please note the changes listed below and make these changes to your copy of the
	Microsoft Macro Assembler Programmer's Guide.
	
	MORE INFORMATION
	================
	
	The following are documentation errors occurring in Chapter 5 of the Microsoft
	Macro Assembler Programmer's Guide and their corrections:
	
	Page 90, Example 2
	
	  EXTR xvariable:FAR
	
	Should be as follows:
	
	  EXTRN xvariable:FAR
	
	Page 90, Example 2
	
	  EXTR xprocedure:PROC
	
	Should be as follows:
	
	  EXTRN xprocedure:PROC
	
	Page 95, Example 2
	
	  EXTR xvariable:FAR
	
	Should be as follows:
	
	  EXTRN xvariable:FAR
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	
