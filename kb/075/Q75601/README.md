---
layout: page
title: "Q75601: BUG: Continuation Char with Initializing Structures"
permalink: /kb/075/Q75601/
---

## Q75601: BUG: Continuation Char with Initializing Structures

{% raw %}

	Article: Q75601
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.10a,6.0,6.0a,6.0b,6.1,6.10a,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.10a, 6.0, 6.0a, 6.0b, 6.1, 6.10a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When initializing a structure in the Microsoft Macro Assembler (MASM), if the
	initializers are written on separate lines, one or more of the following errors
	may occur:
	
	  MASM 6.x A2045: missing angle bracket or brace in literal
	  MASM 6.x A2009: syntax error in expression
	  MASM 5.x A2105: expected: instruction, directive or label
	
	RESOLUTION
	==========
	
	To work around this problem, either use the backslash (\) line continuation
	character following a comma, or with MASM 6.0 and later use curly braces in
	place of the angle brackets. Curly braces are a legal substitute syntax for
	angle brackets. The sample code below illustrates the problem syntax and the
	workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1, 5.1a, 6.0,
	6.0a, 6.0b, 6.1, 6.1a, and 6.11. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Page 127 of the "Microsoft Macro Assembler Programmer's Guide" from MASM 6.0
	states:
	
	  The list of initializers can be broken only after a comma unless you use a
	  line continuation character (\) at the end of the line.
	
	The following sasmple code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c
	
	  .MODEL small
	
	  name1 STRUCT
	     sub1 DB 'item'
	     sub2 DW ?
	  name1 ENDS
	
	  .DATA
	  ;item3 name1 {'am',     ; assembles correctly
	  ;             14}
	
	  ;item4 name1 <'pm',\    ; assembles correctly with the
	  ;             18>       ; (\)continuation character
	
	  item3 name1 <'am',      ; this generates an error
	               14>        ; MASM 6.0 A2045: missing angle bracket or
	                          ; brace in literal
	                          ; MASM 5.1 A2105: expected: instruction,
	                          ; directive or label
	
	  item4 name1 <'pm'\      ; this generates an error
	               18>        ; MASM 6.0 A2009: syntax error in expression
	                          ; MASM 5.1 A2105: expected: instruction,
	                          ; directive or label
	  .CODE
	     mov ax, @data        ; initialize the ds register
	     mov ds, ax
	     mov ax, item3.sub2   ; for verifying the values
	     mov ax, item4.sub2   ; of the initialization, in CodeView
	     mov ax, 4C00h
	     int 21h
	  END
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.10a,6.0,6.0a,6.0b,6.1,6.10a,6.11
	
	=============================================================================
	

{% endraw %}
