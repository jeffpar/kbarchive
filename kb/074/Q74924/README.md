---
layout: page
title: "Q74924: A Structure Template Can Be Referenced in a MASM Program"
permalink: /kb/074/Q74924/
---

## Q74924: A Structure Template Can Be Referenced in a MASM Program

	Article: Q74924
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.10,5.10a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.10, 5.10a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft Macro Assembler (MASM), if a structure type is declared but
	no instance of the structure is ever defined, the assembler will still permit
	access to the structure.
	
	This is expected behavior for the assembler. A reference to a structure field in
	this manner is equivalent to taking the offset of the field from the beginning
	of the structure.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this situation. The example declares an
	"animal" structure type, but does not define an instance of the structure. A
	reference to this structure type is then made in the following line:
	
	     mov ax, animal.dog
	
	As described above, the reference to animal.dog just generates the offset of the
	field, dog, from the beginning of the structure; therefore, this line is
	effectively the same as the statement "mov ax, 2".
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	          .MODEL SMALL
	
	          animal   struc
	          cat     dw  11
	          dog     dw  12
	          animal   ends
	
	          .CODE
	  start:  mov ax, @data
	          mov ds, ax
	          mov ax, animal.dog
	          END start
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:5.10,5.10a,6.0
	
	=============================================================================
	
