---
layout: page
title: "Q79146: FIX: MASM 6.0 Generates L1103 for Nested Structures"
permalink: /kb/079/Q79146/
---

## Q79146: FIX: MASM 6.0 Generates L1103 for Nested Structures

{% raw %}

	Article: Q79146
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 may produce an invalid object
	file, generating the following error message at link time:
	
	  fatal error L1103: attempt to access data outside segment bounds
	
	The error occurs when a number of nested UNIONS and STRUCTURES are used.
	
	RESOLUTION
	==========
	
	A work around is to rearrange the order of the outer-most structure. The sample
	code below illustrates this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this problem. If the MASM switch /Fl is used
	to generate a listing file, it can be seen that the assembler generates an
	offset for "BAD" of 001E in the structure ST1. Because this structure is a copy
	of the previous structure (ST0), the offset for BAD in each structure should be
	the same, the correct offset is 0014. No assembler error or warning is
	generated, but when the .OBJ file is linked, the L1103 error is generated.
	
	Note: In the file listing, an incorrect offset is generated, but in the symbol
	listing, a correct offset is displayed for both instances of BAD.
	
	Sample Code
	-----------
	
	  ; Rearranging ST1 as indicated in the comments fixed the problem in ST1
	  ; for this sample code.
	
	  ; Assemble options needed: none
	  ; (use /Fl to generate listing file)
	
	  .MODEL small
	  .STACK 4096
	
	  ST0  STRUCT
	     UNION
	        STRUCT
	           A       BYTE 10 DUP ('A')
	           UNION
	              B    BYTE 10 DUP ('B')
	              D    BYTE 10 DUP ('D')
	           ENDS
	        ENDS
	        E          BYTE 10 DUP ('E')
	     ENDS
	     BAD    BYTE   (' ')
	  ST0  ENDS
	
	  ST1  STRUCT                        ; ST1  STRUCT
	     UNION                           ;    BAD    BYTE   (' ')
	        E          BYTE 10 DUP ('E') ;    UNION
	        STRUCT                       ;       E          BYTE 10 DUP ('E')
	           A       BYTE 10 DUP ('A') ;       STRUCT
	           UNION                     ;          A       BYTE 10 DUP ('A')
	              B    BYTE 10 DUP ('B') ;          UNION
	              D    BYTE 10 DUP ('D') ;             B    BYTE 10 DUP ('B')
	           ENDS                      ;             D    BYTE 10 DUP ('D')
	        ENDS                         ;          ENDS
	     ENDS                            ;       ENDS
	     BAD    BYTE   (' ')             ;    ENDS
	  ST1  ENDS                          ; ST1  ENDS
	
	  .DATA
	
	  item1   ST0    <>
	  item2   ST1    <>
	
	  .CODE
	      .startup
	      .exit 0
	  END
	
	Additional query words: s_link 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
