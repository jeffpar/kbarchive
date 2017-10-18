---
layout: page
title: "Q35507: Real-Number Encoding Needs Exact Number of Digits"
permalink: kb/035/Q35507/
---

## Q35507: Real-Number Encoding Needs Exact Number of Digits

	Article: Q35507
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Macro Assembler (MASM) versions 5.1, 5.1a, 6.0, 6.0a, and 6.0b
	real numbers can be initialized with a hexadecimal encoding by using the DD, DQ,
	and DT directives. In MASM 6.0, 6.0a, and 6.0b real numbers can also be
	initialized with a hexadecinal encoding by using the REAL4, REAL8, and REAL10
	directives. The number of digits for encoded numbers declared with DD, DQ, and
	DT or REAL4, REAL8, and REAL16 must be 8, 16, and 20 digits, respectively. If a
	leading 0 is supplied, the number must be 9, 17, and 21 digits respectively.
	
	MORE INFORMATION
	================
	
	The following example generates the warning:
	
	  warning A4057: Illegal size for operand
	  _DATA SEGMENT 'DATA'
	  a_var DQ 000000000r
	  _DATA ENDS
	  END
	
	MASM will correctly evaluate the constant, but the warning is telling the user
	that the number of digits is not correct. The real number should be defined with
	exactly 17 digits as in the following example.
	
	     _DATA SEGMENT 'DATA'
	     a_var DQ 00000000000000000r
	     _DATA ENDS
	     END
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
