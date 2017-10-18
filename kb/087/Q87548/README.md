---
layout: page
title: "Q87548: FIX: Upper Half of 32-bit Registers, GS, and FS Corrupt"
permalink: kb/087/Q87548/
---

## Q87548: FIX: Upper Half of 32-bit Registers, GS, and FS Corrupt

	Article: Q87548
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When single-stepping or tracing through code in Microsoft CodeView versions 4.0,
	4.01, and 4.05, the lower half of the 32-bit registers (eax, ebx, edi, etc.) is
	always preserved, but the upper half may be corrupted. Other 386- specific
	registers, such as the gs and fs registers, may also be corrupted. This problem
	also occurs when animating. This problem does not occur if the instructions are
	not executed one at a time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView version 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate this problem. The ebx
	register will get the value FFFFFFFF, but single-stepping on the NOP will change
	the value to 0000FFFF.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	
	  _text SEGMENT para public 'code'
	     ASSUME cs:_text, ds:_text
	  main:
	     .386
	
	     MOV ebx, 0ffffffffh
	     NOP
	
	     MOV ah, 4ch
	     INT 21h
	  _text ENDS
	
	  stack SEGMENT para stack 'stack'
	     DW 64 dup( ? )
	  stack ENDS
	
	     END main
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	Solution Type     : kbfix
	
	=============================================================================
	
