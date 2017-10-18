---
layout: page
title: "Q94942: DOCERR: Value Returned By Prologue Macro Documented Incorrectly"
permalink: kb/094/Q94942/
---

## Q94942: DOCERR: Value Returned By Prologue Macro Documented Incorrectly

	Article: Q94942
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application developed with the Microsoft Macro Assembler (MASM) can define a
	macro that controls the code generated for the procedure prologue and epilogue.
	The prologue macro must return a value.
	
	Page 206 of the Microsoft Macro Assembler "Programmer's Guide" for MASM 6.0, and
	page 202 of the same manual for MASM 6.1 includes the following statement
	regarding the return value for the prologue macro:
	
	  Your macro function must return the parmbytes parameter.
	
	This statement is incorrect and should be corrected to read as follows:
	
	  Your macro function should return the localbytes parameter.
	
	The sample prologue macro provided on page 207 for MASM 6.0 and page 203 for MASM
	6.1 also contains an error because it returns the %bytecount parameter instead
	of the %numlocals parameter. Correct the EXITM statement in the macro to read as
	follows:
	
	  EXITM %numlocals
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
