---
layout: page
title: "Q82290: FIX: EXTRN ABS Doesn't Work As Software Interrupt Number"
permalink: kb/082/Q82290/
---

## Q82290: FIX: EXTRN ABS Doesn't Work As Software Interrupt Number

	Article: Q82290
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Macro Assembler (MASM) versions 5.1 and 5.1a or QuickAssembler
	versions 2.01 and 2.51, using an absolute external symbol as a software
	interrupt number fails to generate the correct number at link time. The module
	accessing this PUBLIC symbol does not generate the proper number; instead, it
	gets set to 0. This is a problem only when the symbol is used with the INT
	instruction. In MASM version 5.1, using an absolute external symbol causes the
	linker to generate:
	
	  error L2029: Unresolved externals.
	
	RESOLUTION
	==========
	
	You can work around this problem by using an equate declared in an include file
	rather than relying on an absolute external. The include file that contains this
	equate can be included in all the source files that need to access the equate.
	This allows the assembler to determine the value of the symbol, instead of
	relying on the linker to provide the value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a and
	QuickAssembler versions 2.01 and 2.51 (buglist2.01 and buglist2.51). This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the incorrect result. To reproduce this error,
	assemble both HELLO.ASM and DISPLAY.ASM with MASM 5.1a, then link together using
	LINK version 5.01.20.
	
	Sample Code
	-----------
	
	  ; HELLO.ASM
	  ; Assemble options needed: none
	
	  .MODEL small, c
	  DOSSEG
	
	  PUBLIC mydata
	  mydata EQU 21h
	
	  .STACK 256
	
	  .CODE
	  EXTRN display:proc
	  start:
	      call display
	
	      mov ax, 04C00h
	      int 21h
	  END start
	
	  ; DISPLAY.ASM
	  ; Assemble options needed: none
	
	  .MODEL small, c
	  DOSSEG
	
	  EXTRN mydata:ABS
	
	  .CODE
	  display PROC
	      mov ah,mydata ; Gets set to 21h by the linker
	      int mydata    ; Doesn't get set to 21h by the linker
	                    ; Results in Divide overflow
	                    ; Results in Illegal Instruction under CodeView
	      ret
	  display endp
	  END
	
	Additional query words: 5.10 5.10a extern extrn buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
