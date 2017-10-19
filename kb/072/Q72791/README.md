---
layout: page
title: "Q72791: FIX: MASM Fails to Generate Error When Real Values Are Too Small"
permalink: /kb/072/Q72791/
---

## Q72791: FIX: MASM Fails to Generate Error When Real Values Are Too Small

	Article: Q72791
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.10,5.10a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.10, 5.10a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) may fail to generate an error when a
	floating-point value is outside the range of the minimum allowable values.
	
	As documented on page 142 of the "Microsoft Macro Assembler Programmer's Guide"
	included with version 6.0, the limits when using the 4-byte REAL4 (or DD),
	8-byte REAL8 (or DQ), or the 10-byte REAL10 (or DT) are as follows:
	
	  Size        Low          High
	  ----        ---          ----
	
	  4 byte      1.18E-38     3.40E+38
	  8 byte      2.23E-308    1.79E+308
	 10 byte      3.37E-4932   1.18E+4932
	
	However, MASM versions 5.1, 5.1a, 6.0, 6.0a, and 6.0b fail to generate an error
	when exceeding the low end of this range until a value of 3.37E-32752 or smaller
	for the 4 and 8-byte types and a value of 3.37E-32746 or smaller for the 10-byte
	type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1, 5.1a, 6.0,
	6.0a, and 6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The sample program below may be used to illustrate this problem. In the code,
	two of each of the 4-, 8-, and 10-byte data types are declared and initialized.
	For each type, one initializing value is used that correctly causes an error,
	while the other similar initializing value fails to cause an error, even though
	it should.
	
	The declaration of n1, n3, and n5 correctly result in the following error in MASM
	version 6.0, 6.0a, and 6.0b:
	
	  error A2071: initializer magnitude too large for specified size
	
	MASM versions 5.1 and 5.1a are not as explicit in their error message, but they
	correctly generate the following overflow error for n1, n3, and n5:
	
	  error A2029: division by 0 or overflow
	
	Neither MASM version 5.1, 5.1a, 6.0, 6.0a, or 6.0b generates an error (as they
	should) on the declaration of n2, n4, and n6. (These versions fail to produce
	the expected error for any number smaller than the values listed above for each
	data type.)
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL large
	  .STACK 4096
	
	  .DATA
	  n1 DD 1.18E-32752   ;Causes error
	  n2 DD 1.18E-32751   ;Should cause error, but doesn't
	  n3 DQ 2.23E-32752   ;Causes error
	  n4 DQ 2.23E-32751   ;Should cause error, but doesn't
	  n5 DT 3.37E-32746   ;Causes error
	  n6 DT 3.37E-32745   ;Should cause error, but doesn't
	
	  .CODE
	  start:
	     mov ax, 4C00h
	     int 21h
	  END start
	
	Additional query words: 5.10 5.10a 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:5.10,5.10a,6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
