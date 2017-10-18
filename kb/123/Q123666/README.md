---
layout: page
title: "Q123666: BUG: LINK Error L1101 with Public Weak Extern"
permalink: kb/123/Q123666/
---

## Q123666: BUG: LINK Error L1101 with Public Weak Extern

	Article: Q123666
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The linker produces the following error:
	
	  fatal error L1101: invalid object module
	
	when you assemble and link the following code, which contains a public weak
	extern:
	
	     .model small
	     .data
	     y=1
	     public y
	     extern x(y):abs
	     END
	
	CAUSE
	=====
	
	An incomplete record is placed in the object file:
	
	  COMENT Weak External Pairs
	  Weak External : Default Resolution
	  "x" :
	
	Notice the abscence of the alternate weak name y.
	
	RESOLUTION
	==========
	
	To work around the problem, use an external weak extern:
	
	     extern y:abs
	     extern x(y):abs   ; extern x(y):abs same results as extern x(y):proc
	
	This places the correct coment record is placed in the .OBJ file:
	
	  COMENT Weak External Pairs
	  Weak External : Default Resolution
	  "x" : "y"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.10 6.11 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	
