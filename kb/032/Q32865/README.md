---
layout: page
title: "Q32865: Invalid Operation and Inexact Result in Control Word"
permalink: kb/032/Q32865/
---

## Q32865: Invalid Operation and Inexact Result in Control Word

	Article: Q32865
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A good source of information for the 80287 Control and Status Words is the INTEL
	80286 and 80287 Programmer's Reference Manual. The text below gives a brief
	summary of the information found in the INTEL reference concerning the Invalid
	Operation and Inexact Result exceptions.
	
	MORE INFORMATION
	================
	
	When the 80287 processor attempts a numeric operation with invalid operands or
	produces a result that cannot be represented, the processor will check certain
	numeric exceptions. Among the exceptions checked are Invalid Operation and
	Inexact Result.
	
	The 80287 reports an Invalid Operation if any of the following occurs:
	
	  An attempt to load a register that is not empty (stack overflow).
	
	  -or-
	
	  An attempt to pop an operand from an empty register (stack underflow).
	
	  -or-
	
	  An operand is a NaN.
	
	  -or-
	
	  The operands cause the operation to be indeterminate (square root of negative
	  number, 0/0).
	
	If the result of an operation is not exactly representable in the destination
	format, the 80287 rounds the number and reports the precision exception. For
	example, the fraction 1/3 cannot be precisely represented in binary form.
	
	The 80287's system of real numbers may be closed by either two models of
	infinity. The two models are projective and affine closure. The default means of
	closure is projective. When projective closure is selected, the NPX treats the
	special values +infinity and -infinity as a single unsigned infinity. In the
	affine mode, the NPX respects the signs of infinity. While affine mode may
	provide more information than projective mode, there are occasions when the sign
	may be misleading. Projective mode, on the other hand, provides less
	information, but will not be misleading.
	
	Additional query words: 5.00 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.0,5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
