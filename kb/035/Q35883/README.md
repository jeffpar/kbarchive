---
layout: page
title: "Q35883: FIX: Public Labels Are Prefixed with Underscore Incorrectly"
permalink: kb/035/Q35883/
---

## Q35883: FIX: Public Labels Are Prefixed with Underscore Incorrectly

	Article: Q35883
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you assemble the following program with MASM version 5.1 and examine the
	public label, TheProc, you will find an underscore prefixed to it. Another
	symptom of the problem may occurs during link time. The linker will generate the
	error L2029 unresolved external on public labels.
	
	CAUSE
	=====
	
	The space before the comma in the structure initialization of Data1 causes the
	problem to occur.
	
	RESOLUTION
	==========
	
	Removing the space before the comma in the structure initialization of Data1
	will allow you to work around the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM version 5.1a.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  StrucType STRUC
	  Label1  DB "LPT"
	  Label2  DB "   "
	  StrucType ENDS
	
	  _DATA SEGMENT
	  Data1   StrucType < , "1">
	  _DATA ENDS
	
	  _TEXT SEGMENT
	  ASSUME CS:_TEXT, DS:_DATA
	  PUBLIC TheProc
	
	  TheProc PROC NEAR
	          mov ax, 4C00h
	          int 21h
	  TheProc ENDP
	  _TEXT ENDS
	
	  END
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
