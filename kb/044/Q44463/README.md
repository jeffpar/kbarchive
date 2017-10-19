---
layout: page
title: "Q44463: HOWTO: Difference Between Arrays and Pointers in C"
permalink: /kb/044/Q44463/
---

## Q44463: HOWTO: Difference Between Arrays and Pointers in C

	Article: Q44463
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below presents an example of a common programming mistake, that is,
	confusing an array and a pointer declaration:
	
	  Consider an application divided into several modules. In one module, declare
	  an array as follows:
	
	        signed char buffer[100];
	
	  In another module, declare the following variables to access the array:
	
	        extern signed char *buffer;           // FAILS
	        extern signed char buffer[];          // WORKS
	
	  If you view the code in the CodeView debugger, it indicates that the "*buffer"
	  declaration produces a different address than the "buffer[]" declaration
	  does.
	
	MORE INFORMATION
	================
	
	The following declarations are NOT the same:
	
	     char *pc;
	     char ac[20];
	
	The first declaration allocates memory for a pointer; the second allocates memory
	for 20 characters.
	
	A picture of pc and ac in memory might appear as follows:
	
	   pc  +--------+
	       |   ???  |
	       +--------+
	
	   ac  +-----+-----+-----+-----+     +-----+
	       |  ?  |  ?  |  ?  |  ?  | ... |  ?  |
	       +-----+-----+-----+-----+     +-----+
	
	Neither are the following the same:
	
	     extern char *pc;
	     extern char ac[];
	
	The first declaration indicates that another module allocated either two or four
	bytes for a pointer to char named pc while the second indicates that another
	module allocated an array (of some unspecified length) named ac.
	
	The steps required to address pc[3] and ac[3] are different. The one similarity
	is that the expression "ac" is a constant pointer to char that points to
	&ac[0].
	
	To evaluate pc[3], load the value of the pointer pc from memory and add 3. Then
	load the character stored ad this location (pc + 3) into a register. Assuming
	the small memory model, the appropriate MASM code might look like the
	following:
	
	     MOV     BX, pc          ; move *CONTENTS* of pc into BX
	                             ; BX contains 1234
	     MOV     AL, [BX + 3]    ; move byte at pc + 3 (1237) into AL
	                             ; ==> AL contains 'd'
	
	An appropriate diagram might appear as follows, provided that pc has been set to
	point to an array at location 1234 and that the first four positions of the
	array contain the string "abcd":
	
	address:   1000                  1234  1235  1236  1237
	   pc  +--------+--->>>>>------v-----v-----v-----v-----+
	       |  1234  |          *pc |  a  |  b  |  c  |  d  | ...
	       +--------+              +-----+-----+-----+-----+
	                                pc[0] pc[1] pc[2] pc[3]
	                                *pc   *(pc+1) and so on
	
	NOTE: If you use pc without first initializing it properly causes your
	application to access random memory which can cause undesired behavior. To
	initialize the pointer, include a line of code such as "pc = malloc(5);" or "pc
	= ac;".
	
	Because ac is a constant, it can be stored in the final MOV instruction, which
	eliminates two MOV instructions. The MASM code might look like the following:
	
	     MOV     AL, [offset ac + 3]     ; move byte at ac + 3 into AL
	                                     ; offset ac is 1100, so move
	                                     ; byte at 1103 into AL
	                                     ; ==> AL contains 'd'
	
	The corresponding picture might appear as follows:
	
	address: 1100  1101  1102  1103        1119
	   ac  +-----+-----+-----+-----+     +-----+
	       |  a  |  b  |  c  |  d  | ... |  \0 |
	       +-----+-----+-----+-----+     +-----+
	       ac[0] ac[1] ac[2] ac[3]       ac[19]
	       *ac   *(ac+1)  and so on
	
	NOTE: If you first initialize pc to point to ac (by including the line "pc = ac;"
	in your application), then the end result of the two statements is identical. To
	see this in the picture, set pc to contain the address of ac, 1100. However, the
	instructions used to generate these effects are quite different.
	
	If you declare ac as follows, the compiler generates code to perform pointer-type
	addressing rather than array-type addressing:
	
	     extern char *ac;  // WRONG!
	
	The compiler uses the first few bytes of the array as an address (rather than as
	characters) and accesses the memory stored at that (unintended) location.
	
	Additional query words: 8.00
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
