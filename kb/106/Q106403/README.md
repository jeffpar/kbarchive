---
layout: page
title: "Q106403: FIX: DUP Operator Must Be Preceded by White Space"
permalink: /kb/106/Q106403/
---

## Q106403: FIX: DUP Operator Must Be Preceded by White Space

{% raw %}

	Article: Q106403
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DUP operator must be preceded by white space. The number of items and the
	DUP operator must be separated by spaces or tabs. In MASM 6.0, no error message
	is given, but space for only one data item is allocated if the white space is
	missing. MASM 6.1 and later issue the error message:
	
	  error A2206: missing operator in expression
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0x. The problem
	was corrected in MASM 6.1.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Fl
	  ; View the listing file to see the error in MASM 6.0 for data item b
	
	  .MODEL SMALL
	  .STACK
	
	  .DATA
	  a        db 4 dup(0)
	  size_a   db SIZEOF a
	  b        db 4dup(?)    ; A2206 here in MASM 6.1
	  size_b   db SIZEOF b
	
	  .CODE
	  start:
	     mov   ax,4C00H
	     int   21H    ;Terminate Process
	  END start
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
