---
layout: page
title: "Q95121: FIX: L1101 Error Linking MASM Object Module w/ Large Structure"
permalink: kb/095/Q95121/
---

## Q95121: FIX: L1101 Error Linking MASM Object Module w/ Large Structure

	Article: Q95121
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application assembled with the Microsoft Macro Assembler
	(MASM) fails and the Microsoft Link utility (LINK) generates the following
	message:
	
	  fatal error L1101: invalid object module
	
	CAUSE
	=====
	
	MASM generates an incorrect LIDATA record when the source code declares large
	data structures.
	
	
	RESOLUTION
	==========
	
	To work around this problem, organize structure initialization into a series of
	DUP directives, as shown below. If necessary, MASM processes the structure into
	several LIDATA records.
	
	  msg_str STRUCT
	  msg     BYTE 44 DUP(120), 10, 13
	  BYTE 44 DUP(111), 10, 13
	  BYTE 44 DUP(120), 10, 13
	  BYTE 44 DUP(111), 10, 13
	  BYTE 44 DUP(120), 10, 13
	  BYTE 44 DUP(111), 10, 13
	  BYTE 44 DUP(120), 10, 13
	  BYTE 44 DUP(111), 10, 13
	  BYTE 44 DUP(120), 10, 13
	  BYTE '$'
	  msg_str ENDS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, and 6.1a. This problem was corrected in MASM for MS-DOS version 6.11.
	
	MORE INFORMATION
	================
	
	The code example below demonstrates this problem. Even though MASM is designed
	to create multiple LIDATA records for a data structure larger than 512 bytes,
	the assembler creates one LIDATA record for the entire data structure. When this
	occurs, the L1101 error occurs as indicated above.
	
	See "The MS-DOS Encyclopedia" (Microsoft Press) for more information on the
	LIDATA record or other aspects of the object module format.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .STACK 4096
	
	  .DATA
	  msg_str STRUCT
	  msg     BYTE "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 10, 13
	          BYTE "oooooooooooooooooooooooooooooooooooooooooooo", 10, 13
	          BYTE "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 10, 13
	          BYTE "oooooooooooooooooooooooooooooooooooooooooooo", 10, 13
	          BYTE "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 10, 13
	          BYTE "oooooooooooooooooooooooooooooooooooooooooooo", 10, 13
	          BYTE "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 10, 13
	          BYTE "oooooooooooooooooooooooooooooooooooooooooooo", 10, 13
	          BYTE "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 10, 13
	          BYTE '$'
	  msg_str ENDS
	
	  struct_str msg_str 2 DUP (<>)
	
	  .CODE
	  main PROC
	     mov ax, @DATA
	     mov ds, ax
	
	     mov ah, 9h                    ; Request DOS Function 9.
	     mov dx, OFFSET struct_str.msg ; Load DX with offset
	                                   ; (segment already in DS).
	     int 21h                       ; Display String.
	
	     mov ax, 4c00h
	     int 21h
	  main ENDP
	  END main
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	
