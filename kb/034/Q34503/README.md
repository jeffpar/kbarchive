---
layout: page
title: "Q34503: DOCERR: PROC Directive Will Not Work with Structure Type"
permalink: /kb/034/Q34503/
---

## Q34503: DOCERR: PROC Directive Will Not Work with Structure Type

	Article: Q34503
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 38 of the "Microsoft Macro Assembler 5.1 Update" guide states the following
	about the type that can be specified for an argument in the syntax of PROC
	
	  ... the type of the argument may be WORD, DWORD, FWORD, QWORD,
	  TBYTE or the name of a structure defined by a STRUC structure
	  declaration...
	
	When attempting to use a structure name, the following error will be generated
	
	  error A2003: Unknown type specifier
	
	The error is generated because support of the STRUC type for arguments to PROC
	has not been added to MASM version 5.1. However, it is a feature of MASM version
	6.0 and later.
	
	MORE INFORMATION
	================
	
	The following program illustrates the problem. It will assemble correctly with
	MASM 6.0 and later.
	
	Sample Code
	-----------
	
	  ; Assembly options needed: none
	
	     .model small,c
	     .data
	
	  t1 STRUC
	     w1  dw 0
	  t1 ENDS
	
	     .code
	
	  h1 PROC arg1:t1
	  ;
	  h1 ENDP
	
	     END
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	
