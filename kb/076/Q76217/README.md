---
layout: page
title: "Q76217: FIX: Nested Structures May Hang Macro Assembler 6.0"
permalink: kb/076/Q76217/
---

## Q76217: FIX: Nested Structures May Hang Macro Assembler 6.0

	Article: Q76217
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Nested structures may cause the Microsoft Macro Assembler (MASM) version 6.0 to
	hang when one structure contains a field of the type of another structure and it
	is initialized. The code below demonstrates the problem more clearly.
	
	RESOLUTION
	==========
	
	Pad the initializer to make it the size declared. In the sample code below,
	padding the initializer for the member called People to three characters
	corrects the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	In the sample code, notice that the structure member Nme has a length of three
	bytes. However, the structure called People initializes its Nme member to 'R',
	which is one character instead of three. This produces the problem.
	
	Under MS-DOS, the assembler logo will appear, and the system will hang. Under
	OS/2, the following message appears:
	
	  The process has stopped.
	  The software diagnostic code (trap number) is 013.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c
	
	  .MODEL small
	
	  aStruct STRUCT
	      Nme BYTE 3 DUP (?)
	  aStruct ENDS
	
	  bStruct STRUCT
	      People aStruct <'R'>
	
	  ; Replace above line with the following line to work around problem.
	  ;
	  ;   People aStruct <'R  '>    ; 'R' is followed by two spaces
	
	  bStruct  ENDS
	
	  .DATA
	      Crash bStruct { }
	
	  END
	
	Additional query words: LOCK HANG STRUCT buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
