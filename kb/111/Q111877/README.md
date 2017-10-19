---
layout: page
title: "Q111877: BUG: SIZE and SIZEOF May Give Incorrect Values for Locals"
permalink: /kb/111/Q111877/
---

## Q111877: BUG: SIZE and SIZEOF May Give Incorrect Values for Locals

	Article: Q111877
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
	
	SIZEOF and SIZE drop the high byte of the size for LOCAL variables larger than
	255 bytes. The SIZE and SIZEOF for global variables and data types is correct.
	The TYPE operator works correctly for all variables.
	
	RESOLUTION
	==========
	
	You can use the TYPE and LENGTHOF operators to obtain the correct size of local
	variables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the following example, structure junk1 is 255 bytes and junk2 is 256 bytes.
	If local variables are used, SIZE and SIZEOF return 0 (zero) for the size of the
	local variable j2L. This can be seen in the listing file or in CodeView if the
	program is run in the debugger. Note that the TYPE operator works correctly for
	single-element variables. To find the size of array types, use TYPE * LENGTHOF
	as shown for j3L below.
	
	Sample Code
	-----------
	
	  ; assembly options needed: /Zi /Fl /Sa
	  .model large,c
	  .386
	   
	  junktest PROTO
	   
	  junk1 struct
	      a BYTE 255 DUP (?)
	  junk1 ends
	
	  junk2 struct
	      a BYTE 256 DUP (?)
	  junk2 ends
	
	  .stack 10000
	  .data
	  j1 junk1 <>
	  j2 junk2 <>
	
	  .CODE
	      .STARTUP
	          mov ax, sizeof junk1  ; correct sizes here
	          mov ax, sizeof j1
	          mov ax, size j1
	          mov ax, sizeof junk2
	          mov ax, sizeof j2
	          mov ax, size j2
	          invoke junktest
	      .EXIT
	
	  junktest PROC
	      LOCAL j1L:junk1     ; correct amount allocated 255 bytes
	      LOCAL j2L:junk2     ; correct amount allocated 256 bytes
	      LOCAL j3L[256]:BYTE ; correct amount allocated 256 bytes
	
	      mov ax,0
	      mov ax, sizeof junk1 ; correct -- 0FFh
	      mov ax, sizeof j1L   ; correct -- 0FFh
	      mov ax, size j1L     ; correct -- 0FFh
	      mov ax, type j1L     ; correct -- 0FFh
	      mov ax, sizeof junk2 ; correct -- 0100h
	      mov ax, sizeof j2L   ; high byte lost -- returns 00h
	      mov ax, size j2L     ; high byte lost -- returns 00h
	      mov ax, type j2L     ; OK -- returns 0100h
	      mov ax, sizeof j3L   ; high byte lost -- returns 00h
	      mov ax, size j3L     ; high byte lost -- returns 00h
	      mov ax, type j3L * lengthof j3L ; OK - returns 0100h
	      ret
	  junktest ENDP
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a 6.10b 6.11 ml buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
