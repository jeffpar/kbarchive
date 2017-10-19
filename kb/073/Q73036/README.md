---
layout: page
title: "Q73036: BUG: Macro Expansion May Occur Before Macro Call in Listing File"
permalink: /kb/073/Q73036/
---

## Q73036: BUG: Macro Expansion May Occur Before Macro Call in Listing File

	Article: Q73036
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Microsoft Macro Assembler (MASM), if the .NOLIST directive is the first
	statement in a file and it is later followed by a .LISTALL directive, then the
	macro expansion in the listing file will occur before the macro call instead of
	after it.
	
	RESOLUTION
	==========
	
	This problem can be eliminated by placing either a blank line or a comment
	before the .NOLIST directive, so that .NOLIST is not on the first line of the
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0, 6.0a, 6.0b,
	6.1, 6.1a, and 6.11. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The .NOLIST directive prevents the macro expansion of all macro calls in the
	listing file. This option shows the macro call, but it does not display the
	corresponding code. The .NOLIST directive also prevents a complete listing of
	every macro in each file that is included with the .INCLUDE directive. The
	.LISTALL directive lists all source lines, including false conditionals and
	generated code for each macro.
	
	In the sample code below, the placement of the .NOLIST directive before the
	.INCLUDE directive prevents a general listing of every macro in that include
	file. Placing the .LISTALL after the .INCLUDE directive should cause the
	corresponding code for each macro to be listed after that macro appears in the
	source code. For example, the correct listing for TEST_MACRO should appear as
	follows:
	
	                 TEST_MACRO
	  0000  55              1       PUSH  BP
	  0001  8B EC           1       MOV   BP, SP
	
	However, if .NOLIST is the first statement on the first line in the file, then
	this order is reversed and the macro expansion appears before the macro call.
	The incorrect macro expansion actually appears as follows:
	
	  0000  55              1       PUSH  BP
	  0001  8B EC           1       MOV   BP, SP
	                 TEST_MACRO
	
	Sample Code
	-----------
	
	TEST.ASM
	--------
	
	  ; Assemble options needed: /Fl
	
	  .NOLIST
	  INCLUDE test.inc
	  .LISTALL
	
	  .MODEL small
	  .STACK 4096
	
	  .CODE
	  start:
	     test_macro
	     mov ax, 4C00h
	     int 21h
	  END start
	
	TEST.INC
	--------
	
	  ; Include file for TEST.ASM
	
	  test_macro MACRO
	     push bp
	     mov bp, sp
	  ENDM
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
