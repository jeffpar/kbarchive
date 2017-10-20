---
layout: page
title: "Q37624: INFO: Precedence Affects Grouping of Operands, Not Evaluation"
permalink: /kb/037/Q37624/
---

## Q37624: INFO: Precedence Affects Grouping of Operands, Not Evaluation

{% raw %}

	Article: Q37624
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Operator precedence in C affects how operands are grouped; it does not
	necessarily indicate the order in which operands are evaluated. The logical AND
	(&&) operator has a higher precedence than the logical OR (||) operator.
	Therefore, the statement:
	
	  lvalue = operand1 || operand2 && operand3;
	
	is logically equivalent to the following:
	
	  lvalue = operand1 || (operand2 && operand3);
	
	However, this grouping does not indicate that the subexpression (operand2
	&& operand3) will be evaluated first. In fact, this statement is a
	logical OR expression with two operands: operand1 and "(operand2 &&
	operand3)." Because a logical OR expression evaluates its operands in
	left-to-right order, operand1 is evaluated first.
	
	MORE INFORMATION
	================
	
	The following example demonstrates this behavior:
	
	Sample Code:
	------------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	
	  int a, b, c, d;
	
	  void main()
	  {
	     a = (b = 2) || (c = 3) && (d = 4);
	     printf("a = %d, b = %d, c = %d, d = %d\n", a, b, c, d);
	  }
	
	Program output:
	
	  a = 1, b = 2, c = 0, d = 0
	
	Because "(b = 2)" is not 0, the result of the expression is TRUE (1) and the code
	does not perform any further evaluations. Therefore, the code does not perform
	the assignments to c and d. To ensure that values are always assigned to the
	variables, use separate assignment statements.
	
	As Kernighan and Ritchie note on page 54 of "The C Programming Language" (second
	edition), "The moral is that writing code that depends on the order of
	evaluation is a bad programming practice in any language."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
