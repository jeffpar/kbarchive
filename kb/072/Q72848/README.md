---
layout: page
title: "Q72848: How to Use Int 20h to Terminate an .EXE Program"
permalink: /kb/072/Q72848/
---

## Q72848: How to Use Int 20h to Terminate an .EXE Program

{% raw %}

	Article: Q72848
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When terminating a program executed as an .EXE file, it is recommended that
	function 4Ch of interrupt 21h be used, rather than interrupt 20h. Unfortunately,
	function 4Ch is not available on versions of MS-DOS earlier than 2.0. If the use
	of Int 20h is required, then it is important to be sure that the CS register
	points to the beginning of the PSP (program segment prefix).
	
	MORE INFORMATION
	================
	
	Int 20h is often used to terminate .COM programs. The problem with using the
	same interrupt to end .EXE programs is that Int 20h requires that CS point to
	the PSP, and while this is true for .COM programs, it does not hold for .EXE
	programs.
	
	Simply setting CS equal to the PSP will change the flow of execution, making it
	unlikely that the Int 20h call will be reached; therefore, a more indirect
	method must be used. First, push the segment of the PSP, then push an offset of
	0000. Finally, issue a "retf" instruction. This causes program execution to
	switch to offset 0000 of the PSP, which contains an Int 20h instruction.
	
	This method is demonstrated in the sample code below, which is written for MASM
	version 5.x but will work with MASM version 6.0 as well.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  stack   SEGMENT para stack 'stack'
	
	          DB 2048 dup(?)
	
	  stack   ENDS
	
	  data    SEGMENT word public 'data'
	
	  msg     DB "Hello, World", 0Dh, 0Ah, "$"
	
	  data    ENDS
	
	  text    SEGMENT word public 'code'
	
	  begin:  PUSH    es              ;ES = PSP at entry, so we'll save it
	          MOV     ax, SEG data    ;Initialize DS to data segment
	          MOV     ds, ax
	          ASSUME  DS:data, CS:text, SS:stack
	
	          MOV     ax, SEG msg
	          MOV     ds, ax          ;Set DS:DX to the address of msg
	          MOV     dx, OFFSET msg
	          MOV     ah, 09h         ;Function 09h (Display String)
	          INT     21h
	
	          MOV     ax, 00h         ;Extra step for 8088/8086 chips
	          PUSH    ax              ;PSP segment is already on the stack
	          RETF
	
	  text    ENDS
	
	          END     begin
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : MS-DOS:5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	

{% endraw %}
