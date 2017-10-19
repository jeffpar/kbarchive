---
layout: page
title: "Q117865: DOCERR: Control and Status Word Missing Abbreviation Info"
permalink: /kb/117/Q117865/
---

## Q117865: DOCERR: Control and Status Word Missing Abbreviation Info

	Article: Q117865
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 148 of the "MASM 6.11 Reference Manual" has an alphabetical listing of math
	coprocessor instructions. Page 150 contains Figure 5.2, a diagram of the Control
	Word and Status Word. The manual is missing the descriptions of the different
	fields, which were included with the "MASM 6.0 Reference Manual."
	
	The format of the Control-Word and Status-Word registers are as follows:
	
	Control Word
	------------
	
	Bit                                          Bit
	15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
	X  X  X IC RC RC RC PC PC IE    PM UM ZM DM IM
	
	Status Word
	-----------
	
	Bit                                          Bit
	15 14 13 12 11 10  9  8  7  6  5  4  3  2  1  0
	B C3 ST ST ST C2 C1 C0 ES SF PE UE OE ZE DE IE
	
	The abbreviations for the fields in the Control Word and Status Word are:
	
	  IC - Infinity Control
	  0 = Projective (default on 8087 and 80287)
	  1 = Affine
	  Note: Used for 8087 and 80287 only, 80387 uses affine regardless
	        of setting
	
	  RC - Rounding Control
	  00 = Round to nearest or even (default)
	  01 = Round down toward -infinity
	  10 = Round up toward +infinity
	  11 = Chop by truncating toward 0
	
	  PC - Precision Control
	  00 = 24-bit mantissa
	  10 = 53-bit mantissa
	  11 = 64-bit mantissa
	
	  IE - Interrupt Enable Mask
	  Used for 8087 only; undefined on 80287 and 80387
	
	  SF - Stack Flag
	  Used for 80387 only; undefined on 80287 and 8087
	
	Exception Masks and Flags
	-------------------------
	
	  PM/PE - Precision
	  UM/UE - Underflow
	  OM/OE - Overflow
	  ZM/ZE - Zero Divide
	  DM/DE - Denormalized Operand
	  IM/IE - Invalid Operation
	  For masks:
	     1 = masked; 0 = unmasked
	
	  For exceptions:
	     1 = exceptions; 0 = no exception
	  B - Busy
	  1 = exception control unit active
	
	  C3 C2 C1 C0 - Condition Codes
	
	  ST - Stack Top Pointer
	  Points to current top of stack
	
	  ES - Error Summary (80287/387)
	  On a 8087, the value is IR - Interrupt Request
	
	Additional query words: 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	
