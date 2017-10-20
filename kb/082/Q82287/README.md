---
layout: page
title: "Q82287: FIX: MASM 6.0 Does Not Align on Page Boundary"
permalink: /kb/082/Q82287/
---

## Q82287: FIX: MASM 6.0 Does Not Align on Page Boundary

{% raw %}

	Article: Q82287
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
	
	When using the Microsoft Macro Assembler (MASM), the ALIGN directive does not
	work properly when attempting to place data or code on a page (256 byte)
	boundary. If aligning inside of a code segment, the "ALIGN 256" directive has no
	effect on the placement of subsequent instructions; it may insert 256 bytes
	somewhere else later in that segment. When aligning inside of a data segment,
	the data to be aligned is placed 1 byte past the page boundary.
	
	RESOLUTION
	==========
	
	To work around this problem, follow the steps below:
	
	1. Edit your source to use an "ALIGN 128" where you previously used "ALIGN 256".
	  For example,
	
	        .                    .
	        .                    .
	        XOR   AL,AL          XOR   AL,AL
	        ALIGN 256     --->  ALIGN 128
	        MOV   CX,5           MOV   CX,5
	        .                    .
	        .                    .
	
	2. Assemble your source with the options "/Fl /c". This will generate a listing
	  file with the same base name of your source file and a .LST extension.
	
	3. Viewing the .LST file, locate the line of code you want to align. The value
	  to the left of your source code represents the offset of that item in the
	  relative segment. This value will be a multiple of 128 (80h). There is a
	  possibility that this value will fall on a page frame (100h). If this is the
	  case then the code is aligned on a 256-byte boundary and you are done.
	
	     Offset Machine Code  Source Code
	     ------ ------------  -----------
	     .
	     .
	     0000  32 C0          XOR   AL,AL
	                          ALIGN 128
	     0080  B9 0005        MOV   CX,5    **Not Aligned on page**
	     .
	     .
	     .
	     .
	     0000  32 C0          XOR   AL,AL
	                          ALIGN 128
	     0100  B9 0005        MOV   CX,5    **Aligned on page**
	     .
	     .
	
	4. If the offset value is not a multiple of 256, go back to your source file and
	  add the line "DB 128 DUP(?)" beneath the "ALIGN 128" line. This will add the
	  bytes necessary to align your code to a page frame. Reassemble with "/Fl /c"
	  and view the .LST file to verify.
	
	        .                    .
	        .                    .
	        XOR   AL,AL          XOR   AL,AL
	        ALIGN 128     --->   ALIGN 128
	                             DB    128 DUP(?)
	        MOV   CX,5           MOV   CX,5
	        .                    .
	        .                    .
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  _TEST SEGMENT PAGE PUBLIC 'CODE'
	  start:
	      xor al, al
	  ALIGN 256
	      xor al, al
	      mov ax,4C00h
	      int 21h
	  _TEST ENDS
	  END start
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
