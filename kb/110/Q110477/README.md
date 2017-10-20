---
layout: page
title: "Q110477: BUG: L1103 Error Caused by Incorrectly Nested Segments"
permalink: /kb/110/Q110477/
---

## Q110477: BUG: L1103 Error Caused by Incorrectly Nested Segments

{% raw %}

	Article: Q110477
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
	
	If a simplified segment directive is used when two segments are already open,
	the resulting object file may generate the following error when it is linked:
	
	  fatal error L1103: attempt to access data outside segment bounds
	
	RESOLUTION
	==========
	
	The code shown below illustrates a case where this problem will occur. The
	comment lines show how to resolve the problem by closing one or more of the
	nested segments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following code sample illustrates the problem. When the simplified directive
	.CODE is encountered in this sample, only one of the previously opened segments
	is closed and the error results. If either or both of the ENDS statements is
	placed in the code, the program will link correctly.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	  .MODEL large,c
	  .STACK
	   
	  myseg SEGMENT
	      mydata WORD 1
	  ;myseg ENDS   ; fixes the problem
	
	  myseg2 SEGMENT
	      data2 WORD 2
	
	  ;myseg2 ENDS  ; fixes the problem
	
	  .CODE
	      .STARTUP
	      ASSUME ds:myseg
	      mov dx, SEG mydata
	      mov ds, dx
	      mov ax, mydata
	      ASSUME ds:myseg2
	      mov dx, SEG mydata2
	      mov ds, dx
	      mov ax, mydata2
	      .EXIT
	
	Additional query words: 6.00 6.10 6.11 6.1x buglist6.10 buglist6.10a buglist6.11 buglist6.00 buglist6.00a buglist6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
