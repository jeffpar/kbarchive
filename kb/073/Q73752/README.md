---
layout: page
title: "Q73752: FIX: MASM 6.0 Does Not Detect Overflow Initializing Structures"
permalink: kb/073/Q73752/
---

## Q73752: FIX: MASM 6.0 Does Not Detect Overflow Initializing Structures

	Article: Q73752
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
	
	In certain situations, the Microsoft Macro Assembler (MASM) version 6.0 will not
	detect an overflow condition when initializing structure elements. This will
	most likely occur when the MASM 5.1 compatibility option is used (that is, /Zm
	on the command line, OPTION M510 in the source code, or when using the MASM
	driver) and the initialized type is of word size. In cases where the error is
	not generated but should be, the specified initialization value, modulo the
	maximum size for the type, is used as the value of the variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	In the sample code below, a structure is declared without initializing the
	elements in the structure. Later, another structure is declared that contains
	the first structure and it initializes the structure to a value that will create
	an overflow condition. This error is not caught by the assembler.
	
	In the second case, a data item is allocated for the first structure and
	initialized to a value that would be an overflow. Again, the assembler does not
	generate an error if assembled with MASM 5.1 compatibility.
	
	In the third case, a structure is declared and initialized at the same time. In
	this instance, MASM will generate the following error if an overflow condition
	exists.
	
	  error A2071: initializer magnitude too large for specified size
	
	In this particular example, a number in the range of 65536 (010000h) to 65663
	(01007fh) will not be caught by the assembler if decimal notation is used. If
	hex notation is used, the assembler will catch the error.
	
	To work around this, either avoid using the MASM 5.1 compatibility options or use
	hex notation when initializing variables.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zm /Fl
	
	  .MODEL small
	           OPTION M510
	  Struc1   struc
	           StrucWord   dw     ?
	  Struc1   ends
	
	  Struc2   struc
	           mystruct    Struc1 {65536}      ; Should generate A2071 Error
	  Struc2   ends
	
	  Struc3   struc
	           StrucWord2  dw     65536        ; Does generate A2071 Error
	  Struc3   ends
	
	  .DATA
	  test1    Struc1  {65536}                 ; Should generate A2071 Error
	
	  test2    Struc2  { }                     ; Should generate A2071 Error
	
	  test3    Struc3  { }                     ; Does generate A2071 Error
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
