---
layout: page
title: "Q38216: PRB: Possible Cause of L2002 for Mixed C, MASM in Large Model"
permalink: kb/038/Q38216/
---

## Q38216: PRB: Possible Cause of L2002 for Mixed C, MASM in Large Model

	Article: Q38216
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a variable is referenced externally in an assembler routine in the following
	manner:
	
	     .model large, c
	
	     .data
	     EXTRN Var:WORD
	
	and declared globally in a large model C program as follows:
	
	     int Var;
	
	the following error is generated:
	
	  error L2002: fixup overflow
	
	CAUSE
	=====
	
	This error occurs because the assembler would expect to find Var in the segment
	_DATA in DGROUP. The C declaration, however, will put var in the segment
	FAR_BSS, since it is an uninitialized global data item in the large memory
	model.
	
	Note that the same is true for the compact memory model.
	
	RESOLUTION
	==========
	
	One way to eliminate this error is to initialize Var in the C code:
	
	     int Var=0;
	
	This will put it in the _DATA logical segment in DGROUP.
	
	Another work-around is to delcare Var in the Assembly code so that the assembler
	would expect to find Var in FAR_BSS, as follows:
	
	     .model large, c
	
	     .fardata?
	     EXTERN Var:WORD
	
	In addition, be sure to use a segment override to access Var:
	
	     MOV ax, SEG Var
	     MOV es, ax
	     MOV bx, es:Var
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
