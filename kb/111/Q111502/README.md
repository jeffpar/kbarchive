---
layout: page
title: "Q111502: BUG: SUBSTR Index Past End of String Incorrectly Assembles"
permalink: /kb/111/Q111502/
---

## Q111502: BUG: SUBSTR Index Past End of String Incorrectly Assembles

	Article: Q111502
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MASM 6.x will incorrectly assemble the SUBSTR directive and not generate the
	expected error if the index value is 1 (one) greater than the length of the
	string. The expected error is:
	
	  A2091: index value past end of string
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Macro Assembler
	(MASM) versions 6.x. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this behavior as well as the correct use of
	SUBSTR.
	
	The SUBSTR directive selects a value from a string and assigns it to a symbol.
	The index value (start value) cannot be greater than the length of the string.
	The format of the directive is:
	
	  <name> SUBSTR <string>, <index>
	
	-or-
	
	  <name> SUBSTR <string>, <start>, <length>
	
	The directive is documented on pages 246-247 of the MASM 6.1x "Programmer[ASCII
	146]s Guide."
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	  .model small
	  .data
	     op1 substr <12345678>,8  ;  4
	     op2 sizestr op1          ;  5
	
	     op3 substr <12345678>,9  ;  7 - should be A2091 here
	     op4 sizestr op3          ;  8 - should be A2006 here
	
	     op5 substr <12345678>,10 ; 10 - A2091 here
	     op6 sizestr op5          ; 11 - A2006 here
	  END
	
	  Assembling this will correctly generate two errors (A2091 and A2006) on
	  lines 10 and 11 as shown in the following (partial) listing. These errors
	  should also be generated on lines 7 and 8 of the source, but aren't, and
	  the value 0 (zero) is incorrectly assigned to symbol op4.
	
	                 ; Assemble options needed: /c /Fl
	                 .model small
	   0000          .data
	   = 8              op1 substr <12345678>,8  ;  4
	   = 0001           op2 sizestr op1          ;  5
	
	   =                op3 substr <12345678>,9  ;  7 - should be A2091 here
	   = 0000           op4 sizestr op3          ;  8 - should be A2006 here
	
	                    op5 substr <12345678>,10 ; 10 - A2091 here
	  test.asm(10): error A2091: index value past end of string
	                    op6 sizestr op5          ; 11 - A2006 here
	  test.asm(11): error A2006: undefined symbol : op5
	                 END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.10 buglist6.10b buglist6.11 buglist6.00 buglist6.00b buglist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	
