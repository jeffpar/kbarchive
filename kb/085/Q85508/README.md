---
layout: page
title: "Q85508: PRB: No Warning for INVOKE Between 16-Bit and 32-Bit Segments"
permalink: /kb/085/Q85508/
---

## Q85508: PRB: No Warning for INVOKE Between 16-Bit and 32-Bit Segments

	Article: Q85508
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 does not support transfer of
	control between 16-bit and 32-bit code segments through the INVOKE command. If
	the assembler encounters an INVOKE in a 16-bit segment, it assumes that the
	procedure being invoked is also in a 16-bit segment and places the parameters on
	the stack using WORDs. On the other hand, if the assembler encounters an INVOKE
	in a 32-bit code segment, the parameters are placed on the stack as DWORDs with
	the assumption that the called routine will also be in a 32-bit code segment.
	MASM does not generate warnings when the segment being called does not match the
	calling segment.
	
	CAUSE
	=====
	
	The INVOKE command, introduced in MASM 6.0, is not designed to support
	transferring control between 16-bit and 32-bit code segments.
	
	RESOLUTION
	==========
	
	You can work around this problem by pushing the necessary parameters on the
	stack and making the appropriate call instead of using INVOKE.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	MORE INFORMATION
	================
	
	It is important to note that, in order to run code in 32-bit segments, the
	operating system that your program is running on must be able to support 32-bit
	code segments. Most PC-based operating systems such as MS-DOS version 5.0,
	Windows version 3.0, and OS/2 versions 1.x do not provide support for 32-bit
	code segments. Newer operating systems and MS-DOS extender packages may provide
	this support.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  ; Note that this code does not work on present operating systems such
	  ; as MS-DOS. This code is only provided to demonstrate how to replace
	  ; an INVOKE statement with the appropriate push and call sequence.
	
	  .MODEL small, pascal
	  .386
	
	  func PROTO FAR32 arg1:BYTE, arg2:WORD, arg3:DWORD
	
	  .code
	    .startup
	    MOV dl, x
	    MOV cx, y
	    MOV ebx, z
	    INVOKE func, dl, cx, ebx ; This doesn't work.
	
	    ;MOV al, dl    ; Uncomment this code to set up the call to func.
	    ;PUSH eax      ; Push DWORD instead of WORD.
	    ;MOV ax, cx
	    ;PUSH eax      ; Push DWORD instead of WORD.
	    ;PUSH ebx
	    ;CALL FAR32 PTR func
	
	    .EXIT 0
	
	  .DATA
	    x DB 11h
	    y DW 2222h
	    z DD 33333333h
	
	  _code32 SEGMENT DWORD PUBLIC USE32 'code'
	  func PROC FAR32 arg1:BYTE, arg2:WORD, arg3:DWORD
	    MOV bl, arg1   ; func assumes that all variables
	    MOV cx, arg2   ; on the stack are DWORD aligned.
	    MOV edx, arg3
	    RET
	  func ENDP
	  _code32 ENDS
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	
	=============================================================================
	
